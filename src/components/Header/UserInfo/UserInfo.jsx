import { ThemeContext } from 'components/Context/Context';
import React, { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLogOutUserMutation } from 'redux/auth';
import { logOut } from 'redux/authSlice';
import { Exit, Name, Section } from './UserInfo.styled';
import Switch from 'react-switch';
import { FaTree } from 'react-icons/fa';
import { GiFruitBowl } from 'react-icons/gi';

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
  const christmasTheme = () => {
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
  };
  const [ischecked, setIsChecked] = useState(false);
  const handleChange = () => {
    setIsChecked(!ischecked);
  };
  if (ischecked) {
    setTimeout(() => {
      christmasTheme();
      setValue(true);
    }, 100);
  } else {
    setTimeout(() => {
      const body = document.querySelector('body');
      body.classList.remove('christmas');
      setValue(false);
    }, 100);
  }

  return (
    <Section>
      <Name>{name}</Name>
      <Exit onClick={handleLogout}>Exit</Exit>
      <Switch
        onChange={handleChange}
        checked={ischecked}
        onColor="#9B9FAA"
        offColor="#D6001C"
        uncheckedIcon={
          <FaTree
            style={{
              height: '70%',
              width: '70%',
              position: 'relative',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />
        }
        checkedIcon={
          <GiFruitBowl
            style={{
              height: '70%',
              width: '70%',
              position: 'relative',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />
        }
      />
    </Section>
  );
};
