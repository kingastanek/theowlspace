import React, { useState } from 'react';
import { getSlideStyle, useTilt } from './helpers';
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

export type tSlides = {
  title: string;
  description: string;
  image: string;
  color: string;
};

interface iSlider {
  slides: tSlides[];
  id: string;
}

const Slider: React.FC<iSlider> = ({ slides, id }): JSX.Element => {
  const [slideIndex, setSlideIndex] = useState<number>(2);

  const changeSlide = (action) => {
    action === 'PREV'
      ? setSlideIndex((slideIndex + 1) % slides.length)
      : setSlideIndex(slideIndex === 0 ? slides.length - 1 : slideIndex - 1);
  };

  const activeColor = slides[slideIndex].color;

  return (
    <Wrapper id={id} backgroundColor={activeColor}>
      <Slides>
        {slides.map((slide, i) => {
          const offset = slideIndex - i;
          const active = offset === 0;

          // eslint-disable-next-line react-hooks/rules-of-hooks
          const ref = useTilt(active);

          const dir: number = offset === 0 ? 0 : offset > 0 ? 1 : -1;
          const { image } = slide;
          return (
            <Slide active={active} key={i}>
              <SlideBackground active={active} backgroundImage={image} />
              <SlideContent
                backgroundImage={image}
                active={active}
                dir={dir}
                offset={offset}
                style={getSlideStyle(i, slides, slideIndex)}
                ref={ref}
              >
                <SlideContentInner active={active}>
                  <SlideTitle>{slide.title}</SlideTitle>
                  <SlideDescription>{slide.description}</SlideDescription>
                </SlideContentInner>
              </SlideContent>
            </Slide>
          );
        })}
        <ButtonWrapper>
          <Button onClick={() => changeSlide('PREV')}>‹</Button>
          <Button onClick={() => changeSlide('NEXT')}>›</Button>
        </ButtonWrapper>
      </Slides>
    </Wrapper>
  );
};

export default Slider;
