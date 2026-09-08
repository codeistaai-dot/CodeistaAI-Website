'use strict';
// Local presentation behavior only. No network requests, tracking, or storage.
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.getElementById('navigation');
function closeMenu(restoreFocus = false) {
  navigation.classList.remove('open');
  if (!document.querySelector('#enquiry-dialog[open]')) document.body.style.overflowY = '';
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.querySelector('span').textContent = '+';
  if (restoreFocus) menuButton.focus();
}
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  navigation.classList.toggle('open', open);
  document.body.style.overflowY = open ? 'hidden' : '';
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.querySelector('span').textContent = open ? '−' : '+';
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => closeMenu()));
document.addEventListener('keydown', event => { if (event.key === 'Escape' && navigation.classList.contains('open')) closeMenu(true); });
document.addEventListener('click', event => { if (!event.target.closest('.header')) closeMenu(); });
document.querySelector('.header').addEventListener('focusout', event => { if (!event.currentTarget.contains(event.relatedTarget)) closeMenu(); });
window.matchMedia('(min-width: 801px)').addEventListener('change', () => closeMenu());
const form = document.getElementById('enquiry-form');
const status = document.getElementById('form-status');
const submit = form.querySelector('[type="submit"]');
const fields = [document.getElementById('full-name'), document.getElementById('email'), document.getElementById('mobile'), document.getElementById('experience')];
let validated = false;
function errorFor(field) {
  const value = field.value.trim();
  if (field.id === 'full-name') {
    if (!value) return 'Enter a name; spaces alone are not valid.';
    if ([...value].length < 2 || value.length > 80) return 'Use a name between 2 and 80 characters.';
    if (!/^[\p{L}\p{M}][\p{L}\p{M} .’'\-]*$/u.test(value)) return 'Use letters, spaces, apostrophes, periods, or hyphens.';
    if ((value.match(/\p{L}/gu) || []).length < 2) return 'Include at least two letters in the name.';
  }
  if (field.id === 'email') {
    if (!value) return 'Enter a sample email address.';
    if (value.length > 254) return 'Use an email address with at most 254 characters.';
    const parts = value.split('@');
    const local = parts[0];
    const domain = parts[1] || '';
    if (parts.length !== 2 || local.length > 64 || !/^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+$/.test(local) || local.startsWith('.') || local.endsWith('.') || local.includes('..') || !domain.includes('.') || domain.split('.').some(label => !/^[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?$/.test(label)) || !/^[A-Za-z]{2,63}$/.test(domain.split('.').pop())) return 'Enter a valid email, such as learner@example.com.';
  }
  if (field.id === 'mobile') {
    if (!value) return 'Enter a sample mobile number with its country code.';
    if (!/^\+[1-9][0-9 ()-]*$/.test(value)) return 'Start with + and a country code; use digits, spaces, parentheses, or hyphens.';
    const digits = value.replace(/\D/g, '');
    if (digits.length < 8 || digits.length > 15) return 'Use 8–15 digits including the country code.';
    if (/^(\d)\1+$/.test(digits)) return 'Enter a valid-looking sample mobile number.';
  }
  if (field.id === 'experience'  && !['new', 'basics', 'practice'].includes(value)) return 'Choose your Python starting point.';
  return '';
}
function validateField(field) {
  const error = errorFor(field);
  field.setAttribute('aria-invalid', String(Boolean(error)));
  document.getElementById(field.getAttribute('aria-describedby').split(' ').pop()).textContent = error ? 'Error: ' + error : '';
  return !error;
}
fields.forEach(field => {
  field.addEventListener('blur', () => { field.value = field.value.trim(); validateField(field); });
  field.addEventListener('input', () => {
    if (field.getAttribute('aria-invalid') === 'true') validateField(field);
    status.textContent = '';
    if (validated) { validated = false; submit.disabled = false; }
  });
});
form.addEventListener('submit', event => {
  event.preventDefault();
  if (validated) return;
  status.textContent = '';
  fields.forEach(field => { field.value = field.value.trim(); });
  const invalid = fields.filter(field => !validateField(field));
  if (invalid.length) {
    status.textContent = 'Please correct the highlighted fields. No information is sent or saved.';
    invalid[0].focus(); return;
  }
  if (document.getElementById('website').value) { status.textContent = 'Demo validation could not complete. Clear the form and try again.'; return; }
  validated = true;
  submit.disabled = true;
  status.textContent = 'Demo only: your sample details passed local validation. No information was sent or saved. No enquiry or enrolment was created.';
});
form.addEventListener('reset', () => {
  validated = false; submit.disabled = false; status.textContent = '';
  fields.forEach(field => { field.removeAttribute('aria-invalid'); document.getElementById(field.getAttribute('aria-describedby').split(' ').pop()).textContent = ''; });
  fields[0].focus();
});
// Explicitly discard transient form values when leaving/reopening the preview.
window.addEventListener('pagehide', () => form.reset());
window.addEventListener('pageshow', event => { if (event.persisted) form.reset(); });

// Reuse the same form in the popup so validation and entered values stay consistent.
const enquiryDialog = document.getElementById('enquiry-dialog');
const formCard = document.querySelector('.form-card');
const formHome = document.createComment('Inline enquiry form location');
formCard.before(formHome);
let enquiryOpener = null;
let enquiryScrollY = 0;
document.querySelectorAll('a[href="#enquire"]').forEach(link => {
  link.setAttribute('aria-haspopup', 'dialog');
  link.setAttribute('aria-controls', 'enquiry-dialog');
  link.addEventListener('click', event => {
    event.preventDefault();
    if (enquiryDialog.open) return;
    enquiryOpener = link.closest('#navigation') && window.matchMedia('(max-width:800px)').matches ? menuButton : link;
    closeMenu();
    enquiryScrollY = window.scrollY;
    enquiryDialog.querySelector('.dialog-content').append(formCard);
    enquiryDialog.showModal();
    document.body.style.overflowY = 'hidden';
    enquiryDialog.scrollTop = 0;
    enquiryDialog.querySelector('.dialog-close').focus({preventScroll:true});
  });
});
enquiryDialog.querySelector('.dialog-close').addEventListener('click', () => enquiryDialog.close());
enquiryDialog.addEventListener('click', event => {
  if (event.target !== enquiryDialog) return;
  const box = enquiryDialog.getBoundingClientRect();
  if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) enquiryDialog.close();
});
enquiryDialog.addEventListener('close', () => {
  formHome.after(formCard);
  document.body.style.overflowY = '';
  window.scrollTo({top:enquiryScrollY,behavior:'instant'});
  enquiryOpener?.focus({preventScroll:true});
});
enquiryDialog.addEventListener('keydown', event => {
  if (event.key !== 'Tab') return;
  const controls = [...enquiryDialog.querySelectorAll('button:not(:disabled), input:not(:disabled), select:not(:disabled), a[href]')].filter(control => control.tabIndex >= 0 && control.getClientRects().length);
  const first = controls[0], last = controls[controls.length - 1];
  if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
  else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
});
