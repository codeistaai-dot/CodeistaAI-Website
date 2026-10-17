'use client';

import { useEffect } from 'react';

export default function CourseBodyClass({ course }: { course: string }) {
  useEffect(() => {
    document.body.setAttribute('data-course', course);
    return () => {
      document.body.removeAttribute('data-course');
    };
  }, [course]);

  return null;
}
