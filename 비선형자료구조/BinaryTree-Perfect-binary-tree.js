// 각각의 노드가 최대 두개의 자식 노드를 가지는 트리 자료 구조를 순회하는 방법

/* Queue 객체 추가 */
function Queue(array) {
  this.array = array ? array : [];
}

Queue.prototype.isEmpty = function () {
  return this.array.length === 0;
};

Queue.prototype.enqueue = function (element) {
  return this.array.push(element);
};

Queue.prototype.dequeue = function () {
  return this.array.shift();
};

// Node(): value와 left, right node 저장을 위한 생성자
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

// BinarySearchTree(): 시작 노드인 root를 저장하기 위한 생성자
function BinaryTree() {
  this.root = null;
}

// _insertNode(): 재귀로 트리를 순회하며 노드 추가 (내부 사용)
BinaryTree.prototype._insertNode = function (node, value) {
  // 현재값과 비교
  // 작으면 왼쪽, 크면 오른쪽
  // 왼쪽, 오른쪽에 left, right pointer 비어있다면 추가할 노드를 연결
  // 비어 있지 않다면 하위노드에서 다시 비교하도록 넘겨준다.

  if (node === null) {
    // 왼쪽, 오른쪽에 left, right pointer 비어있다면 추가할 노드를 연결
    node = new Node(value); // 현재값과 비교
  } else if (value < node.value) {
    // 작으면 왼쪽
    node.left = this._insertNode(node.left, value);
  } else if (value >= node.value) {
    // 크면 오른쪽
    node.right = this._insertNode(node.right, value);
  }
  return node; // 비어 있지 않다면 하위노드에서 다시 비교하도록 넘겨준다.
};

// insert(): 노드 추가
BinaryTree.prototype.insert = function (value) {
  this.root = this._insertNode(this.root, value);
};

// _preOrderTraverseNode(): 재귀로 트리를 순회하며 전위 순회 (내부 사용)
BinaryTree.prototype._preOrderTraverseNode = function (node, callback) {
  if (node === null) {
    return;
  }

  callback(node);
  this._preOrderTraverseNode(node.left, callback);
  this._preOrderTraverseNode(node.right, callback);
};

// preOrderTraverse(): 전위 순회하며 노드 출력
BinaryTree.prototype.preOrderTraverse = function (callback) {
  this._preOrderTraverseNode(this.root, callback);
};

// _inOrderTraverseNode(): 재귀로 트리를 순회하며 중위 순회 (내부 사용)
BinaryTree.prototype._inOrderTraverseNode = function (node, callback) {
  if (node === null) {
    return;
  }

  this._inOrderTraverseNode(node.left, callback);
  callback(node);
  this._inOrderTraverseNode(node.right, callback);
};

// inOrderTraverse(): 중위 순회하며 노드 출력
BinaryTree.prototype.inOrderTraverse = function (callback) {
  this._inOrderTraverseNode(this.root, callback);
};

// _postOrderTraverseNode(): 재귀로 트리를 순회하며 후위 순회 (내부 사용)
BinaryTree.prototype._postOrderTraverseNode = function (node, callback) {
  if (node === null) {
    return;
  }

  this._postOrderTraverseNode(node.left, callback);
  this._postOrderTraverseNode(node.right, callback);
  callback(node);
};

// postOrderTraverse(): 후위 순회하며 노드 출력
BinaryTree.prototype.postOrderTraverse = function (callback) {
  this._postOrderTraverseNode(this.root, callback);
};

// levelOrderTraverse(): 층별 순회하며 노드 출력
BinaryTree.prototype.levelOrderTraverse = function (callback) {
  let q = new Queue();
  let node;

  q.enqueue(this.root);
  while (!q.isEmpty()) {
    node = q.dequeue();
    callback(node);
    if (node.left !== null) q.enqueue(node.left);
    if (node.right !== null) q.enqueue(node.right);
  }
};

let tree = new BinaryTree();

tree.insert("F");
/* 
this.root = null -> F 
*/

tree.insert("B");
/* 
this.root = F 노드가 null아닌 F로 F와 insert'B'를 비교 후 왼쪽으로 감 -> 
F.left = B
*/

tree.insert("A");
/* 
this.root = F  
F.left = B
B.left = A
*/

tree.insert("D");
/* 
this.root = F  
F.left = B
B.left = A
B.right = D
*/

tree.insert("C");
tree.insert("E");
tree.insert("G");
tree.insert("I");
tree.insert("H");

console.log(tree);

function printNode(node) {
  process.stdout.write(`${node.value} -> `);
}

console.log("********** Pre-Order **********");
tree.preOrderTraverse(printNode);
console.log("end");

console.log("********** In-Order **********");
tree.inOrderTraverse(printNode);
console.log("end");

console.log("********** Post-Order **********");
tree.postOrderTraverse(printNode);
console.log("end");

console.log("********** Level-Order **********");
tree.levelOrderTraverse(printNode);
console.log("end");
