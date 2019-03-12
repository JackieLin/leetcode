/*
 * @lc app=leetcode id=414 lang=javascript
 *
 * [414] Third Maximum Number
 * 
 * https://leetcode.com/problems/third-maximum-number/description/
 *
 * algorithms
 * Easy (28.70%)
 * Total Accepted:    85.3K
 * Total Submissions: 297.3K
 * Testcase Example:  '[3,2,1]'
 *
 * Given a non-empty array of integers, return the third maximum number in this
 * array. If it does not exist, return the maximum number. The time complexity
 * must be in O(n).
 * 
 * Example 1:
 * 
 * Input: [3, 2, 1]
 * 
 * Output: 1
 * 
 * Explanation: The third maximum is 1.
 * 
 * 
 * 
 * Example 2:
 * 
 * Input: [1, 2]
 * 
 * Output: 2
 * 
 * Explanation: The third maximum does not exist, so the maximum (2) is
 * returned instead.
 * 
 * 
 * 
 * Example 3:
 * 
 * Input: [2, 2, 3, 1]
 * 
 * Output: 1
 * 
 * Explanation: Note that the third maximum here means the third maximum
 * distinct number.
 * Both numbers with value 2 are both considered as second maximum.
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
    var map = {};
    var first, second, third;
    for (var i = 0; i < nums.length; i++) {
        if (!map[nums[i]]) {
            map[nums[i]] = true;
        }
    }

    nums = Object.keys(map).map(function (v) { return Number(v) });

    // first
    for (var i = 0; i < nums.length; i++) {
        if (first === undefined) {
            first = nums[i];
        } else if (first < nums[i]) {
            first = nums[i]
        }
    }

    if (nums.length < 3) return first;

    // second
    for (var i = 0; i < nums.length; i++) {
        if (second === undefined && nums[i] < first) {
            second = nums[i];
        } else if (nums[i] < first && second < nums[i]) {
            second = nums[i]
        }
    }

    // third
    for (var i = 0; i < nums.length; i++) {
        if (third === undefined && nums[i] < second) {
            third = nums[i];
        } else if (nums[i] < second && third < nums[i]) {
            third = nums[i]
        }
    }

    return third;
};

