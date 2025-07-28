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

const arrSizes = [10, 30, 70];

arrSizes.forEach((size) => {
  const arr = arrGenerator(size);
  const startTime = performance.now();
  const result = bubbleSort(arr);
  const endTime = performance.now();
  console.log(result, `Size ${size}, `, `Time ${endTime - startTime}`);
});
