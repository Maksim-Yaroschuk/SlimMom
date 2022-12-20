import React from 'react';
import { Nav, StyledLink } from './Navigation.styled';

export const Menu = () => {
  return (
    <Nav>
      <StyledLink to="diary">Diary</StyledLink>
      <StyledLink to="calculator">Calculator</StyledLink>
    </Nav>
  );
};
