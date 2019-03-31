/*
 * @lc app=leetcode id=103 lang=javascript
 *
 * [103] Binary Tree Zigzag Level Order Traversal
 *
 * https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/description/
 *
 * algorithms
 * Medium (40.90%)
 * Total Accepted:    203.7K
 * Total Submissions: 497.9K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * Given a binary tree, return the zigzag level order traversal of its nodes'
 * values. (ie, from left to right, then right to left for the next level and
 * alternate between).
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
 * return its zigzag level order traversal as:
 * 
 * [
 * ⁠ [3],
 * ⁠ [20,9],
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
var zigzagLevelOrder = function(root) {
    var queue = [root];
    var result = [];
    var order = true;
    
    if (!root) return result

    while(queue.length) {
        var child = [];
        var item = []
        var start = order ? 0 : queue.length - 1;

        for(var i = 0; i < queue.length; i++) {
            if (queue[i]) {
                item[start] = queue[i].val;
                start = order ? start + 1 : start - 1;
            }
            if (queue[i] && queue[i].left) child.push(queue[i].left)
            if (queue[i] && queue[i].right) child.push(queue[i].right)
        }

        result.push(item);
        order = !order;
        queue = child;
    }

    return result
};

