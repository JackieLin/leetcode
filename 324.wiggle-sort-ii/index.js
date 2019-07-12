/*
 * @lc app=leetcode id=324 lang=javascript
 *
 * [324] Wiggle Sort II
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
    if (nums.length === 1) return nums;
    nums.sort((a, b) => a - b)
    var length = nums.length;
    var carry = length % 2;
    var num = parseInt(length / 2);
    var start = num + carry;
    var result = []

    if (carry) {
        result.push(nums[num])
        for(var i = length - 1; i >= start; i--) {
            result.push(nums[i]);
            result.push(nums[i - start]);
        }
    } else {
        for(var i = start - 1; i >= 0; i--) {
            result.push(nums[i])
            result.push(nums[i + start])
        }
    }

    for(var i = 0; i < length; i++) {
        nums[i] = result[i]
    }

    return nums;
};

