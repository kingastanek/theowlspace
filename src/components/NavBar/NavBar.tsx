import React from 'react';
import { Nav, NavLinks } from './NavBar.style';

const NavBar = () => {
  const navBarElements = [
    {
      name: 'Home',
      linkTo: 'home',
    },
    {
      name: 'Technology',
      linkTo: 'technology',
    },
    {
      name: 'Coffee time',
      linkTo: 'coffee',
    },
    {
      name: 'Contact',
      linkTo: 'contact',
    },
  ];

  return (
    <Nav>
      {navBarElements.map((element) => {
        const { name, linkTo } = element;
        return (
          <NavLinks to={linkTo} spy smooth duration={400}>
            {name}
          </NavLinks>
        );
      })}
    </Nav>
  );
};

export default NavBar;
