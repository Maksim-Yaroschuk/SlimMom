import { Box } from 'components/Box';
import { WeightForm } from 'components/Form/Form';
import React, { useState } from 'react';
import {
  CalculatorPageWrapper,
  H2,
} from 'components/CalculatorPage/CalculatorPage.styled';
import { ThemeContext } from 'components/Context/Context';
import { useContext } from 'react';
import Snowfall from 'react-snowfall';
import { getUserInfo } from 'redux/authSelectors';
import { useSelector } from 'react-redux';
import Modal from 'components/Modal/Modal';

const CalculatorPage = () => {
  const { isChristmas } = useContext(ThemeContext);

  const [isModalOpened, setIsModalOpened] = useState(false);
  const [userParams, setUserParams] = useState(null);
  const info = useSelector(getUserInfo);

  const body = document.querySelector('body');

  const onModalClose = () => {
    setIsModalOpened(isModalOpened => !isModalOpened);
    body.style.overflow = 'auto';
  };

  return (
    <CalculatorPageWrapper>
      {isChristmas && <Snowfall />}
      {isModalOpened && (
        <Modal onClose={onModalClose} userParams={userParams} />
      )}
      <Box maxWidth={'1280px'} m={'0 auto'}>
        <H2>Calculate your daily calorie intake right now</H2>
        <WeightForm
          initialValues={info}
          openModal={setIsModalOpened}
          setUserParams={setUserParams}
        />
      </Box>
    </CalculatorPageWrapper>
  );
};
export default CalculatorPage;
