import React from 'react';
import { Icon } from 'components';
import {
  Wrapper,
  AvatarImg,
  NameText,
  ContactText,
  IconWrapper,
  AvatarWrapper,
} from './AvatarInfo.style';

interface iAvatarInfo {
  src: string;
  name: string;
  email: string;
  linkedin: string;
  onMouseEnter: () => void;
  onMouseLeave?: () => void;
}

const AvatarInfo: React.FC<iAvatarInfo> = ({
  src,
  name,
  email,
  linkedin,
  onMouseEnter,
  onMouseLeave = () => {},
}): JSX.Element => {
  return (
    <Wrapper onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <AvatarWrapper>
        <AvatarImg alt='avatar-img' src={src} />
      </AvatarWrapper>

      <NameText>{name}</NameText>

      <IconWrapper>
        <Icon icon='email' fill='#fff' />
      </IconWrapper>

      <ContactText>{email}</ContactText>

      <IconWrapper>
        <Icon icon='linkedin' fill='#fff' />
      </IconWrapper>

      <ContactText>{linkedin}</ContactText>
    </Wrapper>
  );
};

export default AvatarInfo;
