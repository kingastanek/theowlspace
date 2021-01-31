import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Nav = styled.nav`
  width: 100%;
  position: fixed;
  top: 1rem;
  left: 2rem;
  z-index: 100;
`;

export const NavLinks = styled(Link)`
  color: var(--theme-almost-white);
  text-decoration: none;
  margin-right: 48px;
  box-sizing: border-box;
  cursor: pointer;
  &.active {
    border-bottom: 1px solid var(--theme-almost-white);
    padding-bottom: 12px;
  }
`;
