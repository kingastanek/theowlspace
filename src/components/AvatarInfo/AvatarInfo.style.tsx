import styled from 'styled-components';
import { Paragraph } from 'styles/GlobalStyledComponents';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: calc(50% - 2px);
  height: 100%;
`;

export const AvatarImg = styled.img`
  height: 300px;
  width: 300px;
  border-radius: 50%;
`;

export const NameText = styled(Paragraph)`
  text-align: center;
  text-transform: uppercase;
  font-size: 1.25rem;
  margin-top: 2rem;
`;

export const ContactText = styled(Paragraph)`
  font-size: 1rem;
  display: flex;
  justify-content: center;
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

export const AvatarWrapper = styled(Wrapper)`
  padding: 1rem;
  border: 1px solid var(--theme-black);
  height: 300px;
  width: 300px;
  border-radius: 50%;
`;
