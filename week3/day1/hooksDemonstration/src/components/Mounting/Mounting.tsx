import { useEffect, useState } from "react";
import { Children } from "../Children/Children";

export const Mounting = () => {
  const [mountCounter, setMountCounter] = useState(0);

  const [updateId, setUpdateId] = useState(1);
  const [updateCounter, setUpdateCounter] = useState(0);

  useEffect(() => {
    console.log("Компонент 1. Эффект без массива зависимостей.");

    const intervalId = setInterval(() => {
      setMountCounter((c) => c + 1);
    }, 1000);

    return () => {
      console.log(
        "%c1 размонтирован. Cleanup после размонтирования.",
        "color: red; font-weight: bold;"
      );
      clearInterval(intervalId);
    };
  });

  // клинап при размонтировании
  useEffect(() => {
    console.log("Компонент 2 монтирован. Зависимость от пустого массива.");

    const intervalId = setInterval(() => {
      setMountCounter((c) => c + 1);
    }, 1000);

    return () => {
      console.log(
        "%cКомпонент 2 размонтирован. Cleanup после размонтирования.",
        "color: red; font-weight: bold;"
      );
      clearInterval(intervalId);
    };
  }, []); // сработает 1 раз при монтировании и 1 раз при размонтировании

  // клинап при обновлении
  useEffect(() => {
    console.log(
      `Компонент 3 монтирован. Зависимость от массива значений [updateId]`
    );

    const intervalId = setInterval(() => {
      setUpdateCounter((c) => c + 1);
    }, 1000);

    return () => {
      console.log(
        `%cКомпонент 3 размонтирован. Cleanup после обновления [updateId]`,
        "color: red; font-weight: bold;"
      );
      clearInterval(intervalId);
    };
  }, [updateId]); //  эффект перезапустится при изменении updateId

  const handleRestart = () => {
    setUpdateCounter(0);
    setUpdateId((id) => id + 1);
  };

  return (
    <div>
      <Children />
      <hr />
      <div className="container">
        <h3>Cleanup при размонтировании</h3>
        <p>Этот счетчик запущен в useEffect с пустым [].</p>
        <p>
          Счетчик: <strong>{mountCounter}</strong>
        </p>
      </div>
      <hr />

      <div className="container">
        <h3>Cleanup при Обновлении</h3>
        <p>
          {" "}
          Этот счетчик запущен в useEffect и зависит от параметра [updateId]
        </p>
        <p>
          Счетчик: <strong>{updateCounter}</strong>
        </p>
        <p>
          ID: <strong>{updateId}</strong>
        </p>
        <button onClick={handleRestart}>Начать заново</button>
      </div>
    </div>
  );
};
