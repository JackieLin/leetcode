/*
 * @lc app=leetcode id=124 lang=javascript
 *
 * [124] Binary Tree Maximum Path Sum
 *
 * 贪心算法加 dfs。两个分支只选择一个最大的，整体肯定是最大的
 * 
 * https://leetcode.com/problems/binary-tree-maximum-path-sum/description/
 *
 * algorithms
 * Hard (29.48%)
 * Total Accepted:    178.2K
 * Total Submissions: 604K
 * Testcase Example:  '[1,2,3]'
 *
 * Given a non-empty binary tree, find the maximum path sum.
 * 
 * For this problem, a path is defined as any sequence of nodes from some
 * starting node to any node in the tree along the parent-child connections.
 * The path must contain at least one node and does not need to go through the
 * root.
 * 
 * Example 1:
 * 
 * 
 * Input: [1,2,3]
 * 
 * ⁠      1
 * ⁠     / \
 * ⁠    2   3
 * 
 * Output: 6
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [-10,9,20,null,null,15,7]
 * 
 * -10
 * / \
 * 9  20
 * /  \
 * 15   7
 * 
 * Output: 42
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
 * @return {number}
 */
var maxPathSum = function(root) {
    var max = Number.MIN_SAFE_INTEGER;
    function dfs(node) {
        var left = node.left ? dfs(node.left) : 0;
        var right = node.right ? dfs(node.right) : 0;

        var sum = node.val + (left > 0 ? left : 0) + (right > 0 ? right : 0);

        if (max < sum) {
            max = sum;
        }

        return node.val + Math.max(Math.max(left, right), 0);
    }

    dfs(root);

    return max;
};

