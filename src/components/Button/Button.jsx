import React from 'react';
import { ButtonEmpty, ButtonFull } from './Button.styled';

export const Button = ({ children, full, type }) => {
  return full ? (
    <ButtonFull type={type}>{children}</ButtonFull>
  ) : (
    <ButtonEmpty type={type}>{children}</ButtonEmpty>
  );
};
