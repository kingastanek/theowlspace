import styled, { css } from 'styled-components';

type tHorizontalLine = {
  height: string;
  
}
type tVerticalLine = {
  width: string;
  position?: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  },
  style?: React.CSSProperties;
}

export const Paragraph = styled.p`
  color: var(--theme-almost-white);
  margin: 0;
  padding: 0;
`;

export const HorizontalLine = styled.div<tHorizontalLine>`
  background-color: var(--theme-grey);
  width: 1px;
  min-height: 10px;
  height: ${({height}) => height};
`;

export const VerticalLine = styled.div<tVerticalLine>`
  background-color: var(--theme-grey);
  height: 1px;
  width: ${({width}) => width};
  z-index: 1;
  position: absolute;
  top: ${({position}) => position ? position.top : null};
  bottom: ${({position}) => position ? position.bottom : null};
  left: ${({position}) => position ? position.left : null};
  right: ${({position}) => position ? position.right : null};
  ${({ style }) =>
    style &&
    css`
      {style}
    `}
`;
