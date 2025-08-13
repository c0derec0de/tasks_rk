import { useContext } from "react";
import "./App.css";
import { ThemeContext } from "./context/ThemeContext";
import { Children } from "./components/Children/Children";

function App() {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeChange = (e) => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  console.log("Родитель сменил тему");
  return (
    <>
      <div className={theme === "light" ? "light-app" : "dark-app"}>
        <div className="container">
          <button onClick={handleThemeChange}>Click to change theme</button>
          <Children />
        </div>
      </div>
    </>
  );
}

export default App;
