import { useState, useEffect } from 'react';
import { BREAKPOINTS } from '@constants';

type Breakpoint = keyof typeof BREAKPOINTS;

export const useMediaQuery = (breakpoint: Breakpoint): boolean => {
  const query = `(min-width: ${BREAKPOINTS[breakpoint]})`;
  const [matches, setMatches] = useState<boolean>(() => window.matchMedia(query).matches);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) setMatches(media.matches);

    const listener = (e: MediaQueryListEvent): void => setMatches(e.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [query, matches]);

  return matches;
};