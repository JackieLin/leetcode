/*
 * @lc app=leetcode id=129 lang=javascript
 *
 * [129] Sum Root to Leaf Numbers
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
function dfs(root, prevVal, sum) {
  if (!root.left && !root.right) {
    return sum + parseInt(`${prevVal}${root.val}`);
  }

  let left = 0; let right = 0;
  if (root.left) {
    left = dfs(root.left, `${prevVal}${root.val}`, sum);
  }

  if (root.right) {
    right = dfs(root.right, `${prevVal}${root.val}`, sum);
  }

  return left + right;
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {
    return dfs(root, '', 0);
};
// @lc code=end

