/*
 * @lc app=leetcode id=437 lang=javascript
 *
 * [437] Path Sum III
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
 * @param {number} targetSum
 * @return {number}
 */
// var pathSum = function(root, targetSum) {
//     let count = 0;
//     function dfs(root, targetSum, shouldSelect) {
//       if (!root) return;
//       if (!shouldSelect) {
//         dfs(root.left, targetSum, false);
//         dfs(root.right, targetSum, false);  
//       }
      
//       const left = targetSum - root.val;
//       if (left === 0) {
//         // console.log(root.val, root.left?.val, root.right?.val);
//         count++;
//       };
//       dfs(root.left, left, true);
//       dfs(root.right, left, true);
//     }
//     dfs(root, targetSum, false);
//     return count;
// };
var pathSum = function(root, targetSum) {
  let count  = 0;
  function traverse(node, arr) {
      if(!node) return null;
      arr.push(node.val);
      let i = arr.length - 1;
      let sum = 0;
      while(i >= 0) {
          sum+=arr[i];
          if(sum === targetSum) {
            // console.log('match', arr, targetSum);
            count++
          };
          i--;
      }
      if(node.left == null && node.right == null) return;
      if(traverse(node.left, arr) !== null) {
        // console.log('left', arr);
        arr.pop();
      };
      if(traverse(node.right, arr) !== null) {
        // console.log('right', arr);
        arr.pop()
      };
  }
  traverse(root, [])
  return count;
};
// @lc code=end

