/*
 * @lc app=leetcode id=449 lang=javascript
 *
 * [449] Serialize and Deserialize BST
 *
 * https://leetcode.com/problems/serialize-and-deserialize-bst/description/
 *
 * algorithms
 * Medium (45.96%)
 * Total Accepted:    50.8K
 * Total Submissions: 110.6K
 * Testcase Example:  '[2,1,3]'
 *
 * Serialization is the process of converting a data structure or object into a
 * sequence of bits so that it can be stored in a file or memory buffer, or
 * transmitted across a network connection link to be reconstructed later in
 * the same or another computer environment.
 * 
 * Design an algorithm to serialize and deserialize a binary search tree. There
 * is no restriction on how your serialization/deserialization algorithm should
 * work. You just need to ensure that a binary search tree can be serialized to
 * a string and this string can be deserialized to the original tree
 * structure.
 * 
 * The encoded string should be as compact as possible.
 * 
 * Note: Do not use class member/global/static variables to store states. Your
 * serialize and deserialize algorithms should be stateless.
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
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    var string = [];
    if (!root) return '';
    function dfs(node) {
        var item = node.val;
        if (node.left || node.right) {
            item += '-' + (node.left ? node.left.val : '') + '-' + (node.right ? node.right.val : '');
            string.push(item);
        }

        if (node.left) {
            dfs(node.left);
        }

        if (node.right) {
            dfs(node.right);
        }
    }

    dfs(root);

    if (!root.left && !root.right) {
        string = [root.val + '-' + '-'];
    }

    return string.join(',')
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if (!data) return null;
    var string = data.split(',');
    var map = {};
    var root;
    for(var i = 0; i < string.length; i++) {
        var item = string[i].split('-');
        if (i === 0) {
            root = item[0];
        }

        map[item[0]] = {
            left: item[1],
            right: item[2]
        }
    }

    function dfs(val) {
        var node = new TreeNode(val);
        if (map[val] && map[val].left) {
            node.left = dfs(map[val].left);
        } else {
            node.left = null;
        }

        if (map[val] && map[val].right) {
            node.right = dfs(map[val].right);
        } else {
            node.right = null;
        }

        return node;
    }

    return dfs(root)
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

