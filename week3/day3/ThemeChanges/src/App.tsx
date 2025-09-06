import "./App.css";
import { useThemeContext } from "./context/ThemeContext/useThemeContext";
import { Children } from "./components/Children/Children";
import { useState } from "react";

function App() {
  const { theme, setTheme } = useThemeContext();
  const [count, setCount] = useState<number>(0);

  const handleThemeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleAddCount = () => {
    setCount(count + 1);
  };

  console.log("Родитель сменил тему");
  return (
    <>
      <div className={theme === "light" ? "light-app" : "dark-app"}>
        <div className="container">
          <button onClick={handleThemeChange}>Click to change theme</button>
          <Children />
          <div style={{ marginTop: "10px" }}>
            <button onClick={handleAddCount}>Click to add number</button>
            <p>Number: {count}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
