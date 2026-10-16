'use client';

import { useEffect } from 'react';

export default function ScrollReveal() {
  useEffect(() => {
    try {
      const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
      if (motionPreference.matches || !('IntersectionObserver' in window)) {
        return;
      }

      let revealObserver: IntersectionObserver | null = null;

      const setupScrollReveals = () => {
        if (revealObserver) {
          revealObserver.disconnect();
        }

        const elements = Array.from(
          document.querySelectorAll<HTMLElement>(
            '.section-heading, .pillars article, .curriculum-intro, .modules details, .project-card, .project-bottom, .faq-grid > div, .enquiry-grid > div, .footer-main'
          )
        );

        elements.forEach(el => el.classList.remove('scroll-reveal', 'is-visible'));

        if (motionPreference.matches || !('IntersectionObserver' in window)) {
          return;
        }

        revealObserver = new IntersectionObserver(
          entries => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
              } else if (!entry.target.contains(document.activeElement)) {
                entry.target.classList.remove('is-visible');
              }
            });
          },
          { threshold: 0, rootMargin: '0px 0px -60px 0px' }
        );

        elements.forEach(el => {
          const rect = el.getBoundingClientRect();
          el.classList.add('scroll-reveal');
          if (rect.top < window.innerHeight - 60 && rect.bottom > 0) {
            el.classList.add('is-visible');
          }
          if (el.parentElement?.matches('.pillars, .project-grid')) {
            const index = Array.from(el.parentElement.children).indexOf(el);
            el.style.setProperty('--reveal-delay', `${index * 120}ms`);
          }
          revealObserver?.observe(el);
        });
      };

      setupScrollReveals();

      const handleMotionChange = () => setupScrollReveals();
      const handleFocusIn = (e: FocusEvent) => {
        const target = (e.target as HTMLElement | null)?.closest<HTMLElement>('.scroll-reveal');
        if (target) {
          target.classList.add('is-visible');
        }
      };

      motionPreference.addEventListener('change', handleMotionChange);
      window.addEventListener('pageshow', setupScrollReveals);
      document.addEventListener('focusin', handleFocusIn);

      return () => {
        revealObserver?.disconnect();
        motionPreference.removeEventListener('change', handleMotionChange);
        window.removeEventListener('pageshow', setupScrollReveals);
        document.removeEventListener('focusin', handleFocusIn);
      };
    } catch {
      // If animation initialization fails, elements remain visible and accessible
    }
  }, []);

  return null;
}
