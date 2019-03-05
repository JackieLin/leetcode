/*
 * @lc app=leetcode id=102 lang=javascript
 *
 * 采用深度遍历能知道具体是多少层，只要每次都 +1，然后回退的时候 - 1 就好了
 * [102] Binary Tree Level Order Traversal
 *
 * https://leetcode.com/problems/binary-tree-level-order-traversal/description/
 *
 * algorithms
 * Medium (47.04%)
 * Total Accepted:    338.2K
 * Total Submissions: 718.7K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * Given a binary tree, return the level order traversal of its nodes' values.
 * (ie, from left to right, level by level).
 * 
 * 
 * For example:
 * Given binary tree [3,9,20,null,null,15,7],
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 
 * 
 * return its level order traversal as:
 * 
 * [
 * ⁠ [3],
 * ⁠ [9,20],
 * ⁠ [15,7]
 * ]
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    var queue = [root];
    var result = [];
    var level = -1;

    if (!root) return [];

    while(queue.length) {
        level++;
        var item = [];
        root.level = level;
        
        while(queue.length) {
            if (queue[0].level > level) break;
            
            var node = queue.shift();
            var left = node.left;
            var right = node.right;

            item.push(node.val);
            if (left) {
                left.level = level + 1;
                queue.push(left)
            }

            if (right) {
                right.level = level + 1;                
                queue.push(right)
            }
        } 

        result.push(item);
    }

    return result;
};

