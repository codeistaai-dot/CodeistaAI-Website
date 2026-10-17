'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useFormModal } from '@/context/FormModalContext';

interface HeaderNavProps {
  variant?: 'course' | 'home';
  courseName?: string;
}

export default function HeaderNav({
  variant = 'course',
  courseName = 'Python',
}: HeaderNavProps) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { openModal, isModalOpen } = useFormModal();

  const menuButtonRef = useRef<HTMLButtonElement | null>(null);
  const headerInnerRef = useRef<HTMLDivElement | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const closeDropdown = useCallback(() => {
    setIsDropdownOpen(false);
  }, []);

  const closeMenu = useCallback(
    (restoreFocus = false) => {
      setIsMenuOpen(false);
      closeDropdown();
      if (restoreFocus && menuButtonRef.current) {
        menuButtonRef.current.focus();
      }
    },
    [closeDropdown]
  );

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  const handleDropdownToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDropdownOpen(prev => !prev);
  };

  const handleCourseLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsDropdownOpen(false);
    setIsMenuOpen(false);
    if (pathname === href) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleEnquireClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const isMobile = window.matchMedia('(max-width: 800px)').matches;
    const opener = isMobile ? menuButtonRef.current : e.currentTarget;
    setIsMenuOpen(false);
    closeDropdown();
    openModal(opener);
  };

  // Close dropdown on outside click or escape key
  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isDropdownOpen) {
          setIsDropdownOpen(false);
          triggerRef.current?.focus();
          e.stopPropagation();
        } else if (isMenuOpen) {
          closeMenu(true);
        }
      }
    };

    document.addEventListener('click', handleDocumentClick);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isDropdownOpen, isMenuOpen, closeMenu]);

  // Mobile menu scroll lock and event handlers for course variant
  useEffect(() => {
    if (variant !== 'course') return;

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
  }, [isMenuOpen, isModalOpen, variant]);

  useEffect(() => {
    if (variant !== 'course') return;

    const handleClickOutside = (e: MouseEvent) => {
      if (
        isMenuOpen &&
        headerInnerRef.current &&
        !headerInnerRef.current.contains(e.target as Node)
      ) {
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

    document.addEventListener('click', handleClickOutside);
    if (headerInnerRef.current) {
      headerInnerRef.current.addEventListener('focusout', handleFocusOut);
    }
    mediaQuery.addEventListener('change', handleMediaChange);

    return () => {
      document.removeEventListener('click', handleClickOutside);
      mediaQuery.removeEventListener('change', handleMediaChange);
    };
  }, [isMenuOpen, closeMenu, variant]);

  // Shared Courses Dropdown Component
  const coursesDropdown = (
    <div className={`course-menu ${isDropdownOpen ? 'open' : ''}`} ref={dropdownRef}>
      <button
        ref={triggerRef}
        type="button"
        className={`course-menu-trigger ${isDropdownOpen ? 'open' : ''}`}
        aria-expanded={isDropdownOpen}
        aria-haspopup="true"
        onClick={handleDropdownToggle}
      >
        Courses <span aria-hidden="true">⌄</span>
      </button>
      {isDropdownOpen && (
        <div className="course-dropdown" role="menu">
          <Link
            href="/python"
            role="menuitem"
            onClick={e => handleCourseLinkClick(e, '/python')}
          >
            Python
          </Link>
          <Link
            href="/python-full-stack"
            role="menuitem"
            onClick={e => handleCourseLinkClick(e, '/python-full-stack')}
          >
            Python Full Stack
          </Link>
          <Link
            href="/gen-ai"
            role="menuitem"
            onClick={e => handleCourseLinkClick(e, '/gen-ai')}
          >
            Gen AI
          </Link>
        </div>
      )}
    </div>
  );

  if (variant === 'home') {
    return (
      <header>
        <div className="nav-wrap">
          <Link href="/" aria-label="CodeistaAI home">
            <Image
              src="/logo-dark.svg"
              alt="CodeistaAI"
              width={168}
              height={32}
              priority
            />
          </Link>
          <nav aria-label="Main navigation">
            {coursesDropdown}
            <a href="#approach">Our approach</a>
            <a className="button small" href="#courses">
              Find your path <span aria-hidden="true">↗</span>
            </a>
          </nav>
        </div>
      </header>
    );
  }

  return (
    <header className="header">
      <div className="wrap header-inner" ref={headerInnerRef}>
        <Link className="wordmark brand-link" href="/" aria-label="CodeistaAI home">
          <Image
            src="/logo-dark.svg"
            alt="CodeistaAI"
            className="brand-logo"
            width={168}
            height={26}
            priority
          />
        </Link>

        <button
          ref={menuButtonRef}
          className="menu-toggle"
          aria-expanded={isMenuOpen}
          aria-controls="navigation"
          onClick={toggleMenu}
        >
          Menu <span aria-hidden="true">{isMenuOpen ? '−' : '+'}</span>
        </button>

        <nav
          id="navigation"
          aria-label="Main navigation"
          className={isMenuOpen ? 'open' : ''}
        >
          {coursesDropdown}
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
            Explore {courseName} <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
