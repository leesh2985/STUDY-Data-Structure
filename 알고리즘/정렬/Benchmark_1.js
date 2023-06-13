// 성능 측정 bubblrSort 간 성능 튜닝에 따른 성능 측정 및 비교

let swap = function (arr, idx_1, idx_2) {
  let tmp = arr[idx_1];
  arr[idx_1] = arr[idx_2];
  arr[idx_2] = tmp;
};

let bubbleSort_1 = function (arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
};

let bubbleSort_2 = function (arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
};

let bubbleSort_3 = function (arr) {
  let swapped;
  for (let i = 0; i < arr.length - 1; i++) {
    swapped = false;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        swapped = true;
      }
    }
    if (!swapped) break;
  }
};

function benchmark(arr, callback) {
  let start = Date.now();

  callback(arr);

  return Date.now() - start;
}

let init_array = [];
let max = 30000;
for (let i = 0; i < max; i++) {
  init_array.push(Math.round(Math.random() * max));
}

let array = [...init_array];
console.log("bubbleSort_1: " + benchmark(array, bubbleSort_1) + "ms");
// console.log(array);
array = [...init_array];
console.log("bubbleSort_2: " + benchmark(array, bubbleSort_2) + "ms");
// console.log(array);
array = [...init_array];
console.log("bubbleSort_3: " + benchmark(array, bubbleSort_3) + "ms");
// console.log(array);
