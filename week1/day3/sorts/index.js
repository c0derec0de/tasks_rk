// запуск через node index.js

import arrGenerator from "./arrGenerator.js";

function bubbleSort(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("Функция принимает только массивы");
  }

  const result = [...arr];

  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result.length - i - 1; j++) {
      if (result[j] > result[j + 1]) {
        const n = result[j];
        result[j] = result[j + 1];
        result[j + 1] = n;
      }
    }
  }
  return result;
}

function qSort(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("Функция принимает только массивы");
  }

  if (arr.length <= 1) {
    return arr;
  }

  const pivotIndex = Math.floor(Math.random() * arr.length);
  const pivot = arr[pivotIndex];
  const left = [];
  const right = [];
  const equal = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else if (arr[i] > pivot) {
      right.push(arr[i]);
    } else {
      equal.push(arr[i]);
    }
  }

  return [...qSort(left), ...equal, ...qSort(right)];
}

function measureTime(fn) {
  const t0 = performance.now();
  fn();
  const t1 = performance.now();
  console.log(`Время выполнения: ${(t1 - t0).toFixed(2)} мс`);
}

const arrSizes = [100, 300, 700];
const testArrays = arrSizes.map((size) => arrGenerator(size));

console.log("=========BubbleSort========");
testArrays.forEach((arr, i) => {
  measureTime(() => bubbleSort(arr));
  console.log(`Размер ${arrSizes[i]}`);
});

console.log("=========QSort=========");
testArrays.forEach((arr, i) => {
  measureTime(() => qSort(arr));
  console.log(`Размер ${arrSizes[i]}`);
});

export { bubbleSort, qSort };
