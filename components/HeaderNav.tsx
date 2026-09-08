'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useFormModal } from '@/context/FormModalContext';

export default function HeaderNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openModal, isModalOpen } = useFormModal();
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);
  const headerInnerRef = useRef<HTMLDivElement | null>(null);

  const closeMenu = useCallback((restoreFocus = false) => {
    setIsMenuOpen(false);
    if (!isModalOpen) {
      document.body.style.overflowY = '';
    }
    if (restoreFocus && menuButtonRef.current) {
      menuButtonRef.current.focus();
    }
  }, [isModalOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(prev => {
      const next = !prev;
      if (next) {
        document.body.style.overflowY = 'hidden';
      } else if (!isModalOpen) {
        document.body.style.overflowY = '';
      }
      return next;
    });
  };

  const handleEnquireClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const isMobile = window.matchMedia('(max-width: 800px)').matches;
    const opener = isMobile ? menuButtonRef.current : e.currentTarget;
    closeMenu();
    openModal(opener);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        closeMenu(true);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (isMenuOpen && headerInnerRef.current && !headerInnerRef.current.contains(e.target as Node)) {
        closeMenu();
      }
    };

    const handleFocusOut = (e: FocusEvent) => {
      if (
        isMenuOpen &&
        headerInnerRef.current &&
        !headerInnerRef.current.contains(e.relatedTarget as Node | null)
      ) {
        closeMenu();
      }
    };

    const mediaQuery = window.matchMedia('(min-width: 801px)');
    const handleMediaChange = (e: MediaQueryListEvent | MediaQueryList) => {
      if (e.matches && isMenuOpen) {
        closeMenu();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('click', handleClickOutside);
    if (headerInnerRef.current) {
      headerInnerRef.current.addEventListener('focusout', handleFocusOut);
    }
    mediaQuery.addEventListener('change', handleMediaChange);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('click', handleClickOutside);
      mediaQuery.removeEventListener('change', handleMediaChange);
    };
  }, [isMenuOpen, closeMenu]);

  return (
    <div className="wrap header-inner" ref={headerInnerRef}>
      <a className="wordmark" href="#" aria-label="CodeistaAI home">
        codeista<span>AI</span>
        <span className="brand-dot" aria-hidden="true">
          .
        </span>
      </a>

      <button
        ref={menuButtonRef}
        className="menu-toggle"
        aria-expanded={isMenuOpen}
        aria-controls="navigation"
        onClick={toggleMenu}
      >
        Menu <span aria-hidden="true">{isMenuOpen ? '−' : '+'}</span>
      </button>

      <nav id="navigation" aria-label="Main navigation" className={isMenuOpen ? 'open' : ''}>
        <a href="#approach" onClick={() => closeMenu()}>
          The approach
        </a>
        <a href="#curriculum" onClick={() => closeMenu()}>
          Curriculum
        </a>
        <a href="#projects" onClick={() => closeMenu()}>
          Projects
        </a>
        <a href="#faq" onClick={() => closeMenu()}>
          FAQs
        </a>
        <a
          className="button compact"
          href="#enquire"
          aria-haspopup="dialog"
          aria-controls="enquiry-dialog"
          onClick={handleEnquireClick}
        >
          Explore Python <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </div>
  );
}
