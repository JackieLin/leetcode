/*
 * @lc app=leetcode id=112 lang=javascript
 *
 * [112] Path Sum
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
function dfs(root, sum, targetSum) {
  if (!root.left && !root.right) {
    if (sum + root.val === targetSum) {
      console.log('match', root.val);
      return false
    };
    return true;
  };
  let shouldContinue = true;

  if (root.left && shouldContinue) {
    shouldContinue = dfs(root.left, sum + root.val, targetSum);
  }

  if (root.right && shouldContinue) {
    shouldContinue = dfs(root.right, sum + root.val, targetSum);
  }

  return shouldContinue;
}
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if (!root) return false;
    return !dfs(root, 0, targetSum);
};
// @lc code=end

