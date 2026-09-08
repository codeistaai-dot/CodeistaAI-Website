'use client';

import React, { useEffect, useRef } from 'react';
import { useFormModal } from '@/context/FormModalContext';
import EnquiryFormCard from './EnquiryFormCard';

export default function EnquiryDialogModal() {
  const { isModalOpen, closeModal, openerRef, scrollPosRef } = useFormModal();
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isModalOpen) {
      if (!dialog.open) {
        dialog.showModal();
        dialog.scrollTop = 0;
        document.body.style.overflowY = 'hidden';
        const closeBtn = dialog.querySelector<HTMLButtonElement>('.dialog-close');
        closeBtn?.focus({ preventScroll: true });
      }
    } else {
      if (dialog.open) {
        dialog.close();
      }
    }
  }, [isModalOpen]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleClose = () => {
      closeModal();
      document.body.style.overflowY = '';
      window.scrollTo({ top: scrollPosRef.current, behavior: 'instant' as ScrollBehavior });
      if (openerRef.current) {
        openerRef.current.focus({ preventScroll: true });
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        dialog.close();
      }

      if (e.key === 'Tab') {
        const focusable = dialog.querySelectorAll<HTMLElement>(
          'button:not(:disabled), input:not(:disabled), select:not(:disabled), a[href]'
        );
        const controls = Array.from(focusable).filter(
          el => el.tabIndex >= 0 && el.getClientRects().length > 0
        );
        if (controls.length === 0) return;

        const first = controls[0];
        const last = controls[controls.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    const handleClick = (e: MouseEvent) => {
      if (e.target === dialog) {
        const box = dialog.getBoundingClientRect();
        if (
          e.clientX < box.left ||
          e.clientX > box.right ||
          e.clientY < box.top ||
          e.clientY > box.bottom
        ) {
          dialog.close();
        }
      }
    };

    const handleCancel = (e: Event) => {
      e.preventDefault();
      dialog.close();
    };

    dialog.addEventListener('close', handleClose);
    dialog.addEventListener('keydown', handleKeyDown);
    dialog.addEventListener('click', handleClick);
    dialog.addEventListener('cancel', handleCancel);

    return () => {
      dialog.removeEventListener('close', handleClose);
      dialog.removeEventListener('keydown', handleKeyDown);
      dialog.removeEventListener('click', handleClick);
      dialog.removeEventListener('cancel', handleCancel);
    };
  }, [closeModal, openerRef, scrollPosRef]);

  return (
    <dialog
      id="enquiry-dialog"
      ref={dialogRef}
      aria-labelledby="modal-enquiry-form-title"
      aria-describedby="modal-demo-notice"
    >
      <button
        type="button"
        className="dialog-close"
        aria-label="Close enquiry form"
        onClick={() => {
          if (dialogRef.current?.open) {
            dialogRef.current.close();
          } else {
            closeModal();
          }
        }}
      >
        ×
      </button>
      <div className="dialog-content">
        {isModalOpen && <EnquiryFormCard instance="modal" />}
      </div>
    </dialog>
  );
}
