import { Box } from 'components/Box';
import { WeightForm } from 'components/Form/Form';
import React from 'react';
import {
  CalculatorPageWrapper,
  H2,
} from 'components/CalculatorPage/CalculatorPage.styled';
import { ThemeContext } from 'components/Context/Context';
import { useContext } from 'react';
import Snowfall from 'react-snowfall';

const CalculatorPage = () => {
  const { isChristmas } = useContext(ThemeContext);

  return (
    <CalculatorPageWrapper>
      {isChristmas && <Snowfall />}
      <Box maxWidth={'1280px'} m={'0 auto'}>
        <H2>Calculate your daily calorie intake right now</H2>
        <WeightForm />
      </Box>
    </CalculatorPageWrapper>
  );
};
export default CalculatorPage;
