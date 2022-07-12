/*
 * @lc app=leetcode id=450 lang=javascript
 *
 * [450] Delete Node in a BST
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    function adjust(node) {
      node.val = Number.MAX_SAFE_INTEGER;
      if (!node.left && !node.right) {
        return null;
      };
      let cursor = node;
      while(cursor) {
        if (cursor.left && cursor.val > cursor.right.val) {
          cursor.val = cursor.right.val;
          cursor.right.val = Number.MAX_SAFE_INTEGER;
          if (!cursor.right.right) {
            cursor.right = null;
          }
          cursor = cursor.right;  
        } else if (cursor.left && !cursor.right && cursor.val > cursor.left.val) {
          cursor.val = cursor.left.val;
          cursor.left.val = Number.MAX_SAFE_INTEGER;
          if (!cursor.left.right && !cursor.left.left) {
            cursor.left = null;
          }
          cursor = cursor.left;
        }
      }

      return node;
    }

    function dfs(root, parent) {
      let node;
      if (root.left) {
        if (root.left.val === key) {
          adjust(root.left)
        }
        if (root.left) {
          dfs(root.left);
        }
      }

      if (root.right) {
        dfs(root.right);
      }
    }

    dfs(root, null);
};
// @lc code=end

