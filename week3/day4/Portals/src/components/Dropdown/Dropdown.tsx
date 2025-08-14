import ReactDOM from "react-dom";
import "./Dropdown.css";
type DropdownProps = {
  elements: string[];
  isOpen: boolean;
};

const DropdownRoot = document.getElementById("dropdown-root");
export const Dropdown = ({ elements, isOpen }: DropdownProps) => {
  if (!isOpen) return null;
  if (!DropdownRoot) {
    console.error("Element dropdown-root doesnt exist");
    return null;
  }
  return ReactDOM.createPortal(
    <div className="dropdown">
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
