'use client';

import React, { createContext, useContext, useState, useRef, useEffect, useCallback } from 'react';
import {
  captureUrlAttribution,
  getStoredAttribution,
  clearStoredAttribution,
} from '@/utils/attribution';

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
  isSubmitting: boolean;
  isSubmitted: boolean;
  isModalOpen: boolean;
  activeInstance: 'inline' | 'modal' | null;
  openerRef: React.MutableRefObject<HTMLElement | null>;
  scrollPosRef: React.MutableRefObject<number>;
  openModal: (opener?: HTMLElement | null) => void;
  closeModal: () => void;
  handleInputChange: (field: keyof FormValues, value: string) => void;
  handleInputBlur: (field: keyof FormErrors, instance: 'inline' | 'modal') => void;
  handleSubmit: (e: React.FormEvent, instance: 'inline' | 'modal') => Promise<void>;
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

export function normalizeIndiaPhone(raw: string): string {
  if (!raw) return '';
  let digits = raw.replace(/\D/g, '');
  if (digits.startsWith('91') && digits.length === 12) {
    digits = digits.slice(2);
  } else if (digits.startsWith('0') && digits.length === 11) {
    digits = digits.slice(1);
  }
  return digits;
}

export function isValidUnicodeName(name: string): boolean {
  const trimmed = (name || '').trim();
  if (trimmed.length < 2 || trimmed.length > 60) return false;
  if (!/^[\p{L}\p{M}][\p{L}\p{M} .’'\-]*$/u.test(trimmed)) return false;
  const letters = trimmed.match(/\p{L}/gu) || [];
  return letters.length >= 2;
}

export function getFullNameError(val: string): string {
  const value = (val || '').trim();
  if (!value) return 'Enter your name using 2-60 letters.';
  if (value.length < 2 || value.length > 60) return 'Enter your name using 2-60 letters.';
  if (!isValidUnicodeName(value)) return 'Enter your name using 2-60 letters.';
  return '';
}

export function getEmailError(val: string): string {
  const value = (val || '').trim();
  if (!value) return 'Enter a valid email address.';
  if (value.length > 254) return 'Use an email address with at most 254 characters.';
  const emailRegex = /^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?)+$/;
  if (!emailRegex.test(value)) {
    return 'Enter a valid email, such as learner@example.com.';
  }
  return '';
}

export function getMobileError(val: string): string {
  const value = (val || '').trim();
  if (!value) return 'Enter a valid 10-digit Indian mobile number beginning with 6-9.';
  const normalized = normalizeIndiaPhone(value);
  if (!/^[6-9]\d{9}$/.test(normalized)) {
    return 'Enter a valid 10-digit Indian mobile number beginning with 6-9.';
  }
  return '';
}

export function getExperienceError(val: string): string {
  const value = (val || '').trim();
  if (!['new', 'basics', 'practice'].includes(value)) {
    return 'Please select your Python starting point.';
  }
  return '';
}

const FormModalContext = createContext<FormModalContextType | null>(null);

export function FormModalProvider({ children }: { children: React.ReactNode }) {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>(initialErrors);
  const [status, setStatus] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [activeInstance, setActiveInstance] = useState<'inline' | 'modal' | null>(null);

  const openerRef = useRef<HTMLElement | null>(null);
  const scrollPosRef = useRef<number>(0);

  // Capture UTM parameters on initial load
  useEffect(() => {
    captureUrlAttribution();
  }, []);

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
    if (isSubmitted) {
      setIsSubmitted(false);
    }
  }, [errors, isSubmitted]);

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

  const handleSubmit = useCallback(async (e: React.FormEvent, instance: 'inline' | 'modal') => {
    e.preventDefault();
    setActiveInstance(instance);

    // Duplicate submit protection
    if (isSubmitting) return;

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
      setStatus('Please correct the highlighted fields and try again.');
      if (typeof document !== 'undefined') {
        const firstInvalidId = `${instance}-${invalidFields[0]}`;
        const firstElement = document.getElementById(firstInvalidId);
        firstElement?.focus();
      }
      return;
    }

    // Honeypot check
    if (trimmedValues.website) {
      setStatus('Unable to process submission. Please clear the form and try again.');
      return;
    }

    setIsSubmitting(true);

    // Read stored attribution snapshot for submission
    const attributionSnapshot = getStoredAttribution();

    const payload = {
      name: trimmedValues.fullName,
      email: trimmedValues.email,
      phone: normalizeIndiaPhone(trimmedValues.mobile),
      pythonStartingPoint: trimmedValues.experience,
      countryCode: '+91',
      timezone: 'Asia/Kolkata',
      route: typeof window !== 'undefined' ? window.location.pathname : '/',
      ...(attributionSnapshot?.data || {}),
    };

    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json().catch(() => null);

      if (response.ok && data?.success) {
        // Success verified: clear attribution ONLY if no newer attribution arrived
        clearStoredAttribution(attributionSnapshot?.capturedAt);

        setIsSubmitted(true);
        setStatus(
          data.message ||
            'Thank you! Your enquiry has been received. Our team will contact you shortly.'
        );
        setValues(initialValues);
        setErrors(initialErrors);
      } else {
        // Handle specific server error statuses
        if (response.status === 409) {
          setStatus(
            data?.message ||
              'It looks like there is a conflicting record with this email or phone number.'
          );
        } else if (response.status === 403) {
          setStatus(
            data?.message ||
              'This account is currently inactive or on hold. Please contact support.'
          );
        } else if (response.status === 400) {
          if (data?.errors) {
            const serverErrors: Partial<FormErrors> = {};
            if (data.errors.name?._errors?.[0]) serverErrors.fullName = data.errors.name._errors[0];
            if (data.errors.email?._errors?.[0]) serverErrors.email = data.errors.email._errors[0];
            if (data.errors.phone?._errors?.[0]) serverErrors.mobile = data.errors.phone._errors[0];
            if (data.errors.pythonStartingPoint?._errors?.[0])
              serverErrors.experience = data.errors.pythonStartingPoint._errors[0];

            setErrors(prev => ({ ...prev, ...serverErrors }));
          }
          setStatus(data?.message || 'Please check your details and try again.');
        } else {
          setStatus(
            data?.message || 'Oops! Something went wrong on our end. Please try again later.'
          );
        }
      }
    } catch {
      setStatus('Network error. Please check your connection and try submitting again.');
    } finally {
      setIsSubmitting(false);
    }
  }, [isSubmitting, values]);

  const handleReset = useCallback((instance: 'inline' | 'modal') => {
    setActiveInstance(instance);
    setIsSubmitted(false);
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
      setIsSubmitted(false);
    };
    const handlePageShow = (event: PageTransitionEvent) => {
      if (event.persisted) {
        setValues(initialValues);
        setErrors(initialErrors);
        setStatus('');
        setIsSubmitted(false);
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
        isSubmitting,
        isSubmitted,
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
