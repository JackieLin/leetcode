/*
 * @lc app=leetcode id=646 lang=javascript
 *
 * 注意，此题可以用动态规划和贪心算法计算出来 dp[j] 表示终点， dp[j] = max(dp[j], do[i] + 1);
 * 
 * [646] Maximum Length of Pair Chain
 *
 * https://leetcode.com/problems/maximum-length-of-pair-chain/description/
 *
 * algorithms
 * Medium (48.13%)
 * Total Accepted:    32.9K
 * Total Submissions: 68.4K
 * Testcase Example:  '[[1,2], [2,3], [3,4]]'
 *
 * 
 * You are given n pairs of numbers. In every pair, the first number is always
 * smaller than the second number.
 * 
 * 
 * 
 * Now, we define a pair (c, d) can follow another pair (a, b) if and only if b
 * < c. Chain of pairs can be formed in this fashion. 
 * 
 * 
 * 
 * Given a set of pairs, find the length longest chain which can be formed. You
 * needn't use up all the given pairs. You can select pairs in any order.
 * 
 * 
 * 
 * Example 1:
 * 
 * Input: [[1,2], [2,3], [3,4]]
 * Output: 2
 * Explanation: The longest chain is [1,2] -> [3,4]
 * 
 * 
 * 
 * Note:
 * 
 * The number of given pairs will be in the range [1, 1000].
 * 
 * 
 */
/**
 * @param {number[][]} pairs
 * @return {number}
 */
// var findLongestChain = function(pairs) {
//     function genList(list, point) {
//         var start = [];
//         var end = [];
//         for(var i = 0; i < list.length; i++) {
//             if (list[i][1] < point[0]) {
//                 start.push(list[i]);
//             }
//             if (list[i][0] > point[1]) {
//                 end.push(list[i]);
//             }
//         }

//         return {
//             start, end
//         }
//     }

//     function divison(list) {
//         var max = 0;
//         // debugger;

//         if (!list) return 0;
//         if (list && list.length <= 1) return list.length;

//         for(var i = 0; i < list.length; i++) {
//             var listCodes = genList(list, list[i]);
//             var left = divison(listCodes.start);
//             var right = divison(listCodes.end);

//             if (left + 1 + right > max) {
//                 max = left + 1 + right;
//             }
//         }

//         return max;
//     }

//     return divison(pairs);
// };

var findLongestChain = function(pairs) {
    pairs = pairs.sort((a, b) => a[1] - b[1]);
    var cur = Number.MIN_SAFE_INTEGER;
    var ans = 0;

    for(var i = 0; i < pairs.length; i++) {
        if (cur < pairs[i][0]) {
            cur = pairs[i][1];
            ans++;
        }
    }

    return ans;
}
