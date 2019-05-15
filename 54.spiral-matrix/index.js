/*
 * @lc app=leetcode id=54 lang=javascript
 *
 * [54] Spiral Matrix
 */
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    var m = matrix.length - 1;
    if (m < 0) return [];
    var n = matrix[0].length - 1;
    if (n < 0) return [];
    var result = [];

    var min = Math.min(m, n);
    var even = 0;
    var odd = 0;

    // debugger;
    for(var i = 0; i <= min; i++) {
        // 偶数
        if (!(i % 2)) {
            for(var j = even; j <= n - even; j++) {
                result.push(matrix[even][j])
            }

            // if (i === min) break;
            for(var j = even + 1; j <= m - even; j++) {
                result.push(matrix[j][n - even])
            }
            even++;
        } else {
            for(var j = n - 1 - odd; j >= odd; j--) {
                result.push(matrix[m - odd][j])
            }
            
            // if (i === min) break;

            for(var j = m - 1 - odd; j >= odd + 1; j--) {
                result.push(matrix[j][odd])
            }
            odd++;
        }
    }

    return result;
};

