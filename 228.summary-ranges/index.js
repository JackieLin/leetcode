/*
 * @lc app=leetcode id=228 lang=javascript
 *
 * [228] Summary Ranges
 */
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    if (!nums.length) return [];

    var length = nums.length;
    var left = [nums[0]];
    var result = [];
    
    for(var i = 1; i < length; i++) {
        if (nums[i] === nums[i - 1] + 1) {
            left.push(nums[i]);
        } else {
            if (left.length === 1) {
                result.push(left[0] + '');
            } else if (left.length > 1) {
                result.push(`${left[0]}->${left[left.length - 1]}`)
            }

            left = [nums[i]];
        }
    }

    if (left.length) {
        if (left.length === 1) {
            result.push(left[0] + '');
        } else if (left.length > 1) {
            result.push(`${left[0]}->${left[left.length - 1]}`)
        }
    }

    return result;
};

