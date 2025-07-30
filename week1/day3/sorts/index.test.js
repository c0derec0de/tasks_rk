// npm test

import { bubbleSort, qSort } from "./index.js";
import arrGenerator from "./arrGenerator.js";

const testMocks = [
  {
    title: "Сортируем массив [1, 4, 2, 8] в [1, 2, 4, 8]",
    mock: [1, 4, 2, 8],
    result: [1, 2, 4, 8],
  },
  { title: "Единичный массив [1] в [1]", mock: [1], result: [1] },
  { title: "Пустой массив [] в []", mock: [], result: [] },
  {
    title: "Массив с дубликатами [1, 6, 6, 8]",
    mock: [1, 6, 6, 8],
    result: [1, 6, 6, 8],
  },
  {
    title: "Массив с отрицательными значениями [-1, -6, -6, 8]",
    mock: [-1, -6, -6, 8],
    result: [-6, -6, -1, 8],
  },
  {
    title: "Отсортированный массив [1, 2, 4, 8]",
    mock: [1, 2, 4, 8],
    result: [1, 2, 4, 8],
  },
  {
    title: "Все элементы одинаковые [5, 5, 5]",
    mock: [5, 5, 5],
    result: [5, 5, 5],
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

  test("Большой массив на 1000 элементов", () => {
    const arr = arrGenerator(1000);
    const sorted = [...arr].sort((a, b) => a - b);
    expect(qSort(arr)).toEqual(sorted);
  });
});
