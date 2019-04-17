/*
 * @lc app=leetcode id=543 lang=javascript
 *
 * [543] Diameter of Binary Tree
 *
 * https://leetcode.com/problems/diameter-of-binary-tree/description/
 *
 * algorithms
 * Easy (46.44%)
 * Total Accepted:    122.5K
 * Total Submissions: 263.8K
 * Testcase Example:  '[1,2,3,4,5]'
 *
 * 
 * Given a binary tree, you need to compute the length of the diameter of the
 * tree. The diameter of a binary tree is the length of the longest path
 * between any two nodes in a tree. This path may or may not pass through the
 * root.
 * 
 * 
 * 
 * Example:
 * Given a binary tree 
 * 
 * ⁠         1
 * ⁠        / \
 * ⁠       2   3
 * ⁠      / \     
 * ⁠     4   5    
 * 
 * 
 * 
 * Return 3, which is the length of the path [4,2,1,3] or [5,2,1,3].
 * 
 * 
 * Note:
 * The length of path between two nodes is represented by the number of edges
 * between them.
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
var diameterOfBinaryTree = function(root) {
    if (!root) return 0;
    var max = 0;

    function dfs(node, level) {
        var leftLevel = 0;
        var rightLevel = 0;

        if (!node.left && !node.right) return level;

        if (node.left) {
            leftLevel = dfs(node.left, level + 1)
        }

        if (node.right) {
            rightLevel = dfs(node.right, level + 1)
        }

        var maxLeval = Math.max(leftLevel, rightLevel);

        if (leftLevel > level) {
            leftLevel -= level;
        }

        if (rightLevel > level) {
            rightLevel -= level;
        }
        
        if (max < leftLevel + rightLevel) max = leftLevel + rightLevel;

        return maxLeval
    }

    dfs(root, 0);

    return max;
};

