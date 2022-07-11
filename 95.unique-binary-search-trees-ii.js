/*
 * @lc app=leetcode id=95 lang=javascript
 *
 * [95] Unique Binary Search Trees II
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
const trees = [];
function genTrees(min, max) {
  for(let i = min; i <= max; i++) {
    const node = new TreeNode(i)
    let leftTrees = genTrees(i - 1);
    let rightTrees = genTrees(i + 1);

    for(let j = 0; j < leftTrees.length; j++) {
      
    }
  }
}

/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
  for(let i = 1; i <= n; i++) {
    let leftTrees = genTrees(i - 1);
    let rightTrees = genTrees();
  }
  return trees;
};
// @lc code=end

