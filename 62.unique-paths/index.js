/*
 * @lc app=leetcode id=62 lang=javascript
 *
 * [62] Unique Paths
 *
 * https://leetcode.com/problems/unique-paths/description/
 *
 * algorithms
 * Medium (46.82%)
 * Total Accepted:    269.8K
 * Total Submissions: 576.2K
 * Testcase Example:  '3\n2'
 *
 * A robot is located at the top-left corner of a m x n grid (marked 'Start' in
 * the diagram below).
 * 
 * The robot can only move either down or right at any point in time. The robot
 * is trying to reach the bottom-right corner of the grid (marked 'Finish' in
 * the diagram below).
 * 
 * How many possible unique paths are there?
 * 
 * 
 * Above is a 7 x 3 grid. How many possible unique paths are there?
 * 
 * Note: m and n will be at most 100.
 * 
 * Example 1:
 * 
 * 
 * Input: m = 3, n = 2
 * Output: 3
 * Explanation:
 * From the top-left corner, there are a total of 3 ways to reach the
 * bottom-right corner:
 * 1. Right -> Right -> Down
 * 2. Right -> Down -> Right
 * 3. Down -> Right -> Right
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: m = 7, n = 3
 * Output: 28
 * 
 */
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    var memo = [];

    for(var i = 0; i < n; i++) {
        memo[i] = []
        for(var j = 0; j < m; j++) {
            memo[i][j] = -1;
        }
    }

    function dfs(start, end) {
        var count = 0
        if (start[0] >= n || start[1] >= m) return 0;
        if (memo[start[0]][start[1]] !== -1) return memo[start[0]][start[1]];
        if (start[0] === end[0] && start[1] === end[1]) {
            memo[start[0]][start[1]] = count + 1;
            return memo[start[0]][start[1]];
        }

        // Right
        count += dfs([start[0], start[1] + 1], end);

        // down
        count += dfs([start[0] + 1, start[1]], end);

        memo[start[0]][start[1]] = count;

        return count;
    }

    return dfs([0,0], [n - 1, m - 1]);
};

