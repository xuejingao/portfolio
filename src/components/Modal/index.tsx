import React from "react";

export type ModalProps = {
  show?: boolean;
  children?: React.ReactElement;
};

const Modal: React.FC<ModalProps> = ({ show = false, children = null }) => {
  return <>{show ? children : null}</>;
};

export default Modal;
