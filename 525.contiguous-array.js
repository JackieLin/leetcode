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
 * 
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
    var length = nums.length;
    var zero = 0;
    var one = 0;
    
    for(var i = 0; i < length; i++) {
        if (!nums[i]) {
            zero++;
        } else {
            one++;
        }
    }
    function division(start, end, zero, one) {
        if (start >= end) return 0;

        if ((zero === 0 || one === 0) && zero !== one) return 0;

        if (zero === one) {
            return end - start + 1;
        }
        
        return Math.max(
            division(start + 1, end, nums[start] ? zero : zero - 1, nums[start] ? one - 1 : one), 
            division(start, end - 1, nums[end] ? zero : zero - 1, nums[end] ? one - 1 : one));
    }

    return division(0, length - 1, zero, one);
};

