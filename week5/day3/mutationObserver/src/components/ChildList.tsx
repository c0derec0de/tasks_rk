import { useState } from "react";

export const ChildList = () => {
  const [elements, setElements] = useState(["Элемент 1", "Элемент 2"]);

  const addElement = () => {
    const newItem = `Элемент ${elements.length + 1}`;
    setElements((prevElements) => [...prevElements, newItem]);
  };

  return (
    <div>
      <button onClick={addElement}>Добавить элемент</button>
      <ul>
        {elements.map((elem, index) => (
          <li
            key={index}
            data-id={`item-${index + 1}`}
            data-timestamp={Date.now()}
            data-content={elem}
          >
            {elem}
          </li>
        ))}
      </ul>
    </div>
  );
};
