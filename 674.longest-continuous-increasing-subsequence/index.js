/*
 * @lc app=leetcode id=674 lang=javascript
 *
 * [674] Longest Continuous Increasing Subsequence
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    var length = nums.length;
    if (length <= 1) return length;
    var max = Number.MIN_SAFE_INTEGER;

    var count = 1;
    for(var i = 0; i < length - 1; i++) {
        if (nums[i] < nums[i + 1]) {
            count++
        } else {
            if (count > max) {
                max = count;
            }

            count = 1;
        }
    }
    
    max = Math.max(count, max);

    return max;
};

