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
// var findMinHeightTrees = function(n, edges) {
//     var length = edges.length;
//     var min = Number.MAX_SAFE_INTEGER;
//     var result = []
//     var max = Number.MIN_SAFE_INTEGER;
//     var out = false

//     function dfs(start, ix, depth) {
//         if (out) return
//         for(var i = 0; i < length; i++) {
//             if (out) break
//             if (ix.indexOf(i) >= 0) continue;
//             // 连通
//             if (edges[i][0] === start) {
//                 ix.push(i)
//                 dfs(edges[i][1], ix, depth + 1)
//                 ix.pop()
//             } else if (edges[i][1] === start) {
//                 ix.push(i)
//                 dfs(edges[i][0], ix, depth + 1)
//                 ix.pop()
//             }
//         }

//         max = Math.max(depth, max)

//         if (max > min) out = true
//     }

//     // debugger
//     for(var i = 0; i < n; i++) {
//         dfs(i, [], 0)
//         if (max < min) {
//             min = max;
//             result = [i]
//         } else if (max === min) {
//             result.push(i)
//         }

//         out = false
//         max = Number.MIN_SAFE_INTEGER;
//     }

//     return result
// };

var findMinHeightTrees = function(n, edges) {
    if (n === 1) return [0];

    var leaves = [];
    var map = {}

    for(var i = 0; i < edges.length; i++) {
        if (!map[edges[i][0]]) {
            map[edges[i][0]] = {}
        }

        map[edges[i][0]][edges[i][1]] = true

        if (!map[edges[i][1]]) {
            map[edges[i][1]] = {}
        }

        map[edges[i][1]][edges[i][0]] = true
    }

    for(var key in map) {
        if (Object.keys(map[key]).length === 1) {
            leaves.push({
                key,
                value: Object.keys(map[key])[0]
            })
        }
    }

    while(n > 2) {
        n -= leaves.length;
        var newLeaves = []
        for(var i = 0; i < leaves.length; i++) {
            delete map[leaves[i].key]
            // console.log(leaves[i].key)
            delete map[leaves[i].value][leaves[i].key]

            if (Object.keys(map[leaves[i].value]).length === 1) {
                newLeaves.push({
                    key: leaves[i].value,
                    value: Object.keys(map[leaves[i].value])[0]
                })
            }
        }

        leaves = newLeaves
    }

    return Object.keys(map).map(v => Number(v))
}

