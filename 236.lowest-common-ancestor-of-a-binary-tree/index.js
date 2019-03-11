/*
 * @lc app=leetcode id=236 lang=javascript
 *
 * [236] Lowest Common Ancestor of a Binary Tree
 *
 * https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/description/
 *
 * algorithms
 * Medium (35.62%)
 * Total Accepted:    250.3K
 * Total Submissions: 702.6K
 * Testcase Example:  '[3,5,1,6,2,0,8,null,null,7,4]\n5\n1'
 *
 * Given a binary tree, find the lowest common ancestor (LCA) of two given
 * nodes in the tree.
 * 
 * According to the definition of LCA on Wikipedia: “The lowest common ancestor
 * is defined between two nodes p and q as the lowest node in T that has both p
 * and q as descendants (where we allow a node to be a descendant of itself).”
 * 
 * Given the following binary tree:  root = [3,5,1,6,2,0,8,null,null,7,4]
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
 * Output: 3
 * Explanation: The LCA of nodes 5 and 1 is 3.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
 * Output: 5
 * Explanation: The LCA of nodes 5 and 4 is 5, since a node can be a descendant
 * of itself according to the LCA definition.
 * 
 * 
 * 
 * 
 * Note:
 * 
 * 
 * All of the nodes' values will be unique.
 * p and q are different and both values will exist in the binary tree.
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if (!root) return root;
    function findNodes(head) {
        var isLeft, isRight, isNode;
        if (head === p && head === q) return head;
        if (head === p) isNode = 1;
        if (head === q) isNode = 2;

        if (head.left) {
            isLeft = findNodes(head.left);
        }

        if (head.right) {
            isRight = findNodes(head.right);
        }

        if (isLeft instanceof TreeNode) {
            return isLeft;
        }

        if (isRight instanceof TreeNode) {
            return isRight;
        }

        if (isNode && !isLeft) {
            isLeft = isNode;
        }

        if (isNode && !isRight) {
            isRight = isNode;
        }

        // finded
        if (isLeft === 1 && isRight === 2 || isLeft === 2 && isRight === 1) {
            return head;
        }

        if (isLeft) return isLeft;
        if (isRight) return isRight;
    }

    return findNodes(root);
};

