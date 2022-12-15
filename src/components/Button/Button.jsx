import React from 'react';
import { ButtonEmpty, ButtonFull } from './Button.styled';

export const Button = ({ children, full, type }) => {
  return full ? (
    <ButtonFull type={type}>{children}</ButtonFull>
  ) : (
    <ButtonEmpty type={type}>{children}</ButtonEmpty>
  );
};

//  <Button full={true}>Hello from button</Button>
//  <Button full={false}>Hello from button</Button>
