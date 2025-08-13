import React, { useState, useEffect, useLayoutEffect } from "react";

export const VisualDifference: React.FC = () => {
  const [visualValue, setVisualValue] = useState(0);
  const [useLayout, setUseLayout] = useState(false);

  // Разница useEffect vs useLayoutEffect наглядно
  useEffect(() => {
    if (!useLayout && visualValue === 0) {
      console.log("ПОСЛЕ отрисовки DOM запускается useEffect");
      setVisualValue(Math.random() * 200);
    }
  }, [visualValue, useLayout]);

  useLayoutEffect(() => {
    if (useLayout && visualValue === 0) {
      console.log("ДО отрисовки DOM синхронно запускается useLayoutEffect");
      setVisualValue(Math.random() * 200);
    }
  }, [visualValue, useLayout]);

  return (
    <div>
      <div className="container">
        <h3>Визуальное отличие useEffect от useLayoutEffect</h3>
        <label>
          <input
            type="checkbox"
            checked={useLayout}
            onChange={() => setUseLayout((p) => !p)}
          />
          Использовать useLayoutEffect (без моргания)
        </label>
        <button
          style={{ marginLeft: "15px" }}
          onClick={() => setVisualValue(0)}
        >
          Переместить
        </button>
        <div
          style={{
            height: "350px",
            padding: "10px",
            marginTop: "10px",
            backgroundColor: "hsla(224, 18.50%, 84.10%, 0.05)",
          }}
        >
          <div
            className="moved-element"
            style={{
              backgroundColor: useLayout
                ? "hsl(226, 41.70%, 52.90%)"
                : "hsl(290, 55.40%, 56.10%)",
              marginTop: `${visualValue}px`,
            }}
          >
            <b>{Math.round(visualValue)}px</b>
          </div>
        </div>
      </div>
    </div>
  );
};
