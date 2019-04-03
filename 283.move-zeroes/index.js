/*
 * @lc app=leetcode id=283 lang=javascript
 *
 * [283] Move Zeroes
 *
 * https://leetcode.com/problems/move-zeroes/description/
 *
 * algorithms
 * Easy (53.91%)
 * Total Accepted:    439.9K
 * Total Submissions: 815.9K
 * Testcase Example:  '[0,1,0,3,12]'
 *
 * Given an array nums, write a function to move all 0's to the end of it while
 * maintaining the relative order of the non-zero elements.
 * 
 * Example:
 * 
 * 
 * Input: [0,1,0,3,12]
 * Output: [1,3,12,0,0]
 * 
 * Note:
 * 
 * 
 * You must do this in-place without making a copy of the array.
 * Minimize the total number of operations.
 * 
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var slow;
    for(var i = 0; i < nums.length; i++) {
        if (!nums[i] && slow === undefined) {
            slow = i;
        } else if (nums[i] && slow !== undefined) {
            nums[slow] = nums[i];
            nums[i] = 0;
            if (!nums[slow + 1]) {
                slow++;
            } else {
                slow = i;
            }
        }
    }
};

