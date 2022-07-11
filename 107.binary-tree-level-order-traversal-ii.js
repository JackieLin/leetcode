/*
 * @lc app=leetcode id=107 lang=javascript
 *
 * [107] Binary Tree Level Order Traversal II
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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  let queue = [{
    node: root,
    level: 0,
  }];
  if (!root) return [];
  const result = [];
  while(queue.length) {
    let {node, level} = queue.shift();
    if (node.left) {
      queue.push({
        node: node.left,
        level: level + 1,
      })  
    }
    if (node.right) {
      queue.push({
        node: node.right,
        level: level + 1,
      })  
    }

    if (!result[level]) {
      result[level] = [];
    }
    result[level].push(node.val);
  }

  return result.reverse();
};
// @lc code=end

