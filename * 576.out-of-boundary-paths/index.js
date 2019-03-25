/*
 * @lc app=leetcode id=576 lang=javascript
 *
 * [576] Out of Boundary Paths
 *
 * https://leetcode.com/problems/out-of-boundary-paths/description/
 *
 * algorithms
 * Medium (31.42%)
 * Total Accepted:    15.9K
 * Total Submissions: 50.6K
 * Testcase Example:  '2\n2\n2\n0\n0'
 *
 * There is an m by n grid with a ball. Given the start coordinate (i,j) of the
 * ball, you can move the ball to adjacent cell or cross the grid boundary in
 * four directions (up, down, left, right). However, you can at most move N
 * times. Find out the number of paths to move the ball out of grid boundary.
 * The answer may be very large, return it after mod 10^9 + 7.
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: m = 2, n = 2, N = 2, i = 0, j = 0
 * Output: 6
 * Explanation:
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: m = 1, n = 3, N = 3, i = 0, j = 1
 * Output: 12
 * Explanation:
 * 
 * 
 * 
 * 
 * 
 * Note:
 * 
 * 
 * Once you move the ball out of boundary, you cannot move it back.
 * The length and height of the grid is in range [1,50].
 * N is in range [0,50].
 * 
 * 
 */
/**
 * @param {number} m
 * @param {number} n
 * @param {number} N
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
var findPaths = function(m, n, N, i, j) {
    var M = Math.pow(10, 9) + 7;
    var memo = []
    for(var a = 0; a < m; a++) {
        memo[a] = []
        for(var b = 0; b < n; b++) {
            memo[a][b] = []
            for(var c = 0; c < N + 1; c++) {
                memo[a][b][c] = -1;
            }
        }
    }

    // debugger;
    function dfs(m,n, N, i, j) {
        if (i === m || j === n || i < 0 || j < 0) {
            return 1;
        }

        if (N === 0) {
            return 0;
        }

        if (memo[i][j][N] !== -1) {
            return memo[i][j][N];
        }

        memo[i][j][N] = ((dfs(m,n,N-1,i-1,j)+dfs(m,n,N-1,i+1,j))%M+(dfs(m,n,N-1,i,j-1)+dfs(m,n,N-1,i,j+1))%M)%M;
        return memo[i][j][N]
    }

    return dfs(m,n,N,i,j);
};