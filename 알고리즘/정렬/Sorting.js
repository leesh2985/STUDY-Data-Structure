// 배열 내 원소들을 번호순이나 사전 순서와 같이 일정한 순서대로 열거하는 알고리즘

// 거품 정렬 (Bubble Sort) 서로 인접한 두 원소를 비교하면서 정렬하는 알고리즘, 평균 시간 복잡도: 0(n**2)
let swap = function (arr, idx_1, idx_2) {
  let tmp = arr[idx_1];
  arr[idx_1] = arr[idx_2];
  arr[idx_2] = tmp;
};

// 오름차순
let bubbleSort_1 = function (arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    // 총 수행 횟수
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
};

let bubbleSort_2 = function (arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    // 총 수행 횟수
    for (let j = 0; j < arr.length - i - 1; j++) {
      // 이미 한 곳은 체크안하겠다.
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

// 내림차순
let ascending = function (x, y) {
  return x > y;
};

let descending = function (x, y) {
  return x < y;
};

let bubbleSort = function (arr, compare) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (compare(arr[j], arr[j + 1])) {
        swap(arr, j, j + 1);
      }
    }
  }
};

let init_array = [6, 5, 1, 3, 2, 4];

// 오름차순
// let array = [...init_array];
// bubbleSort_1(array);
// console.log(array);
// array = [...init_array];
// bubbleSort_2(array);
// console.log(array);
// array = [...init_array];
// bubbleSort_3(array);
// console.log(array);

// 내림차순
let array;

let sorting = [bubbleSort];
let order = [ascending, descending];
for (let i = 0; i < sorting.length; i++) {
  for (let j = 0; j < order.length; j++) {
    console.log(sorting[i].name, order[j].name);

    array = [...init_array];
    sorting[i](array, order[j]);
    console.log(array);
  }
}
