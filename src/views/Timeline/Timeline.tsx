import React from 'react';
import { HorizontalLine } from 'styles/GlobalStyledComponents';
import { Wrapper } from './Timeline.style';

const Timeline = (): JSX.Element => {
  return (
    <Wrapper>
      <HorizontalLine height='100vh' />
    </Wrapper>
  );
};

export default Timeline;
