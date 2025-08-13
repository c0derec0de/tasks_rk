import { useContext } from "react";
import "./App.css";
import { ThemeContext } from "./context/ThemeContext";
import { Children } from "./components/Children/Children";

function App() {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeChange = (e) => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <>
      <div className={theme === "light" ? "light-app" : "dark-app"}>
        <p className="title">Click to change theme</p>
        <Children />
        <button onClick={handleThemeChange}>Click</button>
      </div>
    </>
  );
}

export default App;
