import { H2, Wrapper } from 'components/Home/Home.styled';
import { WeightForm } from 'components/Form/Form';
import React from 'react';

export const Home = () => {
  return (
    <Wrapper>
      <H2>Calculate your daily calorie intake right now</H2>
      <WeightForm />
    </Wrapper>
  );
};
