/*
 * @lc app=leetcode id=257 lang=javascript
 *
 * [257] Binary Tree Paths
 *
 * https://leetcode.com/problems/binary-tree-paths/description/
 *
 * algorithms
 * Easy (45.24%)
 * Total Accepted:    214.2K
 * Total Submissions: 473.4K
 * Testcase Example:  '[1,2,3,null,5]'
 *
 * Given a binary tree, return all root-to-leaf paths.
 * 
 * Note: A leaf is a node with no children.
 * 
 * Example:
 * 
 * 
 * Input:
 * 
 * ⁠  1
 * ⁠/   \
 * 2     3
 * ⁠\
 * ⁠ 5
 * 
 * Output: ["1->2->5", "1->3"]
 * 
 * Explanation: All root-to-leaf paths are: 1->2->5, 1->3
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    if (!root) return [];
    function dfs(node) {
        var result = []
        if (!node.left && !node.right) {
            result.push(node.val + '');
        }

        if (node.left) {
            var left = dfs(node.left);
            for(var i = 0; i < left.length; i++) {
                result.push(node.val + '->' + left[i]);
            }
        }

        if (node.right) {
            var right = dfs(node.right);
            for(var i = 0; i < right.length; i++) {
                result.push(node.val + '->' + right[i]);
            }
        }

        return result;
    }

    return dfs(root);
};

