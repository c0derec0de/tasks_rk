import { useState } from "react";
import "./App.css";
import { TestList } from "./components/testList";
import { TestXHRTest } from "./components/TestXHRTest";

function App() {
  const [mounting, setMounting] = useState(true);

  return (
    <>
      <div>
        <button onClick={() => setMounting(!mounting)}>Видимость</button>
        {mounting && <TestList />}
        {mounting && <TestXHRTest />}
      </div>
    </>
  );
}

export default App;
