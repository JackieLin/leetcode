/*
 * @lc app=leetcode id=337 lang=javascript
 *
 * [337] House Robber III
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
 * @return {number}
 */
 const map = new Map()

 var rob = function(root) {
   if(!root) return 0
 
   if(map.get(root)) return map.get(root)
 
   let max = rob(root.left) + rob(root.right)
 
   let next_max = root.val
 
   if(root.left){
     next_max += rob(root.left.left) + rob(root.left.right)
   }
 
   if(root.right){
     next_max += rob(root.right.left) + rob(root.right.right)
   }
 
   map.set(root,Math.max(max,next_max))
   return map.get(root)
 };
// var rob = function(root) {
//     const queue = [root];
//     const level = [1];
//     const values = [];
//     const dp = [];
//     while(queue.length) {
//       const item = queue.shift();
//       const currLevel = level.shift();
//       if (item.left) {
//         queue.push(item.left);
//         level.push(currLevel + 1);
//       }
//       if (item.right) {
//         queue.push(item.right);
//         level.push(currLevel + 1);
//       }

//       values[currLevel - 1] = (values[currLevel - 1] || 0) + item.val;
//     }

//     dp[0] = values[0];
//     for(let i = 1; i < values.length; i += 1) {
//       dp[i] = Math.max(dp[i - 1], (dp[i - 2] || 0) + values[i]);
//     }

//     return dp[values.length - 1];
// };
// @lc code=end

