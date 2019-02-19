/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 *
 * https://leetcode.com/problems/climbing-stairs/description/
 *
 * algorithms
 * Easy (43.26%)
 * Total Accepted:    350.4K
 * Total Submissions: 810K
 * Testcase Example:  '2'
 *
 * You are climbing a stair case. It takes n steps to reach to the top.
 * 
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can
 * you climb to the top?
 * 
 * Note: Given n will be a positive integer.
 * 
 * Example 1:
 * 
 * 
 * Input: 2
 * Output: 2
 * Explanation: There are two ways to climb to the top.
 * 1. 1 step + 1 step
 * 2. 2 steps
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: 3
 * Output: 3
 * Explanation: There are three ways to climb to the top.
 * 1. 1 step + 1 step + 1 step
 * 2. 1 step + 2 steps
 * 3. 2 steps + 1 step
 * 
 * 
 */
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    var a= [];
    var nums = [];
    a[3] = 1;
    a[4] = 2;
    nums[1] = 1;
    nums[2] = 2;
    nums[3] = 3;
    nums[4] = 5;
    for(var i = 5; i <= n; i++) {
        nums[i] = a[i - 2] + a[i - 1] + nums[i - 1];
        a[i] = a[i - 2] + a[i - 1];
    }

    return nums[n];
};
