import ReactDOM from "react-dom";
import "./Dropdown.css";

type DropdownProps = {
  elements: string[];
  isOpen: boolean;
  buttonRect?: DOMRect;
};

const DropdownRoot = document.getElementById("dropdown-root");
export const Dropdown = ({ elements, isOpen, buttonRect }: DropdownProps) => {
  if (!isOpen) return null;
  if (!DropdownRoot) {
    console.error("Element dropdown-root doesnt exist");
    return null;
  }
  const position = buttonRect
    ? {
        top: buttonRect.bottom + window.scrollY,
        left: buttonRect.left + window.scrollX,
        width: buttonRect.width,
      }
    : { top: 0, left: 0, width: "auto" };

  return ReactDOM.createPortal(
    <div
      className="dropdown"
      style={{
        position: "absolute",
        top: `${position.top}px`,
        left: `${position.left}px`,
        width: position.width,
      }}
    >
      <ul>
        {elements.map((el, index) => (
          <li key={index} className="dropdown-item">
            {el}
          </li>
        ))}
      </ul>
    </div>,
    DropdownRoot
  );
};
