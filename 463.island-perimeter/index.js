/*
 * @lc app=leetcode id=463 lang=javascript
 *
 * [463] Island Perimeter
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    if (!grid.length) return 0;
    if (!grid[0].length) return 0;

    let perimeter = 0;
    const row = grid.length;
    const column = grid[0].length

    for(let i = 0; i < row; i++) {
        for(let j = 0; j < column; j++) {
            if (grid[i][j] === 1) {
                // 上
                if (i - 1 < 0 || grid[i - 1][j] === 0) {
                    perimeter += 1;
                }
                // 下
                if (i + 1 >= row || grid[i + 1][j] === 0) {
                    perimeter += 1;
                }
                // 左
                if (j - 1 < 0 || grid[i][j - 1] === 0) {
                    perimeter += 1;
                }
                // 右
                if (j + 1 >= column || grid[i][j + 1] === 0) {
                    perimeter += 1;
                }
            }
        }
    }

    return perimeter;
};
// @lc code=end

