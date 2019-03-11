/*
 * @lc app=leetcode id=238 lang=javascript
 *
 * [238] Product of Array Except Self
 *
 * https://leetcode.com/problems/product-of-array-except-self/description/
 *
 * algorithms
 * Medium (53.97%)
 * Total Accepted:    229.4K
 * Total Submissions: 425K
 * Testcase Example:  '[1,2,3,4]'
 *
 * Given an array nums of n integers where n > 1,  return an array output such
 * that output[i] is equal to the product of all the elements of nums except
 * nums[i].
 * 
 * Example:
 * 
 * 
 * Input:  [1,2,3,4]
 * Output: [24,12,8,6]
 * 
 * 
 * Note: Please solve it without division and in O(n).
 * 
 * Follow up:
 * Could you solve it with constant space complexity? (The output array does
 * not count as extra space for the purpose of space complexity analysis.)
 * 
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    var total = 1;
    var zeros = [];
    var result = [];
    var ix;

    for(var i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            zeros.push(i);
        } else {
            total *= nums[i]
        }
    }

    if (zeros.length > 1) {
        for(var i = 0; i < nums.length; i++) {
            result[i] = 0;
        }

        return result;
    }

    if (zeros.length === 1) {
        ix = zeros[0];
        for(var i = 0; i < nums.length; i++) {        
            if (ix !== i) {
                result.push(0)
            } else {
                result.push(total)
            }
        }

        return result;
    }

    if (!zeros.length) {
        for(var i = 0; i < nums.length; i++) {
            result.push(total/nums[i]);
        }

        return result;
    }
};

