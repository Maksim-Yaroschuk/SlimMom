import { H2, WrapperWtithFruits } from 'components/Home/Home.styled';
import { WeightForm } from 'components/Form/Form';
import React from 'react';
import { Box } from 'components/Box';

export const Home = () => {
  return (
    <WrapperWtithFruits>
      <Box maxWidth={'1280px'} m={'0 auto'}>
        <H2>Calculate your daily calorie intake right now</H2>
        <WeightForm />
      </Box>
    </WrapperWtithFruits>
  );
};
