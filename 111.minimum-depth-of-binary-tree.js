/*
 * @lc app=leetcode id=111 lang=javascript
 *
 * [111] Minimum Depth of Binary Tree
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
function dfs(tree, depth) {
  if (!tree.left && !tree.right) return depth;
  let left = tree.left ? dfs(tree.left, depth + 1) : Number.MAX_SAFE_INTEGER;
  let right = tree.right ? dfs(tree.right, depth + 1) : Number.MAX_SAFE_INTEGER;
  return Math.min(left, right);
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
  if (!root) return 0;
  return dfs(root, 1);
};
// @lc code=end

