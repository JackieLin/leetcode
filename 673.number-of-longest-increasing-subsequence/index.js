/*
 * @lc app=leetcode id=673 lang=javascript
 *
 * [673] Number of Longest Increasing Subsequence
 *
 * 采用动态规划的方式，注意，动态规划不是只意味着只能新建一个数组，有可能是新建多个数组进行比较，思路要开阔
 * 
 * https://leetcode.com/problems/number-of-longest-increasing-subsequence/description/
 *
 * algorithms
 * Medium (33.33%)
 * Total Accepted:    29K
 * Total Submissions: 86.9K
 * Testcase Example:  '[1,3,5,4,7]'
 *
 * 
 * Given an unsorted array of integers, find the number of longest increasing
 * subsequence.
 * 
 * 
 * Example 1:
 * 
 * Input: [1,3,5,4,7]
 * Output: 2
 * Explanation: The two longest increasing subsequence are [1, 3, 4, 7] and [1,
 * 3, 5, 7].
 * 
 * 
 * 
 * Example 2:
 * 
 * Input: [2,2,2,2,2]
 * Output: 5
 * Explanation: The length of longest continuous increasing subsequence is 1,
 * and there are 5 subsequences' length is 1, so output 5.
 * 
 * 
 * 
 * Note:
 * Length of the given array will be not exceed 2000 and the answer is
 * guaranteed to be fit in 32-bit signed int.
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function(nums) {
    var length = nums.length;
    if (length <= 1) return length;

    var lengths = [];
    var count = [];

    for(var i = 0; i < length; i++) {
        lengths[i] = 1;
    }

    for(var i = 0; i < length; i++) {
        count[i] = 1;
    }

    // debugger;
    for(var j = 0; j < length; j++) {
        for(var i = 0; i < j; i++) {
            if (nums[i] < nums[j]) {
                if (lengths[i] >= lengths[j]) {
                    lengths[j] = lengths[i] + 1;
                    count[j] = count[i];
                } else if (lengths[i] + 1 === lengths[j]) {
                    count[j] += count[i];
                }
            }
        }
    }

    var longest = 0;
    var ans = 0;

    for(var len of lengths) {
        longest = Math.max(longest, len);
    }

    for(var i = 0; i < length; i++) {
        if (lengths[i] === longest) {
            ans += count[i];
        }
    }

    return ans;
};

