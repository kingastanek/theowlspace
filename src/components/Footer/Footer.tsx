import React from 'react';
import { Wrapper, FooterText } from './Footer.style';

const Footer: React.FC = (): JSX.Element => {
  const year = new Date().getFullYear();
  return (
    <Wrapper>
      <FooterText>&copy; {year} TheOwlSpace. All Rights Reserved</FooterText>
    </Wrapper>
  );
};

export default Footer;
