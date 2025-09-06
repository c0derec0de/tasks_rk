import { useState, type ReactNode } from "react";

type ParentWithPropsProps = {
  children: ReactNode;
};
export const ParentWithProps = ({ children }: ParentWithPropsProps) => {
  const [updateCounter, setUpdateCounter] = useState(0);
  console.log(
    "%cParent с пропсами рендерится",
    "color: blue; font-weight: bold;"
  );
  return (
    <div>
      <h1>Паттерн потомков в виде пропсов</h1>
      <div className="container">
        <h2 style={{ color: "red" }}>Parent с пропсами</h2>
        <p>
          Счетчик: <strong>{updateCounter}</strong>
        </p>
        <button onClick={() => setUpdateCounter(updateCounter + 1)}>+ 1</button>
        {children}
      </div>
    </div>
  );
};
