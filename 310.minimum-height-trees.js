/*
 * @lc app=leetcode id=310 lang=javascript
 *
 * [310] Minimum Height Trees
 */
// findMinHeightTrees(6, [[0, 3], [1, 3], [2, 3], [4, 3], [5, 4]])
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {
    var length = edges.length;
    var min = Number.MAX_SAFE_INTEGER;
    var result = []
    var max = Number.MIN_SAFE_INTEGER;

    function dfs(start, ix, depth) {
        for(var i = 0; i < length; i++) {
            if (ix.indexOf(i) >= 0) continue;
            // 连通
            if (edges[i][0] === start) {
                ix.push(i)
                dfs(edges[i][1], ix, depth + 1)
                ix.pop()
            } else if (edges[i][1] === start) {
                ix.push(i)
                dfs(edges[i][0], ix, depth + 1)
                ix.pop()
            }
        }

        max = Math.max(depth, max)
    }

    // debugger
    for(var i = 0; i < n; i++) {
        dfs(i, [], 0)
        if (max < min) {
            min = max;
            result = [i]
        } else if (max === min) {
            result.push(i)
        }

        max = Number.MIN_SAFE_INTEGER;
    }

    return result
};

