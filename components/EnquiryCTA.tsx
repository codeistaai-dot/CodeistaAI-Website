'use client';

import React from 'react';
import { useFormModal } from '@/context/FormModalContext';

interface EnquiryCTAProps {
  className?: string;
  children: React.ReactNode;
  onBeforeOpen?: () => void;
}

export default function EnquiryCTA({ className, children, onBeforeOpen }: EnquiryCTAProps) {
  const { openModal } = useFormModal();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (onBeforeOpen) {
      onBeforeOpen();
    }
    openModal(e.currentTarget);
  };

  return (
    <a
      href="#enquire"
      className={className}
      aria-haspopup="dialog"
      aria-controls="enquiry-dialog"
      onClick={handleClick}
    >
      {children}
    </a>
  );
}
