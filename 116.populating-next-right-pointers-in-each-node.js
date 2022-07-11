/*
 * @lc app=leetcode id=116 lang=javascript
 *
 * [116] Populating Next Right Pointers in Each Node
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if (!root) return root;
    const queue = [root];
    const level = [1];
    while(queue.length) {
      const item = queue.shift();
      const currLevel = level.shift();
      if (queue.length && level.length && currLevel === level[0]) {
        item.next = queue[0];
      }
      
      if (item.left) {
        queue.push(item.left);
        level.push(currLevel + 1);
      }

      if (item.right) {
        queue.push(item.right);
        level.push(currLevel + 1);
      }
    }

    return root;
};
// @lc code=end

