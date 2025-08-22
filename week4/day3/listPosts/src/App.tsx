import { useState } from "react";
import { List } from "./components/List";

function App() {
  const [hidden, setHidden] = useState(true);
  return (
    <>
      <button onClick={() => setHidden(!hidden)}>Видимость списка</button>
      {hidden ? <List /> : ""}
    </>
  );
}

export default App;
