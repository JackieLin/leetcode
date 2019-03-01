/*
 * @lc app=leetcode id=73 lang=javascript
 *
 * [73] Set Matrix Zeroes
 *
 * https://leetcode.com/problems/set-matrix-zeroes/description/
 *
 * algorithms
 * Medium (38.93%)
 * Total Accepted:    190.4K
 * Total Submissions: 489K
 * Testcase Example:  '[[1,1,1],[1,0,1],[1,1,1]]'
 *
 * Given a m x n matrix, if an element is 0, set its entire row and column to
 * 0. Do it in-place.
 * 
 * Example 1:
 * 
 * 
 * Input: 
 * [
 * [1,1,1],
 * [1,0,1],
 * [1,1,1]
 * ]
 * Output: 
 * [
 * [1,0,1],
 * [0,0,0],
 * [1,0,1]
 * ]
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: 
 * [
 * [0,1,2,0],
 * [3,4,5,2],
 * [1,3,1,5]
 * ]
 * Output: 
 * [
 * [0,0,0,0],
 * [0,4,5,0],
 * [0,3,1,0]
 * ]
 * 
 * 
 * Follow up:
 * 
 * 
 * A straight forward solution using O(mn) space is probably a bad idea.
 * A simple improvement uses O(m + n) space, but still not the best
 * solution.
 * Could you devise a constant space solution?
 * 
 * 
 */
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    var rows = [];
    var cols = [];
    var rowLen = matrix.length;
    if (!rowLen) return matrix
    var colLen = matrix[0].length;
    var row, col;

    for(var i = 0; i < rowLen; i++) {
        for(var j = 0; j < colLen; j++) {
            if (matrix[i][j] === 0) {
                rows.push(i);
                cols.push(j);
            }
        } 
    }

    for(var i = 0; i < rows.length; i++) {
        row = rows[i];
        col = cols[i];

        for(var j = 0; j < colLen; j++) {
            matrix[row][j] = 0;
        }
        
        for(var j = 0; j < rowLen; j++) {
            matrix[j][col] = 0;
        }
    }

    return matrix;
};

