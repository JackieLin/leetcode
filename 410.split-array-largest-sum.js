/*
 * @lc app=leetcode id=410 lang=javascript
 *
 * [410] Split Array Largest Sum
 *
 * https://leetcode.com/problems/split-array-largest-sum/description/
 *
 * algorithms
 * Hard (41.92%)
 * Total Accepted:    37.1K
 * Total Submissions: 88.5K
 * Testcase Example:  '[7,2,5,10,8]\n2'
 *
 * Given an array which consists of non-negative integers and an integer m, you
 * can split the array into m non-empty continuous subarrays. Write an
 * algorithm to minimize the largest sum among these m subarrays.
 * 
 * 
 * Note:
 * If n is the length of array, assume the following constraints are
 * satisfied:
 * 
 * 1 ≤ n ≤ 1000
 * 1 ≤ m ≤ min(50, n)
 * 
 * 
 * 
 * Examples: 
 * 
 * Input:
 * nums = [7,2,5,10,8]
 * m = 2
 * 
 * Output:
 * 18
 * 
 * Explanation:
 * There are four ways to split nums into two subarrays.
 * The best way is to split it into [7,2,5] and [10,8],
 * where the largest sum among the two subarrays is only 18.
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
var splitArray = function(nums, m) {
    var length = nums.length;
    var result = []
    var min = Number.MAX_SAFE_INTEGER;

    if (m === 1) {
        var sum = 0
        for(var i = 0; i < length; i++) {
            sum += nums[i];
        }

        return sum;
    }

    // debugger;
    function division(begin, count) {
        var max = Number.MIN_SAFE_INTEGER;

        for(var i = begin + 1; i <= length - m + count; i++) {
            var left = 0;
            var right = 0;
            var sum;
            for(var j = begin; j < i; j++) {
                left += nums[j];
            }

            if (count + 1 === m) {
                for(var j = i; j < length; j++) {
                    right += nums[j];
                }    
            } else {
                right = division(i, count + 1);
            }

            sum = Math.max(left, right)

            if (max < sum) {
                max = sum;
            }

            result.push(sum) 
            // result.push({
            //     begin,
            //     sep: i,
            //     value: Math.max(left, right)
            // })    
        }

        return max;
    }

    division(0, 1);

    for(var i = 0; i < result.length; i++) {
        if (min > result[i]) {
            min = result[i]
        }
    }

    return min;
};

