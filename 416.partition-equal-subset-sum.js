/*
 * @lc app=leetcode id=416 lang=javascript
 *
 * [416] Partition Equal Subset Sum
 *
 * https://leetcode.com/problems/partition-equal-subset-sum/description/
 *
 * algorithms
 * Medium (40.19%)
 * Total Accepted:    79.9K
 * Total Submissions: 198.9K
 * Testcase Example:  '[1,5,11,5]'
 *
 * Given a non-empty array containing only positive integers, find if the array
 * can be partitioned into two subsets such that the sum of elements in both
 * subsets is equal.
 * 
 * Note:
 * 
 * 
 * Each of the array element will not exceed 100.
 * The array size will not exceed 200.
 * 
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: [1, 5, 11, 5]
 * 
 * Output: true
 * 
 * Explanation: The array can be partitioned as [1, 5, 5] and [11].
 * 
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [1, 2, 3, 5]
 * 
 * Output: false
 * 
 * Explanation: The array cannot be partitioned into equal sum subsets.
 * 
 * 
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
    var sum = 0;
    for (var num of nums) {
        sum += num;
    }

    if (!sum % 2) return false;
    var avg = sum / 2;
    var meno = {};

    var length = nums.length;

    function pick(start, end, value) {
        var result = [];
        if (meno[start]) {
            return meno[start];
        }
        for (var i = start; i < end; i++) {
            var v = value - nums[i];
            if (v > 0) {
                var data = pick(i + 1, end, v);
                if (data && data.length) {
                    for (var word of data) {
                        word[i] = true;
                        result.push(word)
                    }
                }
            } else if (v === 0) {
                result.push({ [i]: true })
            }
        }

        meno[start] = result;

        return result;
    }

    var datas = pick(0, length, avg);

    for(var data of datas) {
        var sum = 0;
        for(var i = 0; i < length; i++) {
            if (!data[i]) sum += nums[i];
        }

        // console.log(data)
        if (sum === avg) return true;
    }

    return false
};

