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

export const useTilt = (active: boolean) => {
  const ref = useRef<any>(null);

  useEffect(() => {
    if (!ref.current || !active) {
      return;
    }

    const state = {
      rect: {
        left: undefined,
        width: undefined,
        height: undefined,
        top: undefined
      },
      mouseX: undefined,
      mouseY: undefined,
    };
    let el = ref.current;

    const handleMouseMove = (e) => {
      if (!el) {
        return;
      }
      if (!state.rect.left) {
        state.rect = el.getBoundingClientRect();
      }
      
      state.mouseX = e.clientX;
      state.mouseY = e.clientY;
      const px = (state.mouseX! - state.rect.left!) / state.rect.width!;
      const py = (state.mouseY! - state.rect.top!) / state.rect.height!;

      el.style.setProperty("--px", px);
      el.style.setProperty("--py", py);
    };

    el.addEventListener("mousemove", handleMouseMove);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
    };
  }, [active]);

  return ref;
};