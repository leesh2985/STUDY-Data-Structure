// 후위 순회 방법: L -> R -> N 
// 1. 왼쪽 서브 트리를 후위 순회한다. -> 2.오른쪽 서브 트리를 후위 순회한다. -> 3. 현재 노드를 방문한다.
preorder(node)
if node.left != null then preorder(node.left)
if node.right != null then preorder(node.right)
print node.value