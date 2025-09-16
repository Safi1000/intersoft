import { useEffect } from 'react';

export function useScrollTop(): void {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if ('scrollRestoration' in history) {
        const prev = (history as any).scrollRestoration;
        (history as any).scrollRestoration = 'manual';
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
        return () => {
          (history as any).scrollRestoration = prev || 'auto';
        };
      }
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }
  }, []);
}

export default useScrollTop;

