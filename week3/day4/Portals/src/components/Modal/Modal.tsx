import ReactDOM from "react-dom";
import "./Modal.css";
import type { PropsWithChildren } from "react";

type ModalProps = {
  message: string;
  isOpen: boolean;
  onClose: () => void;
};

const modalRoot = document.getElementById("modal-root");
export const Modal = ({
  message,
  isOpen,
  onClose,
  children,
}: PropsWithChildren<ModalProps>) => {
  if (!isOpen) return null;
  if (!modalRoot) {
    console.error("Element modal-root doesnt exist");
    return null;
  }
  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal">
        <span className="message">{message}</span>
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    modalRoot
  );
};
