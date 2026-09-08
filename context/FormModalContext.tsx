'use client';

import React, { createContext, useContext, useState, useRef, useEffect, useCallback } from 'react';

export interface FormValues {
  fullName: string;
  email: string;
  mobile: string;
  experience: string;
  website: string;
}

export interface FormErrors {
  fullName: string;
  email: string;
  mobile: string;
  experience: string;
}

interface FormModalContextType {
  values: FormValues;
  errors: FormErrors;
  status: string;
  isValidated: boolean;
  isModalOpen: boolean;
  activeInstance: 'inline' | 'modal' | null;
  openerRef: React.MutableRefObject<HTMLElement | null>;
  scrollPosRef: React.MutableRefObject<number>;
  openModal: (opener?: HTMLElement | null) => void;
  closeModal: () => void;
  handleInputChange: (field: keyof FormValues, value: string) => void;
  handleInputBlur: (field: keyof FormErrors, instance: 'inline' | 'modal') => void;
  handleSubmit: (e: React.FormEvent, instance: 'inline' | 'modal') => void;
  handleReset: (instance: 'inline' | 'modal') => void;
}

const initialValues: FormValues = {
  fullName: '',
  email: '',
  mobile: '',
  experience: '',
  website: '',
};

const initialErrors: FormErrors = {
  fullName: '',
  email: '',
  mobile: '',
  experience: '',
};

function getFullNameError(val: string): string {
  const value = val.trim();
  if (!value) return 'Enter a name; spaces alone are not valid.';
  if ([...value].length < 2 || value.length > 80) return 'Use a name between 2 and 80 characters.';
  if (!/^[\p{L}\p{M}][\p{L}\p{M} .’'\-]*$/u.test(value)) return 'Use letters, spaces, apostrophes, periods, or hyphens.';
  if ((value.match(/\p{L}/gu) || []).length < 2) return 'Include at least two letters in the name.';
  return '';
}

function getEmailError(val: string): string {
  const value = val.trim();
  if (!value) return 'Enter a sample email address.';
  if (value.length > 254) return 'Use an email address with at most 254 characters.';
  const parts = value.split('@');
  const local = parts[0];
  const domain = parts[1] || '';
  if (
    parts.length !== 2 ||
    local.length > 64 ||
    !/^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+$/.test(local) ||
    local.startsWith('.') ||
    local.endsWith('.') ||
    local.includes('..') ||
    !domain.includes('.') ||
    domain.split('.').some(label => !/^[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?$/.test(label)) ||
    !/^[A-Za-z]{2,63}$/.test(domain.split('.').pop() || '')
  ) {
    return 'Enter a valid email, such as learner@example.com.';
  }
  return '';
}

function getMobileError(val: string): string {
  const value = val.trim();
  if (!value) return 'Enter a sample mobile number with its country code.';
  if (!/^\+[1-9][0-9 ()-]*$/.test(value)) return 'Start with + and a country code; use digits, spaces, parentheses, or hyphens.';
  const digits = value.replace(/\D/g, '');
  if (digits.length < 8 || digits.length > 15) return 'Use 8–15 digits including the country code.';
  if (/^(\d)\1+$/.test(digits)) return 'Enter a valid-looking sample mobile number.';
  return '';
}

function getExperienceError(val: string): string {
  const value = val.trim();
  if (!['new', 'basics', 'practice'].includes(value)) return 'Choose your Python starting point.';
  return '';
}

const FormModalContext = createContext<FormModalContextType | null>(null);

export function FormModalProvider({ children }: { children: React.ReactNode }) {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>(initialErrors);
  const [status, setStatus] = useState<string>('');
  const [isValidated, setIsValidated] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [activeInstance, setActiveInstance] = useState<'inline' | 'modal' | null>(null);

  const openerRef = useRef<HTMLElement | null>(null);
  const scrollPosRef = useRef<number>(0);

  const openModal = useCallback((opener?: HTMLElement | null) => {
    if (typeof window !== 'undefined') {
      scrollPosRef.current = window.scrollY;
      if (opener) {
        openerRef.current = opener;
      }
      setIsModalOpen(true);
      document.body.style.overflowY = 'hidden';
    }
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const handleInputChange = useCallback((field: keyof FormValues, value: string) => {
    setValues(prev => ({ ...prev, [field]: value }));
    setStatus('');
    if (errors[field as keyof FormErrors]) {
      setErrors(prev => {
        let err = '';
        if (field === 'fullName') err = getFullNameError(value);
        else if (field === 'email') err = getEmailError(value);
        else if (field === 'mobile') err = getMobileError(value);
        else if (field === 'experience') err = getExperienceError(value);
        return { ...prev, [field]: err };
      });
    }
    if (isValidated) {
      setIsValidated(false);
    }
  }, [errors, isValidated]);

  const handleInputBlur = useCallback((field: keyof FormErrors, instance: 'inline' | 'modal') => {
    setActiveInstance(instance);
    setValues(prev => {
      const trimmed = prev[field].trim();
      const updated = { ...prev, [field]: trimmed };
      let err = '';
      if (field === 'fullName') err = getFullNameError(trimmed);
      else if (field === 'email') err = getEmailError(trimmed);
      else if (field === 'mobile') err = getMobileError(trimmed);
      else if (field === 'experience') err = getExperienceError(trimmed);
      setErrors(prevErr => ({ ...prevErr, [field]: err }));
      return updated;
    });
  }, []);

  const handleSubmit = useCallback((e: React.FormEvent, instance: 'inline' | 'modal') => {
    e.preventDefault();
    setActiveInstance(instance);
    if (isValidated) return;

    setStatus('');
    const trimmedValues: FormValues = {
      fullName: values.fullName.trim(),
      email: values.email.trim(),
      mobile: values.mobile.trim(),
      experience: values.experience.trim(),
      website: values.website.trim(),
    };
    setValues(trimmedValues);

    const nameErr = getFullNameError(trimmedValues.fullName);
    const emailErr = getEmailError(trimmedValues.email);
    const mobileErr = getMobileError(trimmedValues.mobile);
    const expErr = getExperienceError(trimmedValues.experience);

    const newErrors: FormErrors = {
      fullName: nameErr,
      email: emailErr,
      mobile: mobileErr,
      experience: expErr,
    };
    setErrors(newErrors);

    const invalidFields: string[] = [];
    if (nameErr) invalidFields.push('full-name');
    if (emailErr) invalidFields.push('email');
    if (mobileErr) invalidFields.push('mobile');
    if (expErr) invalidFields.push('experience');

    if (invalidFields.length > 0) {
      setStatus('Please correct the highlighted fields. No information is sent or saved.');
      if (typeof document !== 'undefined') {
        const firstInvalidId = `${instance}-${invalidFields[0]}`;
        const firstElement = document.getElementById(firstInvalidId);
        firstElement?.focus();
      }
      return;
    }

    if (trimmedValues.website) {
      setStatus('Demo validation could not complete. Clear the form and try again.');
      return;
    }

    setIsValidated(true);
    setStatus('Demo only: your sample details passed local validation. No information was sent or saved. No enquiry or enrolment was created.');
  }, [isValidated, values]);

  const handleReset = useCallback((instance: 'inline' | 'modal') => {
    setActiveInstance(instance);
    setIsValidated(false);
    setStatus('');
    setValues(initialValues);
    setErrors(initialErrors);
    if (typeof document !== 'undefined') {
      const firstInput = document.getElementById(`${instance}-full-name`);
      firstInput?.focus();
    }
  }, []);

  // Explicitly discard transient form values on pagehide/pageshow
  useEffect(() => {
    const handlePageHide = () => {
      setValues(initialValues);
      setErrors(initialErrors);
      setStatus('');
      setIsValidated(false);
    };
    const handlePageShow = (event: PageTransitionEvent) => {
      if (event.persisted) {
        setValues(initialValues);
        setErrors(initialErrors);
        setStatus('');
        setIsValidated(false);
      }
    };
    window.addEventListener('pagehide', handlePageHide);
    window.addEventListener('pageshow', handlePageShow);
    return () => {
      window.removeEventListener('pagehide', handlePageHide);
      window.removeEventListener('pageshow', handlePageShow);
    };
  }, []);

  return (
    <FormModalContext.Provider
      value={{
        values,
        errors,
        status,
        isValidated,
        isModalOpen,
        activeInstance,
        openerRef,
        scrollPosRef,
        openModal,
        closeModal,
        handleInputChange,
        handleInputBlur,
        handleSubmit,
        handleReset,
      }}
    >
      {children}
    </FormModalContext.Provider>
  );
}

export function useFormModal() {
  const context = useContext(FormModalContext);
  if (!context) {
    throw new Error('useFormModal must be used within a FormModalProvider');
  }
  return context;
}
