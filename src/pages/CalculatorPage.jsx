import { Box } from 'components/Box';
import { WeightForm } from 'components/Form/Form';
import React from 'react';
import {
  CalculatorPageWrapper,
  H2,
} from 'components/CalculatorPage/CalculatorPage.styled';

export const CalculatorPage = () => {
  return (
    <CalculatorPageWrapper>
      <Box maxWidth={'1280px'} m={'0 auto'}>
        <H2>Calculate your daily calorie intake right now</H2>
        <WeightForm />
      </Box>
    </CalculatorPageWrapper>
  );
};
