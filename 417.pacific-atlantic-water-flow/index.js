/*
 * @lc app=leetcode id=417 lang=javascript
 *
 * [417] Pacific Atlantic Water Flow
 */
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var pacificAtlantic = function (matrix) {
    var result = []

    var m = matrix.length;
    if (!m) return result
    var n = matrix[0].length;
    if (!n) return result
    
    var map = []

    var points = {}
    points[-1] = {}
    for(var i = 0; i <= m; i++) {
        map[i] = []
        points[i] = {}
    }

    // debugger

    function dfs(i, j) {        
        // 左边
        if (i === -1 || j === -1) {
            return { p: true }
        } else if (i === m || j === n) {
            return { a: true }
        }

        if (map[i][j]) return map[i][j]
        var result = {}

        // 左边
        if (!j || matrix[i][j] >= matrix[i][j - 1]) {
            if (!points[i][j - 1]) {
                points[i][j - 1] = true
                Object.assign(result, dfs(i, j - 1))
                delete points[i][j - 1]
            }
        }

        if (result.p && result.a) {
            map[i][j] = result
            return result;
        }

        // 右边
        if (j === n - 1 || matrix[i][j] >= matrix[i][j + 1]) {
            if (!points[i][j + 1]) {
                points[i][j + 1] = true
                Object.assign(result, dfs(i, j + 1))
                delete points[i][j + 1]
            }
        }

        if (result.p && result.a) {
            map[i][j] = result

            return result;
        }

        // 上
        if (!i || matrix[i][j] >= matrix[i - 1][j]) {
            if (!points[i - 1][j]) {
                points[i - 1][j] = true
                Object.assign(result, dfs(i - 1, j))
                delete points[i - 1][j]
            }
        }

        if (result.p && result.a) {
            map[i][j] = result

            return result;
        }
        // 下
        if (i === m - 1 || matrix[i][j] >= matrix[i + 1][j]) {
            if (!points[i + 1][j]) {
                points[i + 1][j] = true
                Object.assign(result, dfs(i + 1, j))
                delete points[i + 1][j]
            }
        }

        if (result.p && result.a) {
            map[i][j] = result

            return result;
        }

        // 全部都没有
        return result
    }

    for(var i = 0; i < m; i++) {
        for(var j = 0; j < n; j++) {
            points[i][j] = true
            var item = dfs(i, j)
            map[i][j] = item
            if (item.p && item.a) {
                result.push([i, j])
            }
            delete points[i][j]
        }
    }

    return result;
};

