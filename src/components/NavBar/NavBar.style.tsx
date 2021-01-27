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
  color: rgb(235, 235, 235);
  text-decoration: none;
  margin-right: 48px;
  box-sizing: border-box;
  &.active {
    border-bottom: 1px solid rgb(235, 235, 235);
    padding-bottom: 12px;
  }
`;
