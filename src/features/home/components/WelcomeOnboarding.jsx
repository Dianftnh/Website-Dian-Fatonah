import { useEffect, useState } from 'react';

const DISPLAY_DURATION = 2200;

export function WelcomeOnboarding() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!isVisible) return undefined;

    const timer = window.setTimeout(() => {
      setIsVisible(false);
    }, DISPLAY_DURATION);

    return () => window.clearTimeout(timer);
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-soft-surface px-6"
      role="status"
      aria-live="polite"
      aria-label="Memuat website Dian Fatonah"
    >
      <div className="flex max-w-sm flex-col items-center text-center">
        <div className="relative flex h-24 w-24 items-center justify-center" aria-hidden="true">
          <span className="absolute inset-0 rounded-full border-2 border-primary-soft" />
          <span className="onboarding-ring absolute inset-1 rounded-full border-2 border-transparent border-t-primary border-r-primary" />
          <span className="flex h-16 w-16 items-center justify-center rounded-full border border-primary bg-white text-3xl font-bold text-primary shadow-sm">
            D
          </span>
        </div>
        <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-primary">Personal Website</p>
        <h1 className="mt-3 text-2xl font-semibold text-text-primary">Selamat datang di personal website Dian Fatonah</h1>
        <p className="mt-3 text-sm leading-relaxed text-text-secondary">Menyiapkan portfolio, karya kreatif, dan perjalanan belajar saya.</p>
      </div>
    </div>
  );
}
