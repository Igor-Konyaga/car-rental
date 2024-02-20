import { useEffect } from 'react';
import { StyledModal } from './Modal.syled';
import { RxCross2 } from 'react-icons/rx';

export const Modal = ({ children, openModal, setOpenModal }) => {
  const handleModal = (e) => {
    if (e.target !== e.currentTarget) {
      return;
    }

    setOpenModal(false);
  };

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
    <StyledModal className={openModal && 'active'}   onClick={handleModal}>
      <div className={openModal ? 'modal__body active' : 'modal__body'}>
        {children}
        <button
          onClick={() => setOpenModal(false)}
          className="modal__close-btn"
          type="button"
        >
          <RxCross2 className="modal__close-icon" />
        </button>
      </div>
    </StyledModal>
  );
};
