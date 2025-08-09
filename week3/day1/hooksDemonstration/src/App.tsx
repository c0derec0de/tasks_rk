import { useState } from "react";
import "./App.css";
import { Mounting } from "./components/Mounting/Mounting";
import { VisualDifference } from "./components/VisualDifference/VisualDifference";

function App() {
  const [visible, setVisible] = useState(true);

  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "100px" }}>
      <div style={{ border: "2px solid purple", padding: "20px" }}>
        <button
          style={{ marginBottom: "10px" }}
          onClick={() => setVisible(visible ? false : true)}
        >
          {visible ? "Размонтировать компонент" : "Монтировать компонент"}
        </button>
        <div className="mounting-section">{visible && <Mounting />}</div>
      </div>
      <div style={{ border: "2px solid purple", padding: "20px" }}>
        <VisualDifference />
      </div>
    </div>
  );
}

export default App;
