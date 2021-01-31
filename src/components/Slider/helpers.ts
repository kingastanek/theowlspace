import { useEffect, useRef } from 'react';
import { tSlides } from './Slider';

export const getSlideStyle = (index: number, slides: tSlides[], slideIndex: number) => {
  const selected = {
    left: '40%',
    zIndex: 2,
  };
  const previous = {
    left: '18%',
    transform: `perspective(1000px) rotateY(45deg)`,
  };
  const next = {
    left: '62%',
    transform: `perspective(1000px) rotateY(-45deg)`,
  };
  const first = {
    left: '0%',
    transform: `perspective(1000px) rotateY(45deg)`,
  };
  const last = {
    left: '80%',
    transform: `perspective(1000px) rotateY(-45deg)`,
  };

  const getIndicator = (number: number) =>
    (slideIndex + number) % slides.length;

  console.log('slideIndex', slideIndex);

  switch (index) {
    case getIndicator(3):
      return first;
    case getIndicator(4):
      return previous;
    case getIndicator(0):
      return selected;
    case getIndicator(1):
      return next;
    case getIndicator(2):
      return last;
  }
};

export const useTilt = (
  active: boolean,
  positionNumber: number,
  setPositionNumber: (number: number) => void
) => {
  const ref = useRef<any>(null);

  useEffect(() => {
    if (!ref.current || !active) {
      return;
    }

    const state = {
      rect:
        ref && ref.current ? ref.current!.getBoundingClientRect() : undefined,
      mouseX: undefined,
      mouseY: undefined,
    };

    const handleMouseMove = (event) => {
      if (!ref.current) return;
      if (!state.rect) {
        state.rect = ref.current.getBoundingClientRect();
      }

      state.mouseX = event.clientX;
      state.mouseY = event.clientY;
      const px =
        (state.mouseX! - state.rect.left) / state.rect.width - positionNumber;
      const py = (state.mouseY! - state.rect.top) / state.rect.height - 0.5;

      ref.current.style.setProperty('--px', px);
      ref.current.style.setProperty('--py', py);
    };

    setPositionNumber(2);

    ref.current.addEventListener('mousemove', handleMouseMove);

    return () => {
      ref.current &&
        ref.current.removeEventListener('mousemove', handleMouseMove);
    };
  }, [active]);

  return ref;
};