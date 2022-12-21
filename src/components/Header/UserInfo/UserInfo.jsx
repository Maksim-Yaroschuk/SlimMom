import { ThemeContext } from 'components/Context/Context';
import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLogOutUserMutation } from 'redux/auth';
import { logOut } from 'redux/authSlice';
import { Exit, Name, Section } from './UserInfo.styled';

export const BottomSection = ({ name }) => {
  const { setValue } = useContext(ThemeContext);

  const body = document.querySelector('body');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logOutUser] = useLogOutUserMutation();
  const handleLogout = () => {
    logOutUser();
    dispatch(logOut());
    navigate('/');
  };
  const disableChristmasTheme = () => {
    const christmasThemeOn = () => {
      const day = new Date().getDate();
      const month = new Date().getMonth();
      if (day >= 19 && month === 11) {
        body.classList.add('christmas');
      } else if (day >= 15 && month === 0) {
        body.classList.remove('christmas');
      }
    };
    christmasThemeOn();
    setValue(true);
    // body.classList.remove('christmas');
  };
  return (
    <Section>
      <Name onClick={disableChristmasTheme}>{name}</Name>
      <Exit onClick={handleLogout}>Exit</Exit>
    </Section>
  );
};
