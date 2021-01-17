import styled, { css } from 'styled-components';

type tSlideBackground = {
  backgroundImage: string;
  active: boolean | null;
};

type tActive = {
  active: boolean | null;
};

type tSlideContent = {
  backgroundImage: string;
  active: boolean | null;
  offset: number;
  dir: any;
};

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #4b4b4b;
  color: #fff;
  font-weight: 900;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const Slides = styled.div`
  display: flex;
`;

export const SlideBackground = styled.div<tSlideBackground>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-size: cover;
  background-position: center center;
  z-index: -1;
  opacity: ${({ active }) => (active ? 0.2 : 0)};
  transition: opacity 0.3s linear, transform 0.3s ease-in-out;
  pointer-events: none;
  transform: ${({ active, dir }) =>
    active ? 'none' : `translateX(calc(10% * ${dir}))`};
  background-image: ${({ backgroundImage }) => `url('${backgroundImage}')`};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100vw;
`;

export const Slide = styled.div<tActive>`
  ${({ active }) =>
    active &&
    css`
      z-index: 2;
      pointer-events: auto;
    `};
`;

export const SlideContent = styled.div<tSlideContent>`
  background-image: ${({ backgroundImage }) => `url('${backgroundImage}')`};
  width: 20vw;
  height: 300px;
  top: 35%;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  transition: all 1s ease-in-out;
  opacity: 0.7;
  display: grid;
  align-content: center;
  position: absolute;
  transform-style: preserve-3d;
  offset: ${({ offset }) => `${offset}`};
  transform: ${({
    offset,
    dir,
  }) => `perspective(1000px) translateX(calc(100% * ${offset}))
    rotateY(calc(-45deg * ${dir}))`};

  ${({ active }) =>
    active &&
    css`
      opacity: 1;
      transform: perspective(1000px);

      &:hover {
        transition: none;
        transform: perspective(1000px) rotateY(calc(var(--px) * 45deg))
          rotateX(calc(var(--py) * -45deg));
      }
    `}
`;

export const Button = styled.button`
  appearance: none;
  cursor: pointer;
  background: transparent;
  border: none;
  color: white;
  font-size: 5rem;
  width: 5rem;
  height: 5rem;
  top: 30%;
  transition: opacity 0.3s;
  opacity: 0.7;
  z-index: 5;

  &:hover {
    opacity: 1;
  }

  &:focus {
    outline: none;
  }

  &:first-child {
    left: -50%;
  }
  &:last-child {
    right: -50%;
  }
`;

export const SlideContentInner = styled.div<tActive>`
  transform-style: preserve-3d;
  transform: translateZ(2rem);
  transition: opacity 0.3s linear;
  text-shadow: 0 0.1rem 1rem #000;
  opacity: ${({ active }) => (active ? 1 : 0)};
`;

export const SlideTitle = styled.p`
  font-size: 2rem;
  font-weight: normal;
  letter-spacing: 0.2ch;
  text-transform: uppercase;
  margin: 0;

  &:before {
    content: '— ';
  }
`;

export const SlideDescription = styled.p`
  margin: 0;
  font-size: 0.8rem;
  letter-spacing: 0.2ch;
`;
