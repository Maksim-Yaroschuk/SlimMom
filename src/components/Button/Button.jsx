import React from 'react';
import { ButtonEmpty, ButtonFull } from './Button.styled';

export const Button = ({ children, full }) => {
  return full ? (
    <ButtonFull>{children}</ButtonFull>
  ) : (
    <ButtonEmpty>{children}</ButtonEmpty>
  );
};

//  <Button full={true}>Hello from button</Button>
//  <Button full={false}>Hello from button</Button>
