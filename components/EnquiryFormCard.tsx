'use client';

import React from 'react';
import { useFormModal } from '@/context/FormModalContext';

interface EnquiryFormCardProps {
  instance: 'inline' | 'modal';
}

export default function EnquiryFormCard({ instance }: EnquiryFormCardProps) {
  const {
    values,
    errors,
    status,
    isValidated,
    handleInputChange,
    handleInputBlur,
    handleSubmit,
    handleReset,
  } = useFormModal();

  const idPrefix = instance;

  return (
    <div className="form-card">
      <span className="form-badge">DEMO ONLY</span>
      <h3 id={`${idPrefix}-enquiry-form-title`}>Let&apos;s start with you.</h3>
      <p id={`${idPrefix}-demo-notice`}>Try the enquiry form. No information is sent or saved.</p>
      <p className="required-note">All fields are required. Use sample details.</p>

      <form
        id={`${idPrefix}-enquiry-form`}
        noValidate
        autoComplete="off"
        aria-describedby={`${idPrefix}-demo-notice`}
        onSubmit={e => handleSubmit(e, instance)}
        onReset={e => {
          e.preventDefault();
          handleReset(instance);
        }}
      >
        <div className="field">
          <label htmlFor={`${idPrefix}-full-name`}>
            Name <span aria-hidden="true">*</span>
          </label>
          <input
            id={`${idPrefix}-full-name`}
            type="text"
            required
            minLength={2}
            maxLength={80}
            placeholder="e.g. Sample Learner"
            autoComplete="off"
            aria-describedby={`${idPrefix}-name-error`}
            aria-invalid={errors.fullName ? 'true' : 'false'}
            value={values.fullName}
            onChange={e => handleInputChange('fullName', e.target.value)}
            onBlur={() => handleInputBlur('fullName', instance)}
          />
          <p className="error" id={`${idPrefix}-name-error`}>
            {errors.fullName ? `Error: ${errors.fullName}` : ''}
          </p>
        </div>

        <div className="field">
          <label htmlFor={`${idPrefix}-email`}>
            Email <span aria-hidden="true">*</span>
          </label>
          <input
            id={`${idPrefix}-email`}
            type="email"
            required
            maxLength={254}
            placeholder="e.g. learner@example.com"
            autoComplete="off"
            autoCapitalize="none"
            spellCheck="false"
            aria-describedby={`${idPrefix}-email-error`}
            aria-invalid={errors.email ? 'true' : 'false'}
            value={values.email}
            onChange={e => handleInputChange('email', e.target.value)}
            onBlur={() => handleInputBlur('email', instance)}
          />
          <p className="error" id={`${idPrefix}-email-error`}>
            {errors.email ? `Error: ${errors.email}` : ''}
          </p>
        </div>

        <div className="field">
          <label htmlFor={`${idPrefix}-mobile`}>
            Mobile number <span aria-hidden="true">*</span>
          </label>
          <input
            id={`${idPrefix}-mobile`}
            type="tel"
            inputMode="tel"
            required
            maxLength={25}
            placeholder="+ [country code] [mobile number]"
            autoComplete="off"
            aria-describedby={`${idPrefix}-mobile-hint ${idPrefix}-mobile-error`}
            aria-invalid={errors.mobile ? 'true' : 'false'}
            value={values.mobile}
            onChange={e => handleInputChange('mobile', e.target.value)}
            onBlur={() => handleInputBlur('mobile', instance)}
          />
          <p id={`${idPrefix}-mobile-hint`} className="mobile-hint">
            Include + and your country code. Use sample details only.
          </p>
          <p className="error" id={`${idPrefix}-mobile-error`}>
            {errors.mobile ? `Error: ${errors.mobile}` : ''}
          </p>
        </div>

        <div className="field">
          <label htmlFor={`${idPrefix}-experience`}>
            Your Python starting point <span aria-hidden="true">*</span>
          </label>
          <select
            id={`${idPrefix}-experience`}
            required
            aria-describedby={`${idPrefix}-experience-error`}
            aria-invalid={errors.experience ? 'true' : 'false'}
            value={values.experience}
            onChange={e => handleInputChange('experience', e.target.value)}
            onBlur={() => handleInputBlur('experience', instance)}
          >
            <option value="">Choose an option</option>
            <option value="new">I&apos;m starting from scratch</option>
            <option value="basics">I&apos;ve tried the basics</option>
            <option value="practice">I want more practice</option>
          </select>
          <p className="error" id={`${idPrefix}-experience-error`}>
            {errors.experience ? `Error: ${errors.experience}` : ''}
          </p>
        </div>

        <div className="honeypot" aria-hidden="true">
          <label htmlFor={`${idPrefix}-website`}>Leave this field empty</label>
          <input
            id={`${idPrefix}-website`}
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={values.website}
            onChange={e => handleInputChange('website', e.target.value)}
          />
        </div>

        <button className="button form-submit" type="submit" disabled={isValidated}>
          Try demo enquiry <span aria-hidden="true">↗</span>
        </button>

        <p
          id={`${idPrefix}-form-status`}
          className="form-status"
          role="status"
          aria-live="polite"
          aria-atomic="true"
        >
          {status}
        </p>

        <button type="reset" className="reset-button">
          Clear sample details
        </button>

        <noscript>
          <p>This demo requires JavaScript for local validation. No information can be submitted.</p>
        </noscript>
      </form>
    </div>
  );
}
