/*
 * @lc app=leetcode id=494 lang=javascript
 *
 * [494] Target Sum
 *
 * https://leetcode.com/problems/target-sum/description/
 *
 * algorithms
 * Medium (45.00%)
 * Total Accepted:    90.4K
 * Total Submissions: 200.8K
 * Testcase Example:  '[1,1,1,1,1]\n3'
 *
 * 
 * You are given a list of non-negative integers, a1, a2, ..., an, and a
 * target, S. Now you have 2 symbols + and -. For each integer, you should
 * choose one from + and - as its new symbol.
 * ⁠
 * 
 * Find out how many ways to assign symbols to make sum of integers equal to
 * target S.  
 * 
 * 
 * Example 1:
 * 
 * Input: nums is [1, 1, 1, 1, 1], S is 3. 
 * Output: 5
 * Explanation: 
 * 
 * -1+1+1+1+1 = 3
 * +1-1+1+1+1 = 3
 * +1+1-1+1+1 = 3
 * +1+1+1-1+1 = 3
 * +1+1+1+1-1 = 3
 * 
 * There are 5 ways to assign symbols to make the sum of nums be target 3.
 * 
 * 
 * 
 * Note:
 * 
 * The length of the given array is positive and will not exceed 20. 
 * The sum of elements in the given array will not exceed 1000.
 * Your output answer is guaranteed to be fitted in a 32-bit integer.
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function(nums, S) {
    var length = nums.length;

    function dfs(sum, idx) {
        if (idx >= length) {
            if (sum === 0) {
                return 1
            } else {
                return 0;
            }
        }
        return dfs(sum + nums[idx], idx+ 1) + dfs(sum - nums[idx], idx + 1);
    }

    return dfs(S, 0)
};

