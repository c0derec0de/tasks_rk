import { useState } from "react";
import "./App.css";
import { TestList } from "./components/testList";

function App() {
  const [mounting, setMounting] = useState(true);

  return (
    <>
      <div>
        <button onClick={() => setMounting(!mounting)}>Видимость</button>
        {mounting && <TestList />}
      </div>
    </>
  );
}

export default App;
