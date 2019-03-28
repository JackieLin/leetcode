/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 *
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/
 *
 * algorithms
 * Easy (39.99%)
 * Total Accepted:    548.5K
 * Total Submissions: 1.4M
 * Testcase Example:  '[1,1,2]'
 *
 * Given a sorted array nums, remove the duplicates in-place such that each
 * element appear only once and return the new length.
 * 
 * Do not allocate extra space for another array, you must do this by modifying
 * the input array in-place with O(1) extra memory.
 * 
 * Example 1:
 * 
 * 
 * Given nums = [1,1,2],
 * 
 * Your function should return length = 2, with the first two elements of nums
 * being 1 and 2 respectively.
 * 
 * It doesn't matter what you leave beyond the returned length.
 * 
 * Example 2:
 * 
 * 
 * Given nums = [0,0,1,1,1,2,2,3,3,4],
 * 
 * Your function should return length = 5, with the first five elements of nums
 * being modified to 0, 1, 2, 3, and 4 respectively.
 * 
 * It doesn't matter what values are set beyond the returned length.
 * 
 * 
 * Clarification:
 * 
 * Confused why the returned value is an integer but your answer is an array?
 * 
 * Note that the input array is passed in by reference, which means
 * modification to the input array will be known to the caller as well.
 * 
 * Internally you can think of this:
 * 
 * 
 * // nums is passed in by reference. (i.e., without making a copy)
 * int len = removeDuplicates(nums);
 * 
 * // any modification to nums in your function would be known by the caller.
 * // using the length returned by your function, it prints the first len
 * elements.
 * for (int i = 0; i < len; i++) {
 * print(nums[i]);
 * }
 * 
 * var removeDuplicates = function(nums) {
    
    if(nums.length === 0) return 0;
    
    let slower = 0;
    
    for(let faster = 1; faster < nums.length; faster++) {
        if(nums[slower] !== nums[faster]){
            slower++;
            nums[slower] = nums[faster];
        }
    }
    
    return slower + 1;
    
};
两个指针明显更快
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var count = 0;
    // debugger;
    for(var i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) nums[i - 1] = '#';
    }

    for(var i = 0; i < nums.length; i++) {
        if (nums[i] !== '#') count++;
    }

    for(var i = 0; i < nums.length; i++) {
        if (nums[i] === '#') {
            var j = i + 1;
            while(j < nums.length) {
                if (nums[j] !== '#') {
                    nums[i] = nums[j];
                    nums[j] = '#';
                    break;
                } else {
                    j++;
                }
            }

            if (j >= nums.length) {
                break;
            }
        }
    }

    return count;
};

