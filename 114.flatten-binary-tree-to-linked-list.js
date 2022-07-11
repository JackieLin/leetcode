/*
 * @lc app=leetcode id=114 lang=javascript
 *
 * [114] Flatten Binary Tree to Linked List
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
let arr = [];
function preOrder(root) {
  arr.push(root.val)
  if (root.left) preOrder(root.left);
  if (root.right) preOrder(root.right);
}
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  if (!root) return;
  arr = []
  preOrder(root);
  root.left = null;
  let cursor = root;
  for(let i = 1; i < arr.length; i++) {
    cursor.right = new TreeNode(arr[i]);
    cursor = cursor.right;
  }
};
// @lc code=end

