// Queue(): 생성자 함수로 초기 데이터 설정
function Queue(array) {
  this.array = array ? array : [];
}

// getBuffer(): 객체 내 데이터 셋 반환
Queue.prototype.getBuffer = function () {
  return this.array.slice();
};

// isEmpty(): 객체 내 데이터 O/X
Queue.prototype.isEmpty = function () {
  return this.array.length === 0;
};

// enqueue(): 데이터 추가
Queue.prototype.enqueue = function (element) {
  return this.array.push(element);
};

// dequeue(): 데이터 삭제
Queue.prototype.dequeue = function () {
  return this.array.shift();
};

// front(): 가장 첫 데이터 반환
Queue.prototype.front = function () {
  return this.array.length == 0 ? undefined : this.array[0];
};

// size(): 큐 내 데이터 개수 확인
Queue.prototype.size = function () {
  this.array = [];
};

// clear(): 큐 초기화
Queue.prototype.clear = function () {
  this.array = [];
};

// let queue = new Queue([1, 2, 3]);
// console.log(queue);

// let data = queue.getBuffer();
// console.log(data);
// console.log(data === queue.array);

// console.log(queue.isEmpty());

// console.log(Object.getOwnPropertyDescriptors(Queue.prototype));

let queue = new Queue([1, 2]);
console.log(queue);

queue.enqueue(3);
queue.enqueue(4);
console.log(queue);

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue);

// let queue = new Queue([1, 2, 3, 4]);

// queue.dequeue();
// console.log(queue.front());
// console.log(queue);
