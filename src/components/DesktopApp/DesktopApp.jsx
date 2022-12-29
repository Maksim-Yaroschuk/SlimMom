import { ThemeContext } from 'components/Context/Context';
import { useMediaQuery } from 'react-responsive';
import React, { useContext } from 'react';
import Snowfall from 'react-snowfall';
import { DeskApp } from './DesktopApp.styled';
import picture from '../../images/desktopApp.png';

export const DesktopApp = () => {
  const { isChristmas } = useContext(ThemeContext);
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });

  return (
    <>
      {isChristmas && <Snowfall />}
      <DeskApp>
        <h2>
          You can download the desktop version of the program to your Windows PC
          from the &nbsp;
          <a href="https://drive.google.com/drive/folders/1wkL1apB9Vv-FiYX2-RaIKlu6ubkshoIU?usp=share_link">
            link
          </a>
        </h2>
        <br />
        <h3>
          To use the desktop version of the application, you need to unzip the
          downloaded archive into and execute file SlimMom.exe
        </h3>
        <br />
        <br />
        <br />
        {isDesktop && <img src={picture} alt="desktop" width="1000" />}
      </DeskApp>
    </>
  );
};
