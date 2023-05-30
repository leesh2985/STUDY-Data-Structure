// 각각의 노드가 최대 두개의 자식 노드를 가지는 트리 자료 구조를 순회하는 방법

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

// _inOrderTraverseNode(): 재귀로 트리를 순회하며 중위 순회 (내부 사용)
BinaryTree.prototype._insertNode = function (node, value) {
  if (node === null) {
    node = new Node(value);
  } else if (value < node.value) {
    node.left = this._insertNode(node.left, value);
  } else if (value >= node.value) {
    node.right = this._insertNode(node.right, value);
  }
  return node;
};

// inOrderTraverse(): 중위 순회하며 노드 출력

// _insertNode(): 재귀로 트리를 순회하며 노드 추가 (내부 사용)

// insert(): 노드 추가
BinaryTree.prototype.insert = function (value) {
  this.root = this._insertNode(this.root, value);
};

// _minNode(): 반복문으로 트리를 순회하며 최솟값 노드 탐색

// _maxNode(): 반복문으로 트리를 순회하며 최대값 노드 탐색

// min(): 최솟값 노드 탐색

// max(): 최댓값 노드 탐색

// _searchNode(): 재귀로 트리를 순회하며 값을 만족하는 노드 탐색

// search(): value 노드 탐색

// _findMimNode(): 반복문으로 트리를 순회하며 최솟값을 보유한 노드 탐색/반환

// _removeNode(): 재귀로 트리를 순회하며 값을 만족하는 노드를 찾고 삭제

// case 3: 2 child node

// remove(): 노트 삭제

let tree = new BinaryTree();

tree.insert("F");
tree.insert("B");
tree.insert("A");
tree.insert("D");
tree.insert("C");
tree.insert("E");
tree.insert("G");
tree.insert("I");
tree.insert("H");

console.log(tree);
