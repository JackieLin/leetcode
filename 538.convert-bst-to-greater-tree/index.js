/*
 * @lc app=leetcode id=538 lang=javascript
 *
 * [538] Convert BST to Greater Tree
 *
 * 用后序遍历就可以很好的解决这个问题
 * 
 * https://leetcode.com/problems/convert-bst-to-greater-tree/description/
 *
 * algorithms
 * Easy (50.07%)
 * Total Accepted:    70.4K
 * Total Submissions: 140.7K
 * Testcase Example:  '[5,2,13]'
 *
 * Given a Binary Search Tree (BST), convert it to a Greater Tree such that
 * every key of the original BST is changed to the original key plus sum of all
 * keys greater than the original key in BST.
 * 
 * 
 * Example:
 * 
 * Input: The root of a Binary Search Tree like this:
 * ⁠             5
 * ⁠           /   \
 * ⁠          2     13
 * 
 * Output: The root of a Greater Tree like this:
 * ⁠            18
 * ⁠           /   \
 * ⁠         20     13
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
 * @return {TreeNode}
 */
var convertBST = function(root) {
    var seq = [];
    if (!root) return root;
    
    function dfs(node) {
        if (node.left) {
            dfs(node.left);
        }

        seq.push(node.val);
        
        if (node.right) {
            dfs(node.right);
        }
    } 

    dfs(root);

    var index = 0;

    function dfsVal(node) {
        if (node.left) {
            dfsVal(node.left);
        }

        var sum = 0;
        for(var i = index; i < seq.length; i++) {
            sum += seq[i];
        }

        node.val = sum;

        index++;

        if (node.right) {
            dfsVal(node.right);
        }
    }

    dfsVal(root)

    return root;
};