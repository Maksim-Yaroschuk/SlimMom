import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { Overlay, ModalWindow } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onClose, children }) => {
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
        {children}
      </ModalWindow>
    </Overlay>,
    modalRoot
  );
};

export default Modal;