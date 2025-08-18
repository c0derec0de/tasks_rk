import "./Tooltip.css";
import ReactDOM from "react-dom";

type TooltipProps = {
  message: string;
  showTooltip: boolean;
  buttonRect?: DOMRect;
};

const tooltipRoot = document.getElementById("tooltip-root");
export const Tooltip = ({ message, showTooltip, buttonRect }: TooltipProps) => {
  if (!showTooltip) return null;
  if (!tooltipRoot) {
    console.error("Element tooltipRoot doesnt exist");
    return null;
  }
  const position = buttonRect
    ? {
        top: buttonRect.bottom + window.scrollY + 5,
        right: buttonRect.left + window.scrollX,
        width: buttonRect.width,
      }
    : { top: 0, left: 0, width: "auto" };

  return ReactDOM.createPortal(
    <div
      className="tooltip"
      style={{
        position: "fixed",
        top: `${position.top}px`,
        left: `${position.left}px`,
        transform: "translateX(-50%)",
      }}
    >
      <span className="message">{message}</span>
    </div>,
    tooltipRoot
  );
};
