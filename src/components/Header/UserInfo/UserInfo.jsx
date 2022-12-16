import React from 'react';
import { Exit, Name, Section } from './UserInfo.styled';

export const BottomSection = ({ name }) => {
  return (
    <Section>
      <Name>{name}</Name>
      <Exit>Exit</Exit>
    </Section>
  );
};
