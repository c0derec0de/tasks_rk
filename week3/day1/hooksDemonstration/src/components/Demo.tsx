import React, { useState, useEffect, useLayoutEffect } from "react";
import "./Demo.css";

export const Demo: React.FC = () => {
  const [mountCounter, setMountCounter] = useState(0);

  const [updateId, setUpdateId] = useState(1);
  const [updateCounter, setUpdateCounter] = useState(0);

  const [visualValue, setVisualValue] = useState(0);
  const [useLayout, setUseLayout] = useState(false);

  const [visible, setVisible] = useState(true);

  // 1 Монтирование и размонтирование
  useEffect(() => {
    console.log("Компонент монтирован. Запуск интервала.");

    const intervalId = setInterval(() => {
      setMountCounter((c) => c + 1);
    }, 1000);

    return () => {
      console.log("Компонент размонтирован. Cleanup интервала.");
      clearInterval(intervalId);
    };
  }, []); // сработает 1 раз при монтировании и 1 раз при размонтировании

  // 2 Очистка при обновлении
  useEffect(() => {
    console.log(`Запуск счетчика для ID: ${updateId}`);

    const intervalId = setInterval(() => {
      setUpdateCounter((c) => c + 1);
    }, 1000);

    return () => {
      console.log(`Cleanup для ID: ${updateId}`);
      clearInterval(intervalId);
    };
  }, [updateId]); //  эффект перезапустится при изменении updateId

  const handleRestart = () => {
    setUpdateCounter(0);
    setUpdateId((id) => id + 1);
  };

  // 3 Разница useEffect vs useLayoutEffect наглядно
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
    <div style={{ border: "2px solid purple", padding: "20px" }}>
      <div className="container">
        <h3>Монтирование и размонтирование</h3>
        <p>
          Этот счетчик запущен через в useEffectс пустым []. Он будет остановлен
          через `cleanup` при размонтировании всего компонента.
        </p>
        {visible ? (
          <p>
            Счетчик: <strong>{mountCounter}</strong>
          </p>
        ) : (
          <p></p>
        )}

        <button onClick={() => setVisible(visible ? false : true)}>
          Размонтировать
        </button>
      </div>
      <hr />

      <div className="container">
        <h3>Очистка (cleanup) при Обновлении</h3>
        <p>
          Нажмите чтобы перезапустить таймер. В консоли: сначала CLEANUP для
          старого ID, затем Effectс для нового.
        </p>
        <p>
          Счетчик: <strong>{updateCounter}</strong>
        </p>
        <button onClick={handleRestart}>Начать заново</button>
      </div>
      <hr />

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
            backgroundColor: "white",
          }}
        >
          <div
            className="moved-element"
            style={{
              backgroundColor: useLayout
                ? "hsl(226, 41.70%, 52.90%)"
                : "hsl(23, 55.40%, 56.10%)",
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
