import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { apiCalorieIntake } from 'services/api/api';
import DailyCalorieIntake from 'components/DailyCalorieIntake/DailyCalorieIntake';
import { Overlay, ModalWindow, CloseArrow, ButtonClose } from './Modal.styled';
import { Loader } from 'components/Loader/Loader';
import { useLocation } from 'react-router-dom';
import { routes } from 'components/Routes/routes';
import { useMediaQuery } from 'react-responsive';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onClose, children, userParams }) => {
  const [backResponse, setBackResponse] = useState(null);
  const location = useLocation();
  const isMobile = useMediaQuery({ query: '(max-width: 426px)' });
  useEffect(() => {
    if (!userParams) {
      return;
    }

    const fetchData = async () => {
      const data = await apiCalorieIntake(userParams);
      if (data) {
        setBackResponse(data);
      }
    };
    fetchData();
  }, [userParams]);

  useEffect(() => {
    if (backResponse === null) {
      return;
    }
  }, [backResponse]);

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape');
      onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    const body = document.querySelector('body');
    body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      body.style.overflow = 'auto';
    };
  }, [onClose]);

  const handleBackDropClick = e => {
    if (e.currentTarget === e.target) {
      onClose(false);
    }
  };

  return createPortal(
    <Overlay onClick={handleBackDropClick}>
      <ModalWindow
        onClose={onClose}
        style={
          location.pathname === routes.home && isMobile
            ? { top: '460px' }
            : null
        }
      >
        {backResponse ? (
          <DailyCalorieIntake
            backResponse={backResponse}
            userParams={userParams}
          />
        ) : (
          <Loader />
        )}
        {children}
        <ButtonClose type="button" onClick={onClose}></ButtonClose>
        <CloseArrow size="20px" left="20px" onClick={onClose} />
      </ModalWindow>
    </Overlay>,
    modalRoot
  );
};

export default Modal;
