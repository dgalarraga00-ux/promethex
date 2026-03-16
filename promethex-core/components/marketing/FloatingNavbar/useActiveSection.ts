import { useState, useEffect, Dispatch, SetStateAction } from 'react';

export function useActiveSection(sectionIds: string[]): {
  activeSection: string;
  setActiveSection: Dispatch<SetStateAction<string>>;
} {
  const [activeSection, setActiveSection] = useState<string>(
    sectionIds[0] ?? ''
  );

  useEffect(() => {
    if (typeof window === 'undefined' || sectionIds.length === 0) return;

    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        {
          rootMargin: '-40% 0px -55% 0px',
          threshold: 0,
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [sectionIds.join(',')]); // eslint-disable-line react-hooks/exhaustive-deps

  return { activeSection, setActiveSection };
}
