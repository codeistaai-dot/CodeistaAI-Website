'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { useFormModal } from '@/context/FormModalContext';

export default function HeaderNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openModal, isModalOpen } = useFormModal();
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);
  const headerInnerRef = useRef<HTMLDivElement | null>(null);

  const closeMenu = useCallback((restoreFocus = false) => {
    setIsMenuOpen(false);
    if (restoreFocus && menuButtonRef.current) {
      menuButtonRef.current.focus();
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  const handleEnquireClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const isMobile = window.matchMedia('(max-width: 800px)').matches;
    const opener = isMobile ? menuButtonRef.current : e.currentTarget;
    setIsMenuOpen(false);
    openModal(opener);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menu-open');
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.classList.remove('menu-open');
      if (!isModalOpen) {
        document.body.style.overflowY = '';
      }
    }
    return () => {
      document.body.classList.remove('menu-open');
      if (!isModalOpen) {
        document.body.style.overflowY = '';
      }
    };
  }, [isMenuOpen, isModalOpen]);

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
      <a className="wordmark brand-link" href="#" aria-label="CodeistaAI home">
        <Image
          src="/logo-dark.svg"
          alt="CodeistaAI"
          className="brand-logo"
          width={168}
          height={26}
          priority
        />
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
