/*
 * @lc app=leetcode id=508 lang=javascript
 *
 * [508] Most Frequent Subtree Sum
 *
 * https://leetcode.com/problems/most-frequent-subtree-sum/description/
 *
 * algorithms
 * Medium (53.90%)
 * Total Accepted:    45.1K
 * Total Submissions: 83.7K
 * Testcase Example:  '[5,2,-3]'
 *
 * 
 * Given the root of a tree, you are asked to find the most frequent subtree
 * sum. The subtree sum of a node is defined as the sum of all the node values
 * formed by the subtree rooted at that node (including the node itself). So
 * what is the most frequent subtree sum value? If there is a tie, return all
 * the values with the highest frequency in any order.
 * 
 * 
 * Examples 1
 * Input:
 * 
 * ⁠ 5
 * ⁠/  \
 * 2   -3
 * 
 * return [2, -3, 4], since all the values happen only once, return all of them
 * in any order.
 * 
 * 
 * Examples 2
 * Input:
 * 
 * ⁠ 5
 * ⁠/  \
 * 2   -5
 * 
 * return [2], since 2 happens twice, however -5 only occur once.
 * 
 * 
 * Note:
 * You may assume the sum of values in any subtree is in the range of 32-bit
 * signed integer.
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
var findFrequentTreeSum = function(root) {
    var map = {};
    var max = 0;
    var values = [];

    if (!root) return values;

    function dfs(node) {
        var sum = node.val;

        if (node.left) {
            sum += dfs(node.left);
        }

        if (node.right) {
            sum += dfs(node.right);
        }

        if (!map[sum]) {
            map[sum] = 0;
        }

        map[sum] += 1;

        return sum;
    }

    dfs(root);

    Object.keys(map).forEach(function(v) {
        if (map[v] > max) {
            values = [Number(v)];
            max = map[v];
        } else if (map[v] === max) {
            values.push(Number(v));
        }
    })

    return values;
};

