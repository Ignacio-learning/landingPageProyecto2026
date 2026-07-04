import { useEffect, useRef } from 'react';

const FADE_IN_THRESHOLD = 8;

export function useGalleryFadeIn(photos) {
  const itemRefs = useRef([]);
  const useFadeIn = photos.length > FADE_IN_THRESHOLD;

  useEffect(() => {
    if (!useFadeIn) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' },
    );

    requestAnimationFrame(() => {
      itemRefs.current.forEach((item) => {
        if (item) observer.observe(item);
      });
    });

    return () => observer.disconnect();
  }, [photos, useFadeIn]);

  return { itemRefs, useFadeIn };
}
