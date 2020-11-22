import React from 'react';
import { VerticalLine, Paragraph } from 'styles/GlobalStyledComponents';
import {
  Wrapper,
  ShapesWrapper,
  TechnologyCircle,
  TechnologyContainer,
  TechnologyWrapper,
  TechnologyName,
  CircleWrapper,
} from './TechnologyDescription.style';

const AvatarInfo: React.FC = (): JSX.Element => {
  return (
    <Wrapper>
      <ShapesWrapper>
        <CircleWrapper>
          <TechnologyCircle>JS</TechnologyCircle>
        </CircleWrapper>
        <VerticalLine width='400px' position={{ right: '50%' }} />
      </ShapesWrapper>
      {/* <TechnologyWrapper> */}
      <TechnologyContainer>
        <TechnologyName>JavaScript</TechnologyName>
        <Paragraph>Lorem ipsum</Paragraph>
      </TechnologyContainer>
      {/* </TechnologyWrapper> */}
    </Wrapper>
  );
};

export default AvatarInfo;
