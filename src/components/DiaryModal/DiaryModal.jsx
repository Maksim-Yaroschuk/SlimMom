import { createPortal } from "react-dom"
import { useEffect } from "react"
import { Overlay } from "./DiaryModal.styled"
import { DiaryAddProductForm } from "components/DiaryAddProductForm/DiaryAddProductForm"

const modalRoot = document.querySelector('#modal-root')

export const DiaryModal = ({onClose}) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
        window.removeEventListener('keydown', handleKeyDown)
    };
  });

const handleKeyDown = (e) => {
    if(e.code === 'Escape') {
        onClose()
    }
}

  return createPortal(
    <Overlay>
        <div>
            <button onClick={() => onClose()}>x</button>
            <DiaryAddProductForm />
        </div>
    </Overlay>, 
    modalRoot
)
}