/*
 * @lc app=leetcode id=105 lang=javascript
 *
 * [105] Construct Binary Tree from Preorder and Inorder Traversal
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  if (!preorder.length || !inorder.length) return null;
  let root = preorder[0];
  let index = inorder.indexOf(root);
  let inOrderLeft = inorder.slice(0, index);
  let inOrderRight = inorder.slice(index + 1);
  let preorderLeft = preorder.slice(1, index + 1);
  let preorderRight = preorder.slice(index + 1);
  let node = new TreeNode(root);
  node.left = buildTree(preorderLeft, inOrderLeft);
  node.right = buildTree(preorderRight, inOrderRight);
  return node;
};
// @lc code=end

