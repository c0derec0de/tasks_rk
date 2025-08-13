import { useState } from "react";
import { Children } from "../Children/Children";
import { ListItem } from "../Lists/ListItem";
import React from "react";

const ListItemMemo = React.memo(ListItem);
const ChildrenWithMemo = React.memo(Children);
const LIST_ELEMENTS = ["One", "Two", "Three"];

export const ParentWithoutProps = () => {
  const [updateCounter, setUpdateCounter] = useState(0);
  console.log(
    "%cParent без пропсов рендерится",
    "color: blue; font-weight: bold;"
  );
  return (
    <div>
      <h1>React.memo</h1>
      <div className="container">
        <h2 style={{ color: "red" }}>Parent без пропсов</h2>
        <p>
          Счетчик: <strong>{updateCounter}</strong>
        </p>
        <button onClick={() => setUpdateCounter(updateCounter + 1)}>+ 1</button>
        <ChildrenWithMemo title="[С МЕМО]" />
        <Children title="[БЕЗ МЕМО]" />
        <h2 style={{ color: "red" }}>Список с react.memo</h2>
        <ul>
          {LIST_ELEMENTS.map((item, index) => (
            <ListItemMemo item={item} key={index} />
          ))}
        </ul>
      </div>
    </div>
  );
};
