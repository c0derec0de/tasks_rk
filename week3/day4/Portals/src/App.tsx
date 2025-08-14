import { useState } from "react";
import "./App.css";
import { Modal } from "./components/Modal/Modal";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="main-container">
        <button onClick={() => setOpen(true)}>Открыть модальное окно</button>
        <Modal
          message="Hello World!"
          isOpen={open}
          onClose={() => setOpen(false)}
        />
      </div>
    </>
  );
}

export default App;
