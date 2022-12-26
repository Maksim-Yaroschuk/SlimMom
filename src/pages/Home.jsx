import { H2, WrapperWtithFruits } from 'components/Home/Home.styled';
import { WeightForm } from 'components/Form/Form';
import React, { useContext } from 'react';
import { Box } from 'components/Box';
import { useState } from 'react';
import Modal from 'components/Modal/Modal';
import Snowfall from 'react-snowfall';
import { ThemeContext } from 'components/Context/Context';

import { setUserGoogle } from 'redux/authSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { Button } from 'components/Button/Button';
import { useTranslation } from 'react-i18next';

export const Home = () => {
  const { t, i18n } = useTranslation();

  const [isModalOpened, setIsModalOpened] = useState(false);
  const [userParams, setUserParams] = useState(null);
  const { isChristmas } = useContext(ThemeContext);
  const dispatch = useDispatch();

  const body = document.querySelector('body');

  const onModalClose = () => {
    setIsModalOpened(isModalOpened => !isModalOpened);
    body.style.overflow = 'auto';
  };

  useEffect(() => {
    const queryStr = window.location.search
      .replace('?', '')
      .split('&')
      .reduce(function (p, e) {
        var a = e.split('=');
        p[decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
        return p;
      }, {});

    if (!queryStr.name) {
      return;
    }

    dispatch(setUserGoogle(queryStr));
  }, [dispatch]);

  const lngs = {
    en: { nativeName: 'English' },
    uk: { nativeName: 'Українська' },
  };

  return (
    <WrapperWtithFruits>
      {Object.keys(lngs).map(lng => (
        <div key={lng} onClick={() => i18n.changeLanguage()}>
          <Button
            type="submit"
            key={lng}
            disabled={i18n.resolvedLanguage === lng}
          >
            {lngs[lng].nativeName}
          </Button>
        </div>
      ))}

      {isChristmas && <Snowfall />}
      <Box maxWidth={'1280px'} m={'0 auto'}>
        {isModalOpened && (
          <Modal onClose={onModalClose} userParams={userParams} />
        )}
        <H2>{t("calculate")}</H2>
        <WeightForm
          openModal={setIsModalOpened}
          setUserParams={setUserParams}
        />
      </Box>
    </WrapperWtithFruits>
  );
};
