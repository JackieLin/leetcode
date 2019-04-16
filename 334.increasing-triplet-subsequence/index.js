/*
 * @lc app=leetcode id=334 lang=javascript
 *
 * [334] Increasing Triplet Subsequence
 *
 * 用 num1， num2 分别表示最小的第二小的数，然后进行判断即可
 * https://leetcode.com/problems/increasing-triplet-subsequence/description/
 *
 * algorithms
 * Medium (39.51%)
 * Total Accepted:    88.7K
 * Total Submissions: 224.6K
 * Testcase Example:  '[1,2,3,4,5]'
 *
 * Given an unsorted array return whether an increasing subsequence of length 3
 * exists or not in the array.
 * 
 * Formally the function should:
 * 
 * Return true if there exists i, j, k 
 * such that arr[i] < arr[j] < arr[k] given 0 ≤ i < j < k ≤ n-1 else return
 * false.
 * 
 * Note: Your algorithm should run in O(n) time complexity and O(1) space
 * complexity.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: [1,2,3,4,5]
 * Output: true
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [5,4,3,2,1]
 * Output: false
 * 
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    if (nums.length < 3) return false;

    var min = nums[0];
    // var max = nums[nums.length - 1];
    
    // var start = 1;
    // var end = nums.length - 2;

    // while(start <= end) {
    //     if (nums[end] > min && nums[end] < max) {
    //         return true;
    //     }

    //     if (nums[start] <= min) {
    //         min = nums[start++];
    //     }

    //     if (nums[end] >= max) {
    //         max = nums[end--];
    //     }
    // }
    
    for(var i = 1; i < nums.length - 1; i++) {
        if (nums[i] <= min) {
            min = nums[i];
            continue;
        }

        for(var j = nums.length - 1; j > i; j--) {
            if (nums[i] < nums[j]) return true;
        }
    }
    return false;
};

