import "./Modal.css";
import ReactDOM from "react-dom";

type ModalProps = {
  message: string;
  isOpen: boolean;
  onClose: () => void;
};

const modalRoot = document.getElementById("modal-root");
export const Modal = ({ message, isOpen, onClose }: ModalProps) => {
  if (!isOpen) return null;
  if (!modalRoot) {
    console.error("Element modal-root doesnt exist");
    return null;
  }
  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal">
        <span className="message">{message}</span>
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    modalRoot
  );
};
