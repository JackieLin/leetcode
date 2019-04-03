/*
 * @lc app=leetcode id=268 lang=javascript
 *
 * [268] Missing Number
 *
 * https://leetcode.com/problems/missing-number/description/
 *
 * algorithms
 * Easy (47.85%)
 * Total Accepted:    258.2K
 * Total Submissions: 539.7K
 * Testcase Example:  '[3,0,1]'
 *
 * Given an array containing n distinct numbers taken from 0, 1, 2, ..., n,
 * find the one that is missing from the array.
 * 
 * Example 1:
 * 
 * 
 * Input: [3,0,1]
 * Output: 2
 * 
 * 
 * Example 2:
 * 
* Input: [9,6,4,2,3,5,7,0,1]
* Output: 8
* 
* 
* Note:
* Your algorithm should run in linear runtime complexity. Could you implement
* it using only constant extra space complexity?
*/
/**
* @param {number[]} nums
* @return {number}
*/
// 如果是单位空间的情况下面,解决方案基本就是靠位运算
// var missingNumber = function(nums) {
//     let res = nums.length;
//     for(let i=0; i<nums.length; i++){
//         res ^= i;
//         res ^= nums[i];
//     }
//     return res;
// };
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    var map = {};
    for(var i = 0; i < nums.length + 1; i++) {
        map[i] = false;
    }

    for(var i = 0; i < nums.length; i++) {
        delete map[nums[i]];
    }

    for(var key in map) {
        return Number(key);
    }
};

