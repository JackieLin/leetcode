/*
 * @lc app=leetcode id=90 lang=javascript
 *
 * [90] Subsets II
 *
 * https://leetcode.com/problems/subsets-ii/description/
 *
 * algorithms
 * Medium (41.89%)
 * Total Accepted:    195.4K
 * Total Submissions: 466.4K
 * Testcase Example:  '[1,2,2]'
 *
 * Given a collection of integers that might contain duplicates, nums, return
 * all possible subsets (the power set).
 * 
 * Note: The solution set must not contain duplicate subsets.
 * 
 * Example:
 * 
 * 
 * Input: [1,2,2]
 * Output:
 * [
 * ⁠ [2],
 * ⁠ [1],
 * ⁠ [1,2,2],
 * ⁠ [2,2],
 * ⁠ [1,2],
 * ⁠ []
 * ]
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    var dp = [[]];
    var length = nums.length;
    nums = nums.sort((a, b) => a - b);
    var i = length - 1;
    var count = 1;

    while(i >= 0) {
        if (nums[i] === nums[i - 1]) {
            count++;
            i--;
        }

        var data = [];

        if (count > 1) {
            for(var j = 1; j <= count; j++) {
                data.push(Array(j).fill(nums[i]))
            }
            count = 1;
        } else {
            data.push(nums[i])
        }

        var result = {...dp};
        for(var j = 0; j < dp.length; j++) {
            for(var k = 0; k < data.length; k++) {
                result.push(dp[j].concat(data[k]))
            }
        }

        dp = result;

        i--;
    }
    
    return dp;
};

