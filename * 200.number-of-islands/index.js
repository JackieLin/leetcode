/*
 * @lc app=leetcode id=200 lang=javascript
 *
 * [200] Number of Islands
 *
 * 这是一道经典的 dfs 算法的题目
 * 注意理解题意，只要是相邻都是 1 并且被水围着才是正确的岛屿
 * 所以 1 情况的岛屿是
 * 
 * 1111
 * 11x1
 * 11x
 * 
 * https://leetcode.com/problems/number-of-islands/description/
 *
 * algorithms
 * Medium (40.37%)
 * Total Accepted:    308.1K
 * Total Submissions: 763.3K
 * Testcase Example:  '[["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]'
 *
 * Given a 2d grid map of '1's (land) and '0's (water), count the number of
 * islands. An island is surrounded by water and is formed by connecting
 * adjacent lands horizontally or vertically. You may assume all four edges of
 * the grid are all surrounded by water.
 * 
 * Example 1:
 * 
 * 
 * Input:
 * 11110
 * 11010
 * 11000
 * 00000
 * 
 * Output: 1
 * 
 * 
 * Example 2:
 * 
 * 
 * Input:
 * 11000
 * 11000
 * 00100
 * 00011
 * 
 * Output: 3
 * 
 */
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    var row = grid.length;
    var col = row ? grid[0].length : 0;
    var count = 0;

    if (!row) return 0;

    function dfs(r, c) {
        if (r < 0 || c < 0 || r >= row || c >= col) return;

        if (grid[r][c] === '0') return;

        grid[r][c] = '0'
        dfs(r - 1, c);
        dfs(r + 1, c);
        dfs(r, c - 1);
        dfs(r, c + 1);
    }

    for(var i = 0; i < row; i++) {
        for(var j = 0; j < col; j++) {
            if (grid[i][j] === '0') continue;
            count++;
            
            dfs(i, j)
        }
    }

    return count;
};

