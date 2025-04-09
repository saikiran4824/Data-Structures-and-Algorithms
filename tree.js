// Tree Traversals Overview
// There are 3 Depth-First Traversals for binary trees:

// Pre-order: Root ➝ Left ➝ Right

// In-order: Left ➝ Root ➝ Right

// Post-order: Left ➝ Right ➝ Root

// 🧠 Example Tree Structure
// We'll use this binary tree for our examples:

// mathematica
// Copy
// Edit
//        A
//       / \
//      B   C
//     / \   \
//    D   E   F
// Root: A

// Left Subtree of A: B → D, E

// Right Subtree of A: C → F

// 🔁 1. Pre-order Traversal (Root → Left → Right)
// Steps:
// Visit the root node

// Traverse the left subtree

// Traverse the right subtree

// Output:
// A B D E C F

// Code (JavaScript):
// js
// Copy
// Edit
function preorder(node) {
  if (!node) return;
  console.log(node.value);
  preorder(node.left);
  preorder(node.right);
}
// 🔁 2. In-order Traversal (Left → Root → Right)
// Steps:
// Traverse the left subtree

// Visit the root node

// Traverse the right subtree

// Output:
// D B E A C F

// Code (JavaScript):
// js
// Copy
// Edit
function inorder(node) {
  if (!node) return;
  inorder(node.left);
  console.log(node.value);
  inorder(node.right);
 }
// 🔁 3. Post-order Traversal (Left → Right → Root)
// Steps:
// Traverse the left subtree

// Traverse the right subtree

// Visit the root node

// Output:
// D E B F C A

// Code (JavaScript):
// js
// Copy
// Edit
function postorder(node) {
  if (!node) return;
  postorder(node.left);
  postorder(node.right);
  console.log(node.value);
 }
// 🌿 Tree Node Structure (JavaScript)
// Let’s set up the tree from the example:

// js
// Copy
// Edit
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Building the tree
const root = new TreeNode('A');
root.left = new TreeNode('B');
root.right = new TreeNode('C');
root.left.left = new TreeNode('D');
root.left.right = new TreeNode('E');
root.right.right = new TreeNode('F');

// Test traversals
console.log("Preorder:");
preorder(root); // A B D E C F

console.log("Inorder:");
inorder(root); // D B E A C F

console.log("Postorder:");
postorder(root); // D E B F C A
// ✅ Use Cases
// Traversal	Use Case
// Pre-order	Copying a tree, Prefix expression
// In-order	Binary Search Trees (returns sorted order)
// Post-order	Deleting a tree, Postfix expression
// 🌱 Common Tree Node Structure
// js
// Copy
// // Edit
// class TreeNode {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }
// ✅ 1. Inorder Traversal
// js
// Copy
// Edit
function inorderTraversal(root) {
  const result = [];
  function traverse(node) {
    if (!node) return;
    traverse(node.left);
    result.push(node.val);
    traverse(node.right);
  }
  traverse(root);
  return result;
}

// ✅ 2. Preorder Traversal
// js
// Copy
// Edit
function preorderTraversal(root) {
  const result = [];
  function traverse(node) {
    if (!node) return;
    result.push(node.val);
    traverse(node.left);
    traverse(node.right);
  }
  traverse(root);
  return result;
 }
// ✅ 3. Postorder Traversal
// js
// Copy
// Edit
function postorderTraversal(root) {
  const result = [];
  function traverse(node) {
    if (!node) return;
    traverse(node.left);
    traverse(node.right);
    result.push(node.val);
  }
  traverse(root);
  return result;
}
// ✅ 4. Maximum Depth of Binary Tree
// js
// Copy
// Edit
function maxDepth(root) {
  if (!root) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}
// ✅ 5. Check if Two Trees are Identical
// js
// Copy
// Edit
function isSameTree(p, q) {
  if (!p && !q) return true;
  if (!p || !q || p.val !== q.val) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}
// ✅ 6. Symmetric Tree
// js
// Copy
// Edit
function isSymmetric(root) {
  if (!root) return true;
  function isMirror(t1, t2) {
    if (!t1 && !t2) return true;
    if (!t1 || !t2 || t1.val !== t2.val) return false;
    return isMirror(t1.left, t2.right) && isMirror(t1.right, t2.left);
  }
  return isMirror(root.left, root.right);
}
// ✅ 7. Diameter of Binary Tree
// js
// Copy
// Edit
function diameterOfBinaryTree(root) {
  let max = 0;
  function depth(node) {
    if (!node) return 0;
    const left = depth(node.left);
    const right = depth(node.right);
    max = Math.max(max, left + right);
    return 1 + Math.max(left, right);
  }
  depth(root);
  return max;
}
// ✅ 8. Lowest Common Ancestor
// js
// Copy
// Edit
function lowestCommonAncestor(root, p, q) {
  if (!root || root === p || root === q) return root;
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);
  return left && right ? root : left || right;
}
// ✅ 9. Path Sum
// js
// Copy
// Edit
function hasPathSum(root, targetSum) {
  if (!root) return false;
  if (!root.left && !root.right) return root.val === targetSum;
  return hasPathSum(root.left, targetSum - root.val) ||
         hasPathSum(root.right, targetSum - root.val);
}
// ✅ 10. Serialize and Deserialize Binary Tree
// js
// Copy
// Edit
function serialize(root) {
  if (!root) return 'null';
  return `${root.val},${serialize(root.left)},${serialize(root.right)}`;
}

function deserialize(data) {
  const nodes = data.split(',');
  function buildTree() {
    const val = nodes.shift();
    if (val === 'null') return null;
    const node = new TreeNode(parseInt(val));
    node.left = buildTree();
    node.right = buildTree();
    return node;
  }
  return buildTree();
}
// ✅ 11. Construct Binary Tree from Preorder and Inorder
// js
// Copy
// Edit
function buildTree(preorder, inorder) {
  if (!preorder.length || !inorder.length) return null;

  const rootVal = preorder.shift();
  const root = new TreeNode(rootVal);
  const mid = inorder.indexOf(rootVal);

  root.left = buildTree(preorder, inorder.slice(0, mid));
  root.right = buildTree(preorder, inorder.slice(mid + 1));

  return root;
}
// ✅ 12. Zigzag Level Order Traversal
// js
// Copy
// Edit
function zigzagLevelOrder(root) {
  if (!root) return [];
  const result = [];
  const queue = [root];
  let leftToRight = true;

  while (queue.length > 0) {
    const levelSize = queue.length;
    const level = Array(levelSize);

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      const index = leftToRight ? i : levelSize - 1 - i;
      level[index] = node.val;

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    result.push(level);
    leftToRight = !leftToRight;
  }

  return result;
}