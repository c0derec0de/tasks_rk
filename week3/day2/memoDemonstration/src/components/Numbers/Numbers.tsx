import React, { useMemo, useState } from "react";

const generateArray = (n: number, label: string): number[] => {
  console.log(
    `%c${label} выполняется тяжелое вычисление`,
    "color: green; font-weight: bold;"
  );
  if (n < 1) return [];
  return Array.from({ length: n }, (_, i) => i + 1);
};

export const Numbers: React.FC = () => {
  const [num, setNum] = useState(0);
  const [name, setName] = useState("");

  const arrayWithtMemo = useMemo(() => generateArray(num, "[С МЕМО]"), [num]);
  const arrayWithoutMemo = generateArray(num, "[БЕЗ МЕМО]");

  return (
    <div>
      <h1>UseMemo</h1>
      <h4>Введите число:</h4>
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(parseInt(e.target.value) || 0)}
      ></input>
      <h4>Введите имя:</h4>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <h4>Результат без usememo: [{arrayWithoutMemo.join(", ")}]</h4>
      <h4>Результат с usememo: [{arrayWithtMemo.join(", ")}]</h4>
      <h4>Имя: {name}</h4>
    </div>
  );
};
