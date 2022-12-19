import { createPortal } from "react-dom"
import { useEffect } from "react"
import { Overlay } from "./DiaryModal.styled"
import { DiaryAddProductForm } from "components/DiaryAddProductForm/DiaryAddProductForm"
import { ModalWrapper } from "./DiaryModal.styled"

const modalRoot = document.querySelector('#modal-root')

export const DiaryModal = ({onClose}) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
        window.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'auto';
    };
  });

const handleKeyDown = (e) => {
    if(e.code === 'Escape') {
        onClose()
    }
}

  return createPortal(
    <Overlay>
        <ModalWrapper>
            <button onClick={() => onClose()}>x</button>
            <DiaryAddProductForm onClose={onClose} />
        </ModalWrapper>
    </Overlay>, 
    modalRoot
)
}