/*
 * @lc app=leetcode id=477 lang=javascript
 *
 * [477] Total Hamming Distance
 *
 * https://leetcode.com/problems/total-hamming-distance/description/
 *
 * algorithms
 * Medium (48.75%)
 * Total Accepted:    45.3K
 * Total Submissions: 93K
 * Testcase Example:  '[4,14,2]'
 *
 * The Hamming distance between two integers is the number of positions at
 * which the corresponding bits are different.
 * 
 * Now your job is to find the total Hamming distance between all pairs of the
 * given numbers.
 * 
 * 
 * Example:
 * 
 * Input: 4, 14, 2
 * 
 * Output: 6
 * 
 * Explanation: In binary representation, the 4 is 0100, 14 is 1110, and 2 is
 * 0010 (just
 * showing the four bits relevant in this case). So the answer will be:
 * HammingDistance(4, 14) + HammingDistance(4, 2) + HammingDistance(14, 2) = 2
 * + 2 + 2 = 6.
 * 
 * 注意 本题可以这样想，总共 32位，拿出每一位计算出 Hamming distance, 全部位置累加即是最终结果
 * 
 * Note:
 * 
 * Elements of the given array are in the range of 0  to 10^9
 * Length of the array will not exceed 10^4. 
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var totalHammingDistance = function (nums) {
    var count = 0;
    var length = nums.length;

    for(var i = 0; i < 32; i++) {
        var k = 0;
        for(var j = 0; j < length; j++) {
            k += (nums[j] >> i) & 1;
        }

        count += (length - k) * k
    }

    return count;
};

