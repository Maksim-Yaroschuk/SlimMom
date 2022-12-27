import { Button } from 'components/Button/Button';
import { ButtonWrapper } from 'components/Form/Form.styled';
import { InnerInfo, ModalWindow, Overlay } from 'components/Modal/Modal.styled';
import React from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export const ExitModal = ({ onClose, handleLogout }) => {
  const handleBackDropClick = e => {
    if (e.currentTarget === e.target) {
      onClose(false);
    }
  };
  return createPortal(
    <Overlay onClick={handleBackDropClick}>
      <ModalWindow style={{ paddingTop: '50px' }}>
        <InnerInfo>
          <h2>Are you sure you want to log out?</h2>
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/43d5c285197371.5d7503eab20c1.gif"
            alt="cat"
            height="400"
          />
        </InnerInfo>
        <ButtonWrapper
          style={{ display: 'flex', gap: '20px', position: 'static' }}
        >
          <div onClick={onClose}>
            <Button full={true}>No</Button>
          </div>
          <div onClick={handleLogout}>
            <Button>Yes</Button>
          </div>
        </ButtonWrapper>
      </ModalWindow>
    </Overlay>,
    modalRoot
  );
};
