/*
 * @lc app=leetcode id=149 lang=javascript
 *
 * [149] Max Points on a Line
 *  斜率相同，放一个 map 就可以了其实，map 的每一项便是斜率
 * wiki：https://leetcode.com/problems/max-points-on-a-line/discuss/47230/Simple-JavaScript-solution
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
 * if (pi[0] === end[0] && pi[1] === end[1] && !visited[i]) {
 * BigInt((end[1] - p1[1])) * BigInt((item[0] - end[0])) === BigInt((item[1] - end[1])) * BigInt((end[0] - p1[0]))
 * if (pi.x === end.x && pi.y === end.y && !visited[i]) {
 * BigInt((end.y - p1.y)) * BigInt((item.x - end.x)) === BigInt((item.y - end.y)) * BigInt((end.x - p1.x))
 */
/**
 * @param {Point[]} points
 * @return {number}
 */
var maxPoints = function (points) {
    var visited = {};
    var max = 0;
    if (!points) return 0;
    if (points && points.length === 1) return 1;

    function dfs(end, p1, count) {
        if (!p1) {
            var same = 1;
            for(var i = 0; i < points.length; i++) {
                var pi = points[i];
                if (pi.x === end.x && pi.y === end.y && !visited[i]) {
                    same++;
                } else if (!visited[i]) {
                    visited[i] = true;
                    dfs(points[i], end, 2);
                    visited[i] = false;
                }
            }

            if (max < same) {
                max = same;
            }
        } else {
            for(var i = 0; i < points.length; i++) {
                var item = points[i];
                if (
                    !visited[i] &&
                    BigInt((end.y - p1.y)) * BigInt((item.x - end.x)) === BigInt((item.y - end.y)) * BigInt((end.x - p1.x))
                ) {
                    visited[i] = true;
                    dfs(end, p1, count + 1);
                    visited[i] = false;
                    break;
                }
            }

            if (max < count) {
                max = count;
            }
        }
    }

    for (var i = 0; i < points.length; i++) {
        visited[i] = true;
        dfs(points[i])
        visited = {};
    }

    return max;
};

