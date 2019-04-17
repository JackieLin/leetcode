/*
 * @lc app=leetcode id=525 lang=javascript
 *
 * [525] Contiguous Array
 *
 * https://leetcode.com/problems/contiguous-array/description/
 *
 * algorithms
 * Medium (42.45%)
 * Total Accepted:    37.6K
 * Total Submissions: 88.5K
 * Testcase Example:  '[0,1]'
 *
 * Given a binary array, find the maximum length of a contiguous subarray with
 * equal number of 0 and 1. 
 * 注意看解题思路，此题非常巧妙，利用打点的方式记录第一个值，0当成 -1 若 0 和 1 想等，那么下次同一个值加起来肯定也是相等的
 * 
 * Example 1:
 * 
 * Input: [0,1]
 * Output: 2
 * Explanation: [0, 1] is the longest contiguous subarray with equal number of
 * 0 and 1.
 * 
 * 
 * 
 * Example 2:
 * 
 * Input: [0,1,0]
 * Output: 2
 * Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal
 * number of 0 and 1.
 * 
 * 
 * 
 * Note:
 * The length of the given binary array will not exceed 50,000.
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    var arr = [];
    var length = nums.length;

    for(var i = 0; i < 2 * length + 1; i++) {
        arr[i] = -2;
    }

    arr[length] = -1;

    var maxLen = 0;
    var count = 0;

    for(var i = 0; i < length; i++) {
        count += (!nums[i] ? -1 : 1);
        if (arr[length + count] >= -1) {
            maxLen = Math.max(maxLen, i - arr[length + count]);
        } else {
            arr[length + count] = i;
        }
    }

    return maxLen;
};

