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
    setValue(false);
    body.classList.remove('christmas');
  };
  return (
    <Section>
      <Name onClick={disableChristmasTheme}>{name}</Name>
      <Exit onClick={handleLogout}>Exit</Exit>
    </Section>
  );
};
