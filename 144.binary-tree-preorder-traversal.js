/*
 * @lc app=leetcode id=144 lang=javascript
 *
 * [144] Binary Tree Preorder Traversal
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
function preOrder(root, arr) {
  arr.push(root.val);
  if (root.left) {
    preOrder(root.left, arr)
  }

  if (root.right) {
    preOrder(root.right, arr)
  }
}
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  const arr = [];
  root && preOrder(root, arr);
  return arr;
};
// @lc code=end

