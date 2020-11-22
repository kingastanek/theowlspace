import React from 'react';
import { TechnologyDescription } from 'components';
import { HorizontalLine } from 'styles/GlobalStyledComponents';
import { HorizontalLineWrapper } from './Timeline.style';

const Timeline: React.FC = (): JSX.Element => {
  return (
    <>
      <HorizontalLineWrapper>
        <HorizontalLine height='100vh' />
      </HorizontalLineWrapper>
      <TechnologyDescription />
    </>
  );
};

export default Timeline;
