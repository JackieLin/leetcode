/*
 * @lc app=leetcode id=413 lang=javascript
 *
 * [413] Arithmetic Slices
 *
 * https://leetcode.com/problems/arithmetic-slices/description/
 *
 * cur = cur + 1;
 * sum = sum + cur
 * 
 * algorithms
 * Medium (55.43%)
 * Total Accepted:    58.8K
 * Total Submissions: 106.1K
 * Testcase Example:  '[1,2,3,4]'
 *
 * A sequence of number is called arithmetic if it consists of at least three
 * elements and if the difference between any two consecutive elements is the
 * same.
 * 
 * For example, these are arithmetic sequence:
 * 1, 3, 5, 7, 9
 * 7, 7, 7, 7
 * 3, -1, -5, -9
 * 
 * The following sequence is not arithmetic. 1, 1, 2, 5, 7 
 * 
 * 
 * A zero-indexed array A consisting of N numbers is given. A slice of that
 * array is any pair of integers (P, Q) such that 0 
 * 
 * A slice (P, Q) of array A is called arithmetic if the sequence:
 * ⁠   A[P], A[p + 1], ..., A[Q - 1], A[Q] is arithmetic. In particular, this
 * means that P + 1 < Q.
 * 
 * The function should return the number of arithmetic slices in the array
 * A. 
 * 
 * 
 * Example:
 * 
 * A = [1, 2, 3, 4]
 * 
 * return: 3, for 3 arithmetic slices in A: [1, 2, 3], [2, 3, 4] and [1, 2, 3,
 * 4] itself.
 * 
 */
/**
 * @param {number[]} A
 * @return {number}
 */
var numberOfArithmeticSlices = function(A) {
    var len = A.length;
    var num = 0;
    for(var i = 0; i <= len - 3; i++) {
        for(var j = i + 2; j < len; j++) {
            var sequence = A[i + 1] - A[i];
            for(var k = i + 2; k <= j; k++) {
                if (A[k] - A[k - 1] !== sequence) break;
            }
            if (k > j) num++;
        }
    }

    return num;
};

