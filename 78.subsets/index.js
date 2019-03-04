/*
 * @lc app=leetcode id=78 lang=javascript
 *
 * [78] Subsets
 *
 * https://leetcode.com/problems/subsets/description/
 *
 * algorithms
 * Medium (50.93%)
 * Total Accepted:    330.3K
 * Total Submissions: 648.4K
 * Testcase Example:  '[1,2,3]'
 *
 * Given a set of distinct integers, nums, return all possible subsets (the
 * power set).
 * 
 * Note: The solution set must not contain duplicate subsets.
 * 
 * Example:
 * 
 * 
 * Input: nums = [1,2,3]
 * Output:
 * [
 * ⁠ [3],
 * [1],
 * [2],
 * [1,2,3],
 * [1,3],
 * [2,3],
 * [1,2],
 * []
 * ]
 * 
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    var len = nums.length;
    var result = [[]]

    function sets(parent, ix) {
        for(var i = ix + 1; i < len; i++) {
            var current = parent.slice();
            current.push(nums[i]);
            result.push(current)
            sets(current, i);
        }
    }

    sets([], -1)

    return result;
};

