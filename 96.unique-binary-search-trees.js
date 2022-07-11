/*
 * @lc app=leetcode id=96 lang=javascript
 *
 * [96] Unique Binary Search Trees
 */

// @lc code=start
function treeNode(start, end) {
  let result = 0;
  let left = 1;
  let right = 1;
  for(let i = start; i <= end; i++) {
    if (i > start) {
      left = treeNode(start, i - 1);
    }
    if (i < end) {
      right = treeNode(i + 1, end);
    }
    result += left * right;
    left = 1;
    right = 1;
  }

  return result;
}

/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
  return treeNode(1, n);
};
// @lc code=end

