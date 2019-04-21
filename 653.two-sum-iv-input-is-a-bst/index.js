/*
 * @lc app=leetcode id=653 lang=javascript
 *
 * [653] Two Sum IV - Input is a BST
 *
 * https://leetcode.com/problems/two-sum-iv-input-is-a-bst/description/
 *
 * algorithms
 * Easy (52.23%)
 * Total Accepted:    83K
 * Total Submissions: 158.9K
 * Testcase Example:  '[5,3,6,2,4,null,7]\n9'
 *
 * Given a Binary Search Tree and a target number, return true if there exist
 * two elements in the BST such that their sum is equal to the given target.
 * 
 * Example 1:
 * 
 * 
 * Input: 
 * ⁠   5
 * ⁠  / \
 * ⁠ 3   6
 * ⁠/ \   \
 * 2   4   7
 * 
 * Target = 9
 * 
 * Output: True
 * 
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: 
 * ⁠   5
 * ⁠  / \
 * ⁠ 3   6
 * ⁠/ \   \
 * 2   4   7
 * 
 * Target = 28
 * 
 * Output: False
 * 
 * 
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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    var result = false;
    var map = {}

    if (!root) return false;

    function dfs(node) {
        map[node.val] = true;
        if (node.left) {
            dfs(node.left);
        }

        if (node.right) {
            dfs(node.right)
        }
    }

    dfs(root);

    // console.log(map)
    for(var key in map) {
        var num1 = Number(key);
        map[key] = false;
        if (map[k - num1]) {
            return true;
        }
        map[key] = true;
    }

    return false;
};

