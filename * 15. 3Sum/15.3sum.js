/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 *
 * https://leetcode.com/problems/3sum/description/
 *
 * algorithms
 * Medium (23.23%)
 * Total Accepted:    474.9K
 * Total Submissions: 2M
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * Given an array nums of n integers, are there elements a, b, c in nums such
 * that a + b + c = 0? Find all unique triplets in the array which gives the
 * sum of zero.
 * 
 * Note:
 * 
 * The solution set must not contain duplicate triplets.
 * 
 * Example:
 * 
 * 
 * Given array nums = [-1, 0, 1, 2, -1, -4],
 * 
 * A solution set is:
 * [
 * ⁠ [-1, 0, 1],
 * ⁠ [-1, -1, 2]
 * ]
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums = nums.sort((a, b) => a-b);
    var map = {};
    var len = nums.length;
    var max, second;
    var one, two;
    var zero = 0;
    var result = [];

    max = nums[len - 1];
    second = nums[len - 2];

    for(var i = 0; i < len; i++) {
        if (nums[i] <=0) {
            zero = i;
        } else break;
    }
    for(var i = 0; i <= zero; i++) {
        one = String(nums[i]);
        if (!map[one]) {
            map[one] = {};
        }
        if (len - 2 > i) {
            if (max + second < Math.abs(one)) continue;
        }
        for(var j = i + 1; j < len - 1; j++) {
            two = String(nums[j]);
            if (map[one][two]) continue;
            var k = nums[j + 1] >= 0 ? j + 1 : zero + 1;
            for(; k < len; k++) {
                if (map[one][two]) continue;
                if (nums[i] + nums[j] + nums[k] === 0) {
                    map[one][two] = true
                    result.push([nums[i], nums[j], nums[k]])    
                }
            }
        }
    }

    return result;
};
