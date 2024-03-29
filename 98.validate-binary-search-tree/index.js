/*
 * @lc app=leetcode id=98 lang=javascript
 *
 * 二叉搜索树其实只是需要判断一个传入一个最大值和最小值就可以了，不需要每一个节点都去重新访问
 * 另外，使用中序遍历可以能够输出一个有序的数组，通过数组判断就可以了
 * 
 * [98] Validate Binary Search Tree
 *
 * https://leetcode.com/problems/validate-binary-search-tree/description/
 *
 * algorithms
 * Medium (25.23%)
 * Total Accepted:    359.9K
 * Total Submissions: 1.4M
 * Testcase Example:  '[2,1,3]'
 *
 * Given a binary tree, determine if it is a valid binary search tree (BST).
 * 
 * Assume a BST is defined as follows:
 * 
 * 
 * The left subtree of a node contains only nodes with keys less than the
 * node's key.
 * The right subtree of a node contains only nodes with keys greater than the
 * node's key.
 * Both the left and right subtrees must also be binary search trees.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input:
 * ⁠   2
 * ⁠  / \
 * ⁠ 1   3
 * Output: true
 * 
 * 
 * Example 2:
 * 
 * 
 * ⁠   5
 * ⁠  / \
 * ⁠ 1   4
 * / \
 * 3   6
 * Output: false
 * Explanation: The input is: [5,1,4,null,null,3,6]. The root node's
 * value
 * is 5 but its right child's value is 4.
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
 * @return {boolean}
 */
var isValidBST = function(root) {
    if (!root) return true;
    function isBST(node, source, isLeft) {
        var left = node.left;
        var right = node.right;

        if (isLeft === false) {
            if (left && left.val <= source.val) return false;
            if (right && right.val <= source.val) return false;    
        } else {
            if (left && left.val >= source.val) return false;
            if (right && right.val >= source.val) return false;    
        }

        var leftBST = left ? isBST(left, source, isLeft) : true;
        var rightBST = right ? isBST(right, source, isLeft) : true;

        return leftBST && rightBST;
    }

    var queue = [root];

    while(queue.length) {
        var node = queue.shift();
        var left = node.left;
        var right = node.right;

        if (left && left.val >= node.val) return false;
        if (right && right.val <= node.val) return false;

        if (left) {
            queue.push(left);
        }

        if (right) {
            queue.push(right);
        }

        var leftBST = left ? isBST(left, node, true) : true;
        var rightBST = right ? isBST(right, node, false) : true;

        if (!leftBST || !rightBST) {
            return false;
        }
    }

    return true;
};

