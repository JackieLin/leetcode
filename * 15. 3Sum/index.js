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
    nums = nums.sort((a, b) => a -b);
    var len = nums.length;
    var s;
    var i, j,k;
    var result = [];
    for(i = 0; i < len; i++) {
        if ((i > 0) && nums[i] === nums[i - 1]) continue;
        j = i + 1;
        k = len - 1;
        while(j < k) {
            s = nums[i] + nums[j] + nums[k];
            if (s < 0) {
                j++;
            } else if (s > 0) {
                k--;
            } else {
                result.push([nums[i], nums[j], nums[k]]);
                while(nums[j] === nums[j+1]) j++;
                while(nums[k] === nums[k - 1]) k--;
                j++;
                k--;
            }
        }
    }

    return result;
};
