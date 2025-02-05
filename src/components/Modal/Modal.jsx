import { Overlay, ModalContainer } from './Modal.styled';
import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
    imgInd: PropTypes.number.isRequired,
    images: PropTypes.array.isRequired,
  };

  componentDidMount(e) {
    window.addEventListener('keydown', this.handleClose);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleClose);
  }

  handleClose = e => {
    if (e.type === 'keydown' && e.code !== 'Escape') {
      return;
    }

    if (e.type === 'click' && e.currentTarget !== e.target) {
      return;
    }

    this.props.onClose(prevState => ({ selectedImageIndex: null }));
  };

  render() {
    const activeImg = this.props.images[`${this.props.imgInd}`];
    return createPortal(
      <Overlay onClick={this.handleClose}>
        <ModalContainer>
          <img src={activeImg.largeImageURL} alt={activeImg.tags} />
        </ModalContainer>
      </Overlay>,
      modalRoot
    );
  }
}