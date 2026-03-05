// src/components/ScrollToTop.tsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Most reliable way in React Router v6
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',   // 'instant' = no animation (feels like native page load)
      // behavior: 'smooth'  // ← use this if you want a gentle scroll instead
    });

    // Alternative (also works well):
    // window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]); // Re-run whenever route changes

  return null; // This component renders nothing
}