/*
 * @lc app=leetcode id=399 lang=javascript
 * 
 * [399] Evaluate Division
 */

// calcEquation([ ["a", "b"], ["b", "c"] ], [2.0, 3.0], [ ["a", "c"], ["b", "a"], ["a", "e"], ["a", "a"], ["x", "x"] ])
// calcEquation([["a","aa"]], [9.0], [["aa","a"],["aa","aa"]])

// [["x1","x2"],["x2","x3"],["x3","x4"],["x4","x5"]]
// [3.0,4.0,5.0,6.0]
// [["x1","x5"],["x5","x2"],["x2","x4"],["x2","x2"],["x2","x9"],["x9","x9"]]
// [360.0,0.00833,20.0,1.0,-1.0,-1.0]
/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
    var map = {}
    var result = equations;

    // debugger;
    for (var i = 0; i < equations.length; i++) {
        var item = equations[i]
        map[`${item[0]}-${item[1]}`] = values[i]
        if (!map[`${item[1]}-${item[0]}`]) {
            map[`${item[1]}-${item[0]}`] = 1 / values[i];
        }
        map[`${item[0]}-${item[0]}`] = 1;
        map[`${item[1]}-${item[1]}`] = 1;
    }

    // debugger; 
    while (result.length > 1) {
        var left = []
        for (var i = 0; i < result.length - 1; i++) {
            var iItem = result[i]
            for (var key in map) {
                var jItem = key.split('-')
                if (jItem[0] === jItem[1]) continue;
                if (iItem[0] === jItem[0] && iItem[1] === jItem[1]) continue;
                if (iItem[0] === jItem[1] && iItem[1] === jItem[0]) continue;
                // var itemMap = {}
                // itemMap[iItem[0]] = true;
                // itemMap[iItem[1]] = true;
                // itemMap[jItem[0]] = true;
                // itemMap[jItem[1]] = true;
                // // 全部不相等
                // if (Object.keys(itemMap).length === 4) continue;

                if (iItem[1] === jItem[0] && !map[`${iItem[0]}-${jItem[1]}`]) {
                    map[`${iItem[0]}-${jItem[1]}`] = map[`${iItem[0]}-${iItem[1]}`] * map[key]
                    map[`${jItem[1]}-${iItem[0]}`] = 1 / map[`${iItem[0]}-${jItem[1]}`]
                    left.push([iItem[0], jItem[1]])
                } else if (iItem[1] === jItem[1] && !map[`${iItem[0]}-${jItem[0]}`]) {
                    map[`${iItem[0]}-${jItem[0]}`] = map[`${iItem[0]}-${iItem[1]}`] * (1 / map[key])
                    map[`${jItem[0]}-${iItem[0]}`] = 1 / map[`${iItem[0]}-${jItem[0]}`]
                    left.push([iItem[0], jItem[0]]);
                } else if (iItem[0] === jItem[0] && !map[`${jItem[1]}-${iItem[1]}`]) {
                    map[`${jItem[1]}-${iItem[1]}`] = map[`${iItem[0]}-${iItem[1]}`] * (1 / map[key])
                    map[`${iItem[1]}-${jItem[1]}`] = 1 / map[`${jItem[1]}-${iItem[1]}`]
                    left.push([jItem[1], iItem[1]])
                } else if (iItem[0] === jItem[1] && !map[`${jItem[0]}-${iItem[1]}`]) {
                    map[`${jItem[0]}-${iItem[1]}`] = map[`${iItem[0]}-${iItem[1]}`] * map[key]
                    map[`${iItem[1]}-${jItem[0]}`] = 1 / map[`${jItem[0]}-${iItem[1]}`]
                    left.push([jItem[0], iItem[1]])
                }
            }
        }
        result = left;
    }

    var data = []
    for(var i = 0; i < queries.length; i++) {
        if (map[`${queries[i][0]}-${queries[i][1]}`]) {
            data.push(map[`${queries[i][0]}-${queries[i][1]}`])
        } else {
            data.push(-1.0)
        }
    }

    return data;
};

