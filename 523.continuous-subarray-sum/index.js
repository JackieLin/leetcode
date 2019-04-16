/*
 * @lc app=leetcode id=523 lang=javascript
 *
 * [523] Continuous Subarray Sum
 *
 * https://leetcode.com/problems/continuous-subarray-sum/description/
 *
 * algorithms
 * Medium (24.16%)
 * Total Accepted:    62.6K
 * Total Submissions: 259K
 * Testcase Example:  '[23,2,4,6,7]\n6'
 *
 * Given a list of non-negative numbers and a target integer k, write a
 * function to check if the array has a continuous subarray of size at least 2
 * that sums up to the multiple of k, that is, sums up to n*k where n is also
 * an integer.
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: [23, 2, 4, 6, 7],  k=6
 * Output: True
 * Explanation: Because [2, 4] is a continuous subarray of size 2 and sums up
 * to 6.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [23, 2, 6, 4, 7],  k=6
 * Output: True
 * Explanation: Because [23, 2, 6, 4, 7] is an continuous subarray of size 5
 * and sums up to 42.
 * 
 * 
 * 
 * 
 * Note:
 * 
 * 
 * The length of the array won't exceed 10,000.
 * You may assume the sum of all the numbers is in the range of a signed 32-bit
 * integer.
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
    var map = {
        '0,0': nums[0]
    };

    var length = nums.length;
    for(var i = 0; i < length - 1; i++) {
        for(var j = i + 1; j < length; j++) {
            if (i === 0) {
                map[`${i},${j}`] = map[`${i},${j - 1}`] + nums[j];
            } else {
                map[`${i},${j}`] = map[`${i - 1},${j}`] - nums[i - 1];
            }

            if (map[`${i},${j}`] % k === 0 || (k === 0 && map[`${i},${j}`] === 0)) {
                // console.log(i + '  ' + j);
                return true;
            }
        }
    }

    return false;
};

