import React from 'react';
import { Exit, Name, Section } from './BottomSection.styled';

export const BottomSection = ({ name }) => {
  return (
    <Section>
      <Name>{name}</Name>
      <Exit>Exit</Exit>
    </Section>
  );
};
