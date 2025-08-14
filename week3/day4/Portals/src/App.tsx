import { useState } from "react";
import "./App.css";
import { Modal } from "./components/Modal/Modal";
import { Tooltip } from "./components/Tooltip/Tooltip";
import { Dropdown } from "./components/Dropdown/Dropdown";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [buttonRect, setButtonRect] = useState<DOMRect | undefined>();

  const onMouseEnterHandler = () => {
    setShowTooltip(true);
  };

  const onMouseLeaveHandler = () => {
    setShowTooltip(false);
  };

  const toggleDropdown = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect(); //геометрические параметры кнопки
    setButtonRect(rect);
    setShowDropdown(!showDropdown);
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
        <div className="dropdown-wrapper">
          <button className="dropdown-button" onClick={toggleDropdown}>
            Открыть выпадающий список
          </button>
          <Dropdown
            elements={["Hello World!", "Hello", "World"]}
            isOpen={showDropdown}
            buttonRect={buttonRect}
          />
        </div>
      </div>
    </>
  );
}

export default App;
