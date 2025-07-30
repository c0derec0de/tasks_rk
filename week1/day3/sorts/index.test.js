// npm test

import { bubbleSort, qSort } from "./index.js";
import arrGenerator from "./arrGenerator.js";

// bubbleSort
test("bubbleSort. Сортируем массив [1, 4, 2, 8] в [1, 2, 4, 8]", () => {
  expect(bubbleSort([1, 4, 2, 8])).toEqual([1, 2, 4, 8]);
});

test("bubbleSort. Единичный массив [1] в [1]", () => {
  expect(bubbleSort([1])).toEqual([1]);
});

test("bubbleSort. Пустой массив [] в []", () => {
  expect(bubbleSort([])).toEqual([]);
});

test("bubbleSort. Массив с дубликатами [1, 4, 4, 8]", () => {
  expect(bubbleSort([1, 4, 4, 8])).toEqual([1, 4, 4, 8]);
});

test("bubbleSort. Массив с отрицательными значениями [-1, -4, -4, 8]", () => {
  expect(bubbleSort([-4, -4, -1, 8])).toEqual([-4, -4, -1, 8]);
});

test("bubbleSort. Отсортированный массив [1, 2, 4, 8]", () => {
  expect(bubbleSort([1, 2, 4, 8])).toEqual([1, 2, 4, 8]);
});

test("bubbleSort. Все элементы одинаковые [5, 5, 5]", () => {
  expect(bubbleSort([5, 5, 5])).toEqual([5, 5, 5]);
});

test("bubbleSort. Сравнение с встроенной сортировкой для [1, 4, 3, 7, 2]", () => {
  const sorted = [1, 4, 3, 7, 2].sort((a, b) => a - b);
  expect(bubbleSort([1, 4, 3, 7, 2])).toEqual(sorted);
});

// qSort
console.log("============qSort===========");
test("qSort. Сортируем массив [1, 4, 2, 8] в [1, 2, 4, 8]", () => {
  expect(qSort([1, 4, 2, 8])).toEqual([1, 2, 4, 8]);
});

test("qSort. Единичный массив [1] в [1]", () => {
  expect(qSort([1])).toEqual([1]);
});

test("qSort. Пустой массив [] в []", () => {
  expect(qSort([])).toEqual([]);
});

test("qSort. Массив с дубликатами [1, 4, 4, 8]", () => {
  expect(qSort([1, 4, 4, 8])).toEqual([1, 4, 4, 8]);
});

test("qSort. Массив с отрицательными значениями [-1, -4, -4, 8]", () => {
  expect(qSort([-4, -4, -1, 8])).toEqual([-4, -4, -1, 8]);
});

test("qSort. Отсортированный массив [1, 2, 4, 8]", () => {
  expect(qSort([1, 2, 4, 8])).toEqual([1, 2, 4, 8]);
});

test("qSort. Все элементы одинаковые [5, 5, 5]", () => {
  expect(qSort([5, 5, 5])).toEqual([5, 5, 5]);
});

test("qSort. Сравнение с встроенной сортировкой для [1, 4, 3, 7, 2]", () => {
  const sorted = [1, 4, 3, 7, 2].sort((a, b) => a - b);
  expect(qSort([1, 4, 3, 7, 2])).toEqual(sorted);
});

test("qSort. Большой массив на 1000 элементов", () => {
  const arr = arrGenerator(1000);
  const sorted = [...arr].sort((a, b) => a - b);
  expect(qSort(arr)).toEqual(sorted);
});
