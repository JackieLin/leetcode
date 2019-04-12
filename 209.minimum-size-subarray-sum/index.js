/*
 * @lc app=leetcode id=209 lang=javascript
 *
 * [209] Minimum Size Subarray Sum
 *
 * https://leetcode.com/problems/minimum-size-subarray-sum/description/
 *
 * algorithms
 * Medium (34.54%)
 * Total Accepted:    169.5K
 * Total Submissions: 490.9K
 * Testcase Example:  '7\n[2,3,1,2,4,3]'
 *
 * Given an array of n positive integers and a positive integer s, find the
 * minimal length of a contiguous subarray of which the sum ≥ s. If there isn't
 * one, return 0 instead.
 * 
 * Example: 
 * 
 * 
 * Input: s = 7, nums = [2,3,1,2,4,3]
 * Output: 2
 * Explanation: the subarray [4,3] has the minimal length under the problem
 * constraint.
 * 
 * Follow up:
 * 
 * If you have figured out the O(n) solution, try coding another solution of
 * which the time complexity is O(n log n). 
 * 
 */
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    var min = Number.MAX_SAFE_INTEGER;

    if (!nums.length) return 0;

    for(var i = 0; i < nums.length; i++) {
        var sum = nums[i];
        if (sum >= s) {
           return 1; 
        }
        for(var j = i - 1; j >= 0; j--) {
            sum += nums[j];
            if (sum >= s) {
                if (min > (i - j)) min = i - j + 1;
                break;
            }
        }
    }

    if (min === Number.MAX_SAFE_INTEGER) min = 0;
    
    return min;
};

