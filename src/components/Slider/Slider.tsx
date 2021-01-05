import React, { useState, useEffect, useRef } from 'react';
import {
  Wrapper,
  Slide,
  Slides,
  Button,
  SlideContent,
  SlideContentInner,
  SlideTitle,
  SlideBackground,
  SlideDescription,
  ButtonWrapper,
} from './Slider.style';

const Slider: React.FC = (): JSX.Element => {
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const slides = [
    {
      title: 'React',
      description: 'A JavaScript library for building user interfaces',
      image: 'https://hackernoon.com/images/z2xg2bpo.jpg',
    },
    {
      title: 'AWS',
      description: 'A JavaScript library for building user interfaces',
      image: 'https://www.infracode.co/wp-content/uploads/2017/10/AWS.jpg',
    },
    {
      title: 'React',
      description: 'A JavaScript library for building user interfaces',
      image: 'https://hackernoon.com/images/z2xg2bpo.jpg',
    },
  ];

  const changeSlide = (action) => {
    action === 'PREV'
      ? setSlideIndex((slideIndex + 1) % slides.length)
      : setSlideIndex(slideIndex === 0 ? slides.length - 1 : slideIndex - 1);
  };

  const useTilt = (active) => {
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

        const px = (state.mouseX! - state.rect.left) / state.rect.width - 0.5;
        const py = (state.mouseY! - state.rect.top) / state.rect.height - 0.5;

        ref.current.style.setProperty('--px', px);
        ref.current.style.setProperty('--py', py);
      };

      ref.current.addEventListener('mousemove', handleMouseMove);

      return () => {
        ref.current &&
          ref.current.removeEventListener('mousemove', handleMouseMove);
      };
    }, [active]);

    return ref;
  };

  return (
    <Wrapper>
      <Slides>
        <ButtonWrapper>
          <Button onClick={() => changeSlide('PREV')}>‹</Button>
          <Button onClick={() => changeSlide('NEXT')}>›</Button>
        </ButtonWrapper>

        {[...slides, ...slides].map((slide, i) => {
          const offset = slides.length + (slideIndex - i);
          const active = offset === 0 ? true : null;

          // eslint-disable-next-line react-hooks/rules-of-hooks
          const ref = useTilt(active);

          const dir: number = offset === 0 ? 0 : offset > 0 ? 1 : -1;
          const { image } = slide;
          return (
            <Slide ref={ref} active={active} key={i}>
              <SlideBackground active={active} backgroundImage={image} />
              <SlideContent
                backgroundImage={image}
                active={active}
                dir={dir}
                offset={offset}
              >
                <SlideContentInner active={active}>
                  <SlideTitle>{slide.title}</SlideTitle>
                  <SlideDescription>{slide.description}</SlideDescription>
                </SlideContentInner>
              </SlideContent>
            </Slide>
          );
        })}
      </Slides>
    </Wrapper>
  );
};

export default Slider;
