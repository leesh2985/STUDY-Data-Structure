// 전위 순회 방법: N -> L -> R
// 1. 노드를 방문한다. -> 2. 왼쪽 서브 트리를 전위순회한다. -> 3. 오른쪽 서브 트리를 전위 순회한다.

preorder(node)
print node.value
if node.left != null then preorder(node.left)
if node.right != null then preorder(node.right)