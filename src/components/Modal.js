import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import propTypes from 'prop-types';
import { StyledModal, StyledModalBackdrop } from '../styles/styles';

const root = document.getElementById('root');

const Modal = props => {
  return ReactDOM.createPortal(
    <Fragment>
      <StyledModal open={props.open}>{props.children}</StyledModal>
      <StyledModalBackdrop onClick={props.toggle} open={props.open} />
    </Fragment>,
    root
  );
};

Modal.propTypes = {
  open: propTypes.bool.isRequired,
  toggle: propTypes.func.isRequired
};

export default Modal;
