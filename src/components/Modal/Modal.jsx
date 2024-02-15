import { useEffect } from 'react';
import { StyledModal } from './Modal.syled';

export const Modal = ({ children, openModal, setOpenModal }) => {
  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = 'hidden';
    }
    const handelKey = function (e) {
      if (e.key === 'Escape') {
        setOpenModal(false);
      }
    };
    window.addEventListener('keydown', handelKey);
    return () => {
      window.removeEventListener('keydown', handelKey);
      document.body.style.overflow = 'visible';
    };
  }, [setOpenModal, openModal]);
  return (
    <StyledModal>
      <div className="modal__body">{children}</div>
    </StyledModal>
  );
};
