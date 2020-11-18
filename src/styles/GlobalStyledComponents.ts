import styled from 'styled-components';

type tHorizontalLine = {
  height: string;
}

export const Paragraph = styled.p`
  color: var(--theme-grey);
  margin: 0;
  padding: 0;
`;

export const HorizontalLine = styled.div<tHorizontalLine>`
  background-color: var(--theme-grey);
  width: 1px;
  min-height: 10px;
  height: ${({height}) => height}
`;
