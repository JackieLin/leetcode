/*
 * @lc app=leetcode id=16 lang=javascript
 *
 * [16] 3Sum Closest
 *
 * https://leetcode.com/problems/3sum-closest/description/
 *
 * algorithms
 * Medium (41.88%)
 * Total Accepted:    302.4K
 * Total Submissions: 721.5K
 * Testcase Example:  '[-1,2,1,-4]\n1'
 *
 * Given an array nums of n integers and an integer target, find three integers
 * in nums such that the sum is closest to target. Return the sum of the three
 * integers. You may assume that each input would have exactly one solution.
 * 
 * Example:
 * 
 * 
 * Given array nums = [-1, 2, 1, -4], and target = 1.
 * 
 * The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums = nums.sort((a, b) => a - b);
    var length = nums.length;
    var closest = Number.MIN_SAFE_INTEGER;

    // debugger;
    for(var i = 0; i < length - 2; i++) {
        for(var j = length - 1; j >= 2; j--) {
            var mid = Math.floor((i + j) / 2);
            var prev = undefined;

            while(mid < j && mid > i) {
                var sum = nums[i] + nums[j] + nums[mid]
                if (sum > target) {
                    if (prev !== undefined && prev < target) {
                        if (Math.abs(prev - target) < Math.abs(closest - target)) {
                            closest = prev;
                        } else if (Math.abs(sum - target) < Math.abs(closest - target)) {
                            closest = sum;
                        }

                        break;
                    } else {
                        prev = sum;
                        mid--;    
                    }
                } else if (sum < target) {
                    if (prev !== undefined && prev > target) {
                        if (Math.abs(prev - target) < Math.abs(closest - target)) {
                            closest = prev;
                        } else if (Math.abs(sum - target) < Math.abs(closest - target)) {
                            closest = sum;
                        }

                        break;
                    } else {
                        prev = sum;
                        mid++;    
                    }
                } else {
                    // 相等
                    return target;
                }
            }

            if (Math.abs(prev - target) < Math.abs(closest - target)) {
                closest = prev;
            }
        }
    }

    return closest;
};

