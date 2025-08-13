import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import "./Children.css";
export const Children = () => {
  const { theme } = useContext(ThemeContext);
  console.log("Children сменил тему");
  return (
    <>
      <div className={theme === "light" ? "light-child" : "dark-child"}>
        <p className="read-the-child">Children</p>
      </div>
    </>
  );
};
