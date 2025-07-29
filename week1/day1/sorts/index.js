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

function qSort(arr) {
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

  return [...qSort(left), median, ...qSort(right)];
}

function measureTime(sortFunc, arr) {
  const start = performance.now();
  sortFunc([...arr]);
  return performance.now() - start;
}

const arrSizes = [10, 30, 70];
const testArrays = arrSizes.map((size) => arrGenerator(size));

console.log("=========BubbleSort========");
testArrays.forEach((arr, i) => {
  const time = measureTime(bubbleSort, arr);
  console.log(`Size ${arrSizes[i]}, Time ${time.toFixed(3)}`);
});

console.log("=========QSort=========");
testArrays.forEach((arr, i) => {
  const time = measureTime(qSort, arr);
  console.log(`Size ${arrSizes[i]}, Time ${time.toFixed(3)}`);
});
