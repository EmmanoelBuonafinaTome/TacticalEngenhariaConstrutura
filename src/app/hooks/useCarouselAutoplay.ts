import { useEffect, useState } from 'react';
import type { CarouselApi } from './ui/carousel';

const DEFAULT_AUTOPLAY_INTERVAL = 4000;

export function useCarouselAutoplay(
  api: CarouselApi | undefined,
  intervalMs: number = DEFAULT_AUTOPLAY_INTERVAL,
) {
  useEffect(() => {
    if (!api) {
      return;
    }

    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
        return;
      }

      api.scrollTo(0);
    }, intervalMs);

    return () => clearInterval(interval);
  }, [api, intervalMs]);
}

export function useCarouselIndex(api: CarouselApi | undefined) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    const onSelect = () => {
      setCurrentIndex(api.selectedScrollSnap());
    };

    onSelect();
    api.on('select', onSelect);

    return () => {
      api.off('select', onSelect);
    };
  }, [api]);

  return currentIndex;
}
