// 중위 순회 방법: L -> N -> R
// 1. 왼쪽 서브트리를 중위 순회한다. -> 2. 현재 노드를 방문한다. -> 3. 오른쪽 서브 트리를 중위 순회한다.

preorder(node)
if node.left != null then preorder(node.left)
print node.value
if node.right != null then preorder(node.right)