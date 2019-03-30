/*
 * @lc app=leetcode id=63 lang=javascript
 *
 * [63] Unique Paths II
 *
 * https://leetcode.com/problems/unique-paths-ii/description/
 *
 * algorithms
 * Medium (33.27%)
 * Total Accepted:    189.2K
 * Total Submissions: 568.7K
 * Testcase Example:  '[[0,0,0],[0,1,0],[0,0,0]]'
 *
 * A robot is located at the top-left corner of a m x n grid (marked 'Start' in
 * the diagram below).
 * 
 * The robot can only move either down or right at any point in time. The robot
 * is trying to reach the bottom-right corner of the grid (marked 'Finish' in
 * the diagram below).
 * 
 * Now consider if some obstacles are added to the grids. How many unique paths
 * would there be?
 * 
 * 
 * 
 * An obstacle and empty space is marked as 1 and 0 respectively in the grid.
 * 
 * Note: m and n will be at most 100.
 * 
 * Example 1:
 * 
 * 
 * Input:
 * [
 * [0,0,0],
 * [0,1,0],
 * [0,0,0]
 * ]
 * Output: 2
 * Explanation:
 * There is one obstacle in the middle of the 3x3 grid above.
 * There are two ways to reach the bottom-right corner:
 * 1. Right -> Right -> Down -> Down
 * 2. Down -> Down -> Right -> Right
 * 
 * 
 */
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    var row = obstacleGrid.length;
    if (!row) return 0;

    var col = obstacleGrid[0].length;
    if (!col) return 0;

    var end = [row - 1, col - 1];
    var memo = [];

    for(var i = 0; i < row; i++) {
        memo[i] = [];
        for(var j = 0; j < col; j++) {
            memo[i][j] = -1
        }
    }
    
    function dfs(start) {
        var count = 0;
        if (start[0] >= row || start[1] >= col) return 0;

        if (memo[start[0]][start[1]] !== -1) return memo[start[0]][start[1]];

        if (obstacleGrid[start[0]][start[1]]) {
            memo[start[0]][start[1]] = 0;
            return 0;
        }

        if (start[0] === end[0] && start[1] === end[1]) {
            memo[start[0]][start[1]] = count + 1;
            return memo[start[0]][start[1]];
        }

        count += dfs([start[0], start[1] + 1])

        count += dfs([start[0] + 1, start[1]]);

        memo[start[0]][start[1]] = count;

        return count;
    }

    return dfs([0, 0])
};

