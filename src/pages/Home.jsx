import { H2, WrapperWtithFruits } from 'components/Home/Home.styled';
import { WeightForm } from 'components/Form/Form';
import React, { useContext } from 'react';
import { Box } from 'components/Box';
import { useState } from 'react';
import Modal from 'components/Modal/Modal';
import Snowfall from 'react-snowfall';
import { ThemeContext } from 'components/Context/Context';

export const Home = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [userParams, setUserParams] = useState(null);
  const { isChristmas } = useContext(ThemeContext);

  const body = document.querySelector('body');

  const onModalClose = () => {
    setIsModalOpened(isModalOpened => !isModalOpened);
    body.style.overflow = 'auto';
  };

  return (
    <WrapperWtithFruits>
      {isChristmas && <Snowfall />}
      <Box maxWidth={'1280px'} m={'0 auto'}>
        {isModalOpened && (
          <Modal onClose={onModalClose} userParams={userParams} />
        )}
        <H2>Calculate your daily calorie intake right now</H2>
        <WeightForm
          openModal={setIsModalOpened}
          setUserParams={setUserParams}
        />
      </Box>
    </WrapperWtithFruits>
  );
};
