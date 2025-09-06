import "./App.css";
import { Numbers } from "./components/Numbers/Numbers";
import { Children } from "./components/Children/Children";
import { ParentWithProps } from "./components/Parent/ParentWithProps";
import { ParentWithoutProps } from "./components/Parent/ParentWithoutProps";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "100px" }}>
      <Numbers />
      <ParentWithoutProps />
      <ParentWithProps>
        <Children title="" />
      </ParentWithProps>
    </div>
  );
}

export default App;
