/*
 * @lc app=leetcode id=33 lang=javascript
 *
 * [33] Search in Rotated Sorted Array
 *
 * https://leetcode.com/problems/search-in-rotated-sorted-array/description/
 *
 * algorithms
 * Medium (32.73%)
 * Total Accepted:    385.2K
 * Total Submissions: 1.2M
 * Testcase Example:  '[4,5,6,7,0,1,2]\n0'
 *
 * Suppose an array sorted in ascending order is rotated at some pivot unknown
 * to you beforehand.
 * 
 * (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).
 * 
 * You are given a target value to search. If found in the array return its
 * index, otherwise return -1.
 * 
 * You may assume no duplicate exists in the array.
 * 
 * Your algorithm's runtime complexity must be in the order of O(log n).
 * 
 * Example 1:
 * 
 * 
 * Input: nums = [4,5,6,7,0,1,2], target = 0
 * Output: 4
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: nums = [4,5,6,7,0,1,2], target = 3
 * Output: -1
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    var length = nums.length;
    var start = length - 1;
    var end = 0
    var result = -1;
    var isRight = false;
    var isLeft = false;

    // for (let i = 0, j = nums.length - 1; i <= j;) {
    //     let mid = Math.floor((i + j) / 2);
    //     if (nums[mid] === targ) {
    //       return mid;
    //     } else if ((nums[i] <= targ && targ < nums[mid]) ||
    //                (nums[i] > nums[mid] && (nums[i] <= targ || targ < nums[mid]))
    //             ) {
    //       j = mid - 1;
    //     } else {
    //       i = mid + 1;
    //     }
    // }

    // debugger;
    while(end <= start) {
        if (target > nums[start] && target < nums[end]) break;
        if (nums[end] < target) {
            isRight = true;
            end++;
        } else if (isRight && nums[end] > target) {
            break;
        } else if (nums[end] === target) {
            result = end;
            break;
        }

        if (nums[start] > target) {
            isLeft = true;
            start--;
        } else if (isLeft && nums[start] < target) {
            break;
        } else if (nums[start] === target) {
            result = start;
            break;
        }
    }

    return result;
};

