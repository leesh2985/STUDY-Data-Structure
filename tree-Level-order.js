// 층별 순회 방법: 낮은 Level부터 순차적으로 순회
// 1. root 노드 방문 -> 2. Level 증가 -> 3. 왼쪽에서 오른쪽 순으로 방문

levelorder(root)
queueMicrotask.enqueue(root)
while not q.empty do
node := q.dequeue()
print node.value
if node.left != null q.enqueue preorder(node.left)
if node.right != null q.enqueue preorder(node.right)