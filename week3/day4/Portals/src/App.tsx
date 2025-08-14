import { useState } from "react";
import "./App.css";
import { Modal } from "./components/Modal/Modal";
import { Tooltip } from "./components/Tooltip/Tooltip";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const onMouseEnterHandler = () => {
    setShowTooltip(true);
  };

  const onMouseLeaveHandler = () => {
    setShowTooltip(false);
  };

  return (
    <>
      <div className="main-container">
        <div className="modal-wrapper">
          <button className="modal-button" onClick={() => setOpenModal(true)}>
            Открыть модальное окно
          </button>
          <Modal
            message="Hello World!"
            isOpen={openModal}
            onClose={() => setOpenModal(false)}
          >
            <h4>children модального окна</h4>{" "}
          </Modal>
        </div>
        <div
          className="tooltip-wrapper"
          onMouseEnter={onMouseEnterHandler}
          onMouseLeave={onMouseLeaveHandler}
        >
          <button className="tooltip-button">Увидеть тултип</button>
          <Tooltip message="Hello world" showTooltip={showTooltip}></Tooltip>
        </div>
      </div>
    </>
  );
}

export default App;
