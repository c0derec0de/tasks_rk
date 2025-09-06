// npm test

import { bubbleSort, qSort } from "./index.js";
import arrGenerator from "./arrGenerator.js";

const testMocks = [
  {
    title: "Сортирует массив [1, 4, 2, 8] в [1, 2, 4, 8]",
    mock: [1, 4, 2, 8],
    result: [1, 2, 4, 8],
  },
  { title: "Сортирует единичный массив [1]", mock: [1], result: [1] },
  { title: "Сортирует пустой массив []", mock: [], result: [] },
  {
    title: "Сортирует массив с дубликатами [1, 6, 6, 8]",
    mock: [1, 6, 6, 8],
    result: [1, 6, 6, 8],
  },
  {
    title: "Сортирует массив с отрицательными значениями [-1, -6, -6, 8]",
    mock: [-1, -6, -6, 8],
    result: [-6, -6, -1, 8],
  },
  {
    title: "Сортирует отсортированный массив [1, 2, 4, 8]",
    mock: [1, 2, 4, 8],
    result: [1, 2, 4, 8],
  },
  {
    title: "Сортирует массив с одинаковыми элементами [5, 5, 5]",
    mock: [5, 5, 5],
    result: [5, 5, 5],
  },
  {
    title: "Сортирует массив со строками",
    mock: ["A", "D", "C"],
    result: ["A", "C", "D"],
  },
];

// bubbleSort

describe("bubbleSort", () => {
  testMocks.forEach(({ title, mock, result }) => {
    test(title, () => {
      expect(bubbleSort(mock)).toEqual(result);
    });
  });

  test("Сравнение со встроенной сортировкой", () => {
    const arr = [3, 1, 4, 2];
    expect(bubbleSort(arr)).toEqual([...arr].sort((a, b) => a - b));
  });

  test("Должен выбросить ошибку, если аргумент не массив", () => {
    expect(() => bubbleSort("text")).toThrow();
  });
});

// qSort

describe("qSort", () => {
  testMocks.forEach(({ title, mock, result }) => {
    test(title, () => {
      expect(qSort(mock)).toEqual(result);
    });
  });

  test("Сравнение со встроенной сортировкой", () => {
    const arr = [3, 1, 4, 2];
    expect(qSort(arr)).toEqual([...arr].sort((a, b) => a - b));
  });

  test("Сортирует большой массив на 1000 элементов", () => {
    const arr = arrGenerator(1000);
    const sorted = [...arr].sort((a, b) => a - b);
    expect(qSort(arr)).toEqual(sorted);
  });

  test("Должен выбросить ошибку, если аргумент не массив", () => {
    expect(() => qSort("text")).toThrow();
  });
});
