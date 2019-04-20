/*
 * @lc app=leetcode id=637 lang=javascript
 *
 * [637] Average of Levels in Binary Tree
 *
 * https://leetcode.com/problems/average-of-levels-in-binary-tree/description/
 *
 * algorithms
 * Easy (58.35%)
 * Total Accepted:    75.6K
 * Total Submissions: 129.5K
 * Testcase Example:  '[3,9,20,15,7]'
 *
 * Given a non-empty binary tree, return the average value of the nodes on each
 * level in the form of an array.
 * 
 * Example 1:
 * 
 * Input:
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * Output: [3, 14.5, 11]
 * Explanation:
 * The average value of nodes on level 0 is 3,  on level 1 is 14.5, and on
 * level 2 is 11. Hence return [3, 14.5, 11].
 * 
 * 
 * 
 * Note:
 * 
 * The range of node's value is in the range of 32-bit signed integer.
 * 
 * 
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    var queue = [{
        level: 0,
        node: root
    }];
    var result = []
    if (!root) return [];

    var level = 0;
    var sum = 0;
    var count = 0;

    while(queue.length) {
        if (queue[0].level !== level && count) {
            result[level] = sum / count;
            level++;
            sum = 0;
            count = 0;
        } else {
            var item = queue.shift();
            sum += item.node.val;
            count++;

            if (item.node.left) {
                queue.push({
                    level: level + 1,
                    node: item.node.left
                })    
            }

            if (item.node.right) {
                queue.push({
                    level: level + 1,
                    node: item.node.right
                })    
            }
        }
    }

    if (count) {
        result[level] = sum / count;
    }

    return result;
};

