import { Overlay, ModalContainer } from './Modal.styled';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onClose, imgInd, images }) => {
  const handleClose = e => {
    if (e.type === 'keydown' && e.code !== 'Escape') {
      return;
    }

    if (e.type === 'click' && e.currentTarget !== e.target) {
      return;
    }

    onClose(null);
  };

  useEffect(() => {
    window.addEventListener('keydown', handleClose);
    return () => {
      window.removeEventListener('keydown', handleClose);
    };
  });

  const activeImg = () => {
    return images[`${imgInd}`];
  };

  return createPortal(
    <Overlay onClick={handleClose}>
      <ModalContainer>
        <img src={activeImg().largeImageURL} alt={activeImg().tags} />
      </ModalContainer>
    </Overlay>,
    modalRoot
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  imgInd: PropTypes.number.isRequired,
  images: PropTypes.array.isRequired,
};

export default Modal;
