/*
 * @lc app=leetcode id=378 lang=javascript
 *
 * [378] Kth Smallest Element in a Sorted Matrix
 */
/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    if (!matrix.length) return 0;

    var result = matrix[0]
    var len = matrix.length;
    var ix = 0
    var temp = ix
    for(var i = 0; i < len; i++) {
        for(var j = 1; j < len; j++) {
            while(matrix[j][i] >= matrix[0][ix] && ix < result.length) ix++
            if (j === 1) {
                temp = ix + 1;
            }

            result.splice(ix, 0, matrix[j][i]);
            ix++;
        }

        ix = temp;
    }

    // console.log(result)
    return result[k - 1];
};

