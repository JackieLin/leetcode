/*
 * @lc app=leetcode id=162 lang=javascript
 *
 * [162] Find Peak Element
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    nums[-1] = Number.MIN_SAFE_INTEGER;
    nums[nums.length] = Number.MIN_SAFE_INTEGER;

    for(var i = 0; i < nums.length; i++) {
     if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) {
        return i;
     }
    }

    return -1;
};

