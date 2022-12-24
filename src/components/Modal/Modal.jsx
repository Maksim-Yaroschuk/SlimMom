import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { apiCalorieIntake } from 'services/api/api';
import DailyCalorieIntake from 'components/DailyCalorieIntake/DailyCalorieIntake';
import { Overlay, ModalWindow } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onClose, children, userParams }) => {
  const [backResponse, setBackResponse] = useState(null);

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
      if (e.code === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackDropClick = e => {
    if (e.currentTarget === e.target) {
      onClose(false);
    }
  };

  return createPortal(
    <Overlay onClick={handleBackDropClick}>
      <ModalWindow onClose={onClose}>
        {backResponse && <DailyCalorieIntake backResponse={backResponse} />}
        {children}
      </ModalWindow>
    </Overlay>,
    modalRoot
  );
};

export default Modal;
