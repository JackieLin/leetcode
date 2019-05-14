/*
 * @lc app=leetcode id=31 lang=javascript
 *
 * [31] Next Permutation
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    var temp;
    var min;
    var index;
    // debugger;
    for(var i = nums.length - 2; i >= 0; i--) {
        min = Number.MAX_SAFE_INTEGER;

        for(var j = i + 1; j < nums.length; j++) {
            if (nums[i] < nums[j] && min > nums[j]) {
                min = nums[j];
                index = j;
            }
        }

        // 找到
        if (min !== Number.MAX_SAFE_INTEGER) {
            nums[index] = nums[i];
            nums[i] = min;
            break;
        }
    }

    // 找不到
    if (i < 0) {
        i = 0;
    } else {
        i += 1;
    }

    for(var j = i; j < nums.length; j++) {
        for(var k = j + 1; k < nums.length; k++) {
            if (nums[j] > nums[k]) {
                temp = nums[j];
                nums[j] = nums[k];
                nums[k] = temp;
            }
        }
    }

    return nums;
};

