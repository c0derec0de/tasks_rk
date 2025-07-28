// запуск через node index.js

import arrGenerator from "./arrGenerator.js";

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const n = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = n;
      }
    }
  }
  return arr;
}

function QSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const median = arr[arr.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < median) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...QSort(left), median, ...QSort(right)];
}

const arrSizes = [10, 30, 70];

console.log(
  "==========================BubbleSort===================================="
);

arrSizes.forEach((size) => {
  const arr = arrGenerator(size);
  const startTime = performance.now();
  const resultBubble = bubbleSort(arr);
  const endTime = performance.now();
  console.log(resultBubble, `Size ${size}, `, `Time ${endTime - startTime}`);
});
console.log(
  "==========================QSort===================================="
);

arrSizes.forEach((size) => {
  const arr = arrGenerator(size);
  const startTime2 = performance.now();
  const resultQSort = QSort(arr);
  const endTime2 = performance.now();
  console.log(resultQSort, `Size ${size}, `, `Time ${endTime2 - startTime2}`);
});
