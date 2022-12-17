import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLogOutUserMutation } from 'redux/auth';
import { logOut } from 'redux/authSlice';
import { Exit, Name, Section } from './UserInfo.styled';

export const BottomSection = ({ name }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logOutUser] = useLogOutUserMutation();

  const handleLogout = () => {
    logOutUser();
    dispatch(logOut());
    navigate('/');
  };

  return (
    <Section>
      <Name>{name}</Name>
      <Exit onClick={handleLogout}>Exit</Exit>
    </Section>
  );
};
