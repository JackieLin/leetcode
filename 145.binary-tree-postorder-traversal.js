/*
 * @lc app=leetcode id=145 lang=javascript
 *
 * [145] Binary Tree Postorder Traversal
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
 * @param {TreeNode} root
 * @return {number[]}
 */
 function preOrder(root, arr) {
  if (root.left) {
    preOrder(root.left, arr)
  }

  if (root.right) {
    preOrder(root.right, arr)
  }
  arr.push(root.val);
}
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
  const arr = [];
  root && preOrder(root, arr);
  return arr;
};
// @lc code=end

