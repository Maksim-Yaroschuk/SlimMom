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
import { ExitModal } from 'components/ExitModal/ExitModal';

export const BottomSection = ({ name }) => {
  const { setValue } = useContext(ThemeContext);

  const body = document.querySelector('body');

  const [isModalOpened, setIsModalOpened] = useState(false);
  const [isShowSwitch, setisShowSwitch] = useState(true);

  const onModalClose = () => {
    setIsModalOpened(isModalOpened => !isModalOpened);
    body.style.overflow = 'auto';
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logOutUser] = useLogOutUserMutation();

  const handleLogout = () => {
    logOutUser();
    dispatch(logOut());
    navigate('/');
    const body = document.querySelector('body');
    body.classList.remove('christmas');
    setValue(false);
  };

  const christmasThemeOn = () => {
    const day = new Date().getDate();
    const month = new Date().getMonth();
    if (day >= 19 && month === 11) {
      body.classList.add('christmas');
      setValue(true);
      setisShowSwitch(true);
    } else if (day <= 19 && month === 11) {
      body.classList.remove('christmas');
      setValue(false);
      setisShowSwitch(false);
    } else if (day >= 15 && month === 0) {
      body.classList.remove('christmas');
      setValue(false);
      setisShowSwitch(false);
    }
  };

  const [ischecked, setIsChecked] = useState(true);

  const handleChange = () => {
    setIsChecked(!ischecked);
  };
  if (ischecked) {
    setTimeout(() => {
      christmasThemeOn();
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
      {isModalOpened && (
        <ExitModal onClose={onModalClose} handleLogout={handleLogout} />
      )}
      <Name>{name}</Name>
      <Exit onClick={() => setIsModalOpened(true)}>Exit</Exit>
      {isShowSwitch && (
        <Switch
          onChange={handleChange}
          checked={ischecked}
          onColor="#9B9FAA"
          offColor="#D6001C"
          activeBoxShadow="0 0 2px 3px #D6001C"
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
      )}
    </Section>
  );
};
