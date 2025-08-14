import React from "react";
import { useThemeContext } from "../../context/ThemeContext/useThemeContext";
import "./Children.css";

export const Children = React.memo(() => {
  const { theme } = useThemeContext();
  console.log("Children сменил тему");
  return (
    <>
      <div className={theme === "light" ? "light-child" : "dark-child"}>
        <p className="read-the-child">Children</p>
      </div>
    </>
  );
});
