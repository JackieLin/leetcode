/*
 * @lc app=leetcode id=645 lang=javascript
 *
 * [645] Set Mismatch
 *
 * https://leetcode.com/problems/set-mismatch/description/
 *
 * algorithms
 * Easy (40.45%)
 * Total Accepted:    43.2K
 * Total Submissions: 106.7K
 * Testcase Example:  '[1,2,2,4]'
 *
 * 
 * The set S originally contains numbers from 1 to n. But unfortunately, due to
 * the data error, one of the numbers in the set got duplicated to another
 * number in the set, which results in repetition of one number and loss of
 * another number. 
 * 
 * 
 * 
 * Given an array nums representing the data status of this set after the
 * error. Your task is to firstly find the number occurs twice and then find
 * the number that is missing. Return them in the form of an array.
 * 
 * 
 * 
 * Example 1:
 * 
 * Input: nums = [1,2,2,4]
 * Output: [2,3]
 * 
 * 
 * 
 * Note:
 * 
 * The given array size will in the range [2, 10000].
 * The given array's numbers won't have any order.
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    var map = {};
    var len = nums.length;
    var result = [0,0];
    for(var i = 1; i <= len; i++) {
        map[i] = 0;
    }

    for(var i = 0; i < len; i++) {
        map[nums[i]] = map[nums[i]] + 1;
    }

    Object.keys(map).forEach(function(v) {
        if (!map[v]) {
            result[1] = Number(v)
        }

        if (map[v] === 2) {
            result[0] = Number(v)
        }
    })

    return result;
};

