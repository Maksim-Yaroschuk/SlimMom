import { H2, Wrapper } from 'components/First/First.styled';
import { WeightForm } from 'components/Form/Form';
import React from 'react';

export const First = () => {
  return (
    <Wrapper>
      <H2>Calculate your daily calorie intake right now</H2>
      <WeightForm />
    </Wrapper>
  );
};
