/*
 * @lc app=leetcode id=105 lang=javascript
 *
 * [105] Construct Binary Tree from Preorder and Inorder Traversal
 *
 * https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/
 *
 * algorithms
 * Medium (40.02%)
 * Total Accepted:    208.4K
 * Total Submissions: 520.8K
 * Testcase Example:  '[3,9,20,15,7]\n[9,3,15,20,7]'
 *
 * Given preorder and inorder traversal of a tree, construct the binary tree.
 * 
 * Note:
 * You may assume that duplicates do not exist in the tree.
 * 
 * For example, given
 * 
 * 
 * preorder = [3,9,20,15,7]
 * inorder = [9,3,15,20,7]
 * 
 * Return the following binary tree:
 * 
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if (!preorder.length && !inorder.length) return null;
    
    function build(pStart, pEnd, iStart, iEnd) {
        var node = null;
        for(var i = iStart; i < iEnd; i++) {
            if (inorder[i] === preorder[pStart]) {
                node = new TreeNode(preorder[pStart])
                if (pStart + 1 < pEnd) {
                    node.left = build(pStart + 1, pStart + 1 + (i - iStart),iStart, i);
                }
                if (pStart + 1 < pEnd && i + 1 < iEnd) {
                    node.right = build(pStart + 1 + (i - iStart), pEnd, i + 1, iEnd);
                }
            }
        }

        return node;
    }

    return build(0, preorder.length, 0, inorder.length);
};

