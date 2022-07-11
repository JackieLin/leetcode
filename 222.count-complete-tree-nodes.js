/*
 * @lc app=leetcode id=222 lang=javascript
 *
 * [222] Count Complete Tree Nodes
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
let count = 0
function preorder(root) {
  count++;
  if (root.left) {
    preorder(root.left);
  }
  if (root.right) {
    preorder(root.right);
  }
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function(root) {
  if (!root) return 0;
  count = 0;
  preorder(root);

  return count;
};
// @lc code=end

