/*
 * @lc app=leetcode id=416 lang=javascript
 *
 * [416] Partition Equal Subset Sum
 *
 * https://leetcode.com/problems/partition-equal-subset-sum/description/
 *
 * 注意，排序然后 dfs 能够减少很多判断，如果能正确找到的话，当然，如果是不正确的情况下面还是有很多判断
 * 数组循环的 dfs 的时间复杂度为 (n + 1)!
 * 
 * algorithms
 * Medium (40.19%)
 * Total Accepted:    79.9K
 * Total Submissions: 198.9K
 * Testcase Example:  '[1,5,11,5]'
 *
 * Given a non-empty array containing only positive integers, find if the array
 * can be partitioned into two subsets such that the sum of elements in both
 * subsets is equal.
 * 
 * Note:
 * 
 * 
 * Each of the array element will not exceed 100.
 * The array size will not exceed 200.
 * 
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: [1, 5, 11, 5]
 * 
 * Output: true
 * 
 * Explanation: The array can be partitioned as [1, 5, 5] and [11].
 * 
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [1, 2, 3, 5]
 * 
 * Output: false
 * 
 * Explanation: The array cannot be partitioned into equal sum subsets.
 * 
 * 
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var canPartition = function (nums) {
//     var sum = 0;
//     var memo = []
//     for (var num of nums) {
//         sum += num;
//     }

//     if (!sum % 2) return false;
//     var avg = sum / 2;

//     var length = nums.length;

//     for(var i = 0; i < length; i++) {
//         memo[i] = {};
//     }

//     function pick(start, end, value, idx) {
//         if (memo[start][value] !== undefined) return memo[start][value];

//         for (var i = start; i < end; i++) {
//             if (memo[start][value]) return memo[start][value];
            
//             var v = value - nums[i];
//             if (v > 0 && i < length - 1) {
//                 idx[i] = true
//                 var result = pick(i + 1, end, v, idx);
//                 idx[i] = false;

//                 if (result) {
//                     memo[start][value] = true;
//                     return true;
//                 }

//             } else if (v === 0) {
//                 memo[start][value] = true;
//                 return true;
//             }
//         }

//         memo[start][value] = false;

//         return false;
//     }

//     return pick(0, length, avg, {})
// };

var canPartition = function(nums) {
    const len = nums.length;
    if (len < 2) return false;
    let sum = nums.reduce((a, b) => a+=b);
    if (sum % 2 !== 0) return false;
    let target = sum / 2;
    if (target % 2 !== 0 && nums.every(e => e % 2 === 0)) return false;
    nums.sort((a, b) => b - a);
    let used = Array(nums.length).fill(0);

    const dfs = (used, target, idx) => {
        if (target === 0) return true;
        if (idx === nums.length) return false;
        for (let i = idx; i < nums.length; i++) {
          if (i > 0 && !used[i - 1] && nums[i - 1] === nums[i]) continue;
          if (!used[i] && target >= nums[i]) {
            used[i] = 1;
            if (dfs(used, target - nums[i], i + 1)) return true;
            used[i] = 0;
          }
        }
        return false;
    };
    return dfs(used, target, 0);
};

var canPartition = function(nums) {
    let sum = 0;
    for (let num of nums) {
        sum += num;
    }
    if(sum % 2 !== 0) return false;
    sum /= 2;
    let dp = new Array(sum + 1).fill(false);
    dp[0] = true;
    
    for(let num of nums) {
        for(let i = sum; i >= num; i--){
            dp[i] = dp[i] || dp[i - num];
        }
    }
    
    return dp[sum];
};

