/*
 * @lc app=leetcode id=661 lang=javascript
 *
 * [661] Image Smoother
 *
 * https://leetcode.com/problems/image-smoother/description/
 *
 * algorithms
 * Easy (48.14%)
 * Total Accepted:    32K
 * Total Submissions: 66.6K
 * Testcase Example:  '[[1,1,1],[1,0,1],[1,1,1]]'
 *
 * Given a 2D integer matrix M representing the gray scale of an image, you
 * need to design a smoother to make the gray scale of each cell becomes the
 * average gray scale (rounding down) of all the 8 surrounding cells and
 * itself.  If a cell has less than 8 surrounding cells, then use as many as
 * you can.
 * 
 * Example 1:
 * 
 * Input:
 * [[1,1,1],
 * ⁠[1,0,1],
 * ⁠[1,1,1]]
 * Output:
 * [[0, 0, 0],
 * ⁠[0, 0, 0],
 * ⁠[0, 0, 0]]
 * Explanation:
 * For the point (0,0), (0,2), (2,0), (2,2): floor(3/4) = floor(0.75) = 0
 * For the point (0,1), (1,0), (1,2), (2,1): floor(5/6) = floor(0.83333333) = 0
 * For the point (1,1): floor(8/9) = floor(0.88888889) = 0
 * 
 * 
 * 
 * Note:
 * 
 * The value in the given matrix is in the range of [0, 255].
 * The length and width of the given matrix are in the range of [1, 150].
 * 
 * 
 */
/**
 * @param {number[][]} M
 * @return {number[][]}
 */
var imageSmoother = function(M) {
    if (!M || (M && !M.length)) return M;
    var row = M.length;
    var col = M[0].length;
    var result = [];
    var count = 0;
    var num = 0;

    for(var i = 0; i < row; i++) {
        result[i] = [];
        for(var j = 0; j < col; j++) {
            count = 0;
            num = 0;

            for(var k = i - 1; k <= i + 1; k++) {
                if (k < 0 || k >= row) continue;
                for(var t = j - 1; t <= j + 1; t++) {
                    if (t < 0 || t >= col) continue;
                    num += M[k][t];
                    count += 1;
                }
            }

            result[i][j] = Math.floor(num / count);
        }
    }

    return result;
};

