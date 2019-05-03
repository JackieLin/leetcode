/*
 * @lc app=leetcode id=128 lang=javascript
 *
 * [128] Longest Consecutive Sequence
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    var map = {}
    var max = 0;
    for(var i = 0; i < nums.length; i++) {
        map[nums[i]] = true;
    }

    for(var i = 0; i < nums.length; i++) {
        var item = nums[i];
        var result = 1;
        while(map[--item]) {
            result++;
        }

        max = Math.max(max, result);
    }

    return max;
};

