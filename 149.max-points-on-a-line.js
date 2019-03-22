/*
 * @lc app=leetcode id=149 lang=javascript
 *
 * [149] Max Points on a Line
 *
 * https://leetcode.com/problems/max-points-on-a-line/description/
 *
 * algorithms
 * Hard (15.59%)
 * Total Accepted:    114.3K
 * Total Submissions: 733.2K
 * Testcase Example:  '[[1,1],[2,2],[3,3]]'
 *
 * Given n points on a 2D plane, find the maximum number of points that lie on
 * the same straight line.
 * 
 * Example 1:
 * 
 * 
 * Input: [[1,1],[2,2],[3,3]]
 * Output: 3
 * Explanation:
 * ^
 * | 
 * |        o
 * |     o
 * |  o  
 * +------------->
 * 0  1  2  3  4
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]
 * Output: 4
 * Explanation:
 * ^
 * |
 * |  o
 * |     o        o
 * |        o
 * |  o        o
 * +------------------->
 * 0  1  2  3  4  5  6
 * 
 * 
 */
/**
 * Definition for a point.
 * function Point(x, y) {
 *     this.x = x;
 *     this.y = y;
 * }
 */
/**
 * @param {Point[]} points
 * @return {number}
 */
var maxPoints = function (points) {
    var visited = {};

    function dfs(end, p1, p2) {
        if (!p1) {
            for(var i = 0; i < points.length; i++) {
                if (!visited[i]) {
                    visited[i] = true;
                    dfs(points[i], end);
                    visited[i] = false;
                }
            }
        } else if (!p2) {
            for(var i = 0; i < points.length; i++) {
                var item = points[i];
                if (
                    !visited[i] &&
                    (end[1] - p1[1]) * (item[0] - end[0]) === (item[1] - end[1]) * (end[0] - p1[0])
                ) {
                    visited[i] = true;
                    dfs(item, p1, end);
                    visited[i] = false;
                }
            }
        } else {
            for (var i = 0; i < points.length; i++) {
                if (
                    !visited[i] &&
                    (p2[0] - p1[0]) * (end[1] - p2[1]) === (p2[1] - p1[1]) * (end[0] - p2[0])
                ) {
                    visited[i] = true;
                    dfs(points[i], p1, p2);
                    visited[i] = false;
                }
            }
        }
    }

    for (var i = 0; i < points.length; i++) {
        visited[i] = true;
        dfs(points[i])
        visited = {};
    }
};

