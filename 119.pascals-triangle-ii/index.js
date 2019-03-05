/*
 * @lc app=leetcode id=119 lang=javascript
 *
 * [119] Pascal's Triangle II
 *
 * https://leetcode.com/problems/pascals-triangle-ii/description/
 *
 * algorithms
 * Easy (42.09%)
 * Total Accepted:    185.9K
 * Total Submissions: 441.7K
 * Testcase Example:  '3'
 *
 * Given a non-negative index k where k ≤ 33, return the kth index row of the
 * Pascal's triangle.
 * 
 * Note that the row index starts from 0.
 * 
 * 
 * In Pascal's triangle, each number is the sum of the two numbers directly
 * above it.
 * 
 * Example:
 * 
 * 
 * Input: 3
 * Output: [1,3,3,1]
 * 
 * 
 * Follow up:
 * 
 * Could you optimize your algorithm to use only O(k) extra space?
 * 
 */
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    var result = [[1], [1,1]];
    for(var i = 2; i <= rowIndex; i++) {
        result[i] = [];
        // debugger;
        for(var j = 0; j <= i; j++) {
            if (j === 0 || j === i) {
                result[i][j] = 1;
            } else {
                result[i][j] = result[i - 1][j - 1] + result[i - 1][j];
            }
        }
    }

    return result[rowIndex];
};

