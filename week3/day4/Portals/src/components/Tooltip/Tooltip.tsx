import "./Tooltip.css";
import ReactDOM from "react-dom";

type TooltipProps = {
  message: string;
  showTooltip: boolean;
};

const tooltipRoot = document.getElementById("tooltip-root");
export const Tooltip = ({ message, showTooltip }: TooltipProps) => {
  if (!showTooltip) return null;
  if (!tooltipRoot) {
    console.error("Element tooltipRoot doesnt exist");
    return null;
  }
  return ReactDOM.createPortal(
    <div className="tooltip">
      <span className="message">{message}</span>
    </div>,
    tooltipRoot
  );
};
