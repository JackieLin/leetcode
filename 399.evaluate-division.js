/*
 * @lc app=leetcode id=399 lang=javascript
 *
 * [399] Evaluate Division
 */
/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
    var map = {}
    var result = equations;

    for (var i = 0; i < equations.length; i++) {
        var item = equations[i]
        map[`${item[0]}${item[1]}`] = values[i]
        if (!map[`${item[1]}${item[0]}`]) {
            map[`${item[1]}${item[0]}`] = 1 / values[i];
        }
    }

    // debugger;
    while (result.length > 1) {
        var left = []
        for (var i = 0; i < result.length - 1; i++) {
            var iItem = result[i]
            for (var j = i + 1; j < result.length; j++) {
                var jItem = result[j]
                var itemMap = {}
                itemMap[iItem[0]] = true;
                itemMap[iItem[1]] = true;
                itemMap[jItem[0]] = true;
                itemMap[jItem[1]] = true;
                // 全部不相等
                if (Object.keys(itemMap) === 4) continue;

                if (iItem[1] === jItem[0]) {
                    map[`${iItem[0]}${jItem[1]}`] = values[i] * values[j]
                    map[`${jItem[1]}${iItem[0]}`] = 1 / map[`${iItem[0]}${jItem[1]}`]
                    left.push([iItem[0], jItem[1]])
                } else if (iItem[1] === jItem[1]) {
                    map[`${iItem[0]}${jItem[0]}`] = values[i] * (1 / values[j])
                    map[`${jItem[0]}${iItem[0]}`] = 1 / map[`${iItem[0]}${jItem[0]}`]
                    left.push([iItem[0], jItem[0]]);
                } else if (iItem[0] === jItem[0]) {
                    map[`${jItem[1]}${iItem[1]}`] = values[i] * (1 / values[j])
                    map[`${iItem[1]}${jItem[1]}`] = 1 / map[`${jItem[1]}${iItem[1]}`]
                    left.push([jItem[1], iItem[1]])
                } else if (iItem[0] === jItem[1]) {
                    map[`${jItem[0]}${iItem[1]}`] = values[i] * values[j]
                    map[`${iItem[1]}${jItem[0]}`] = 1 / map[`${jItem[0]}${iItem[1]}`]
                    left.push([jItem[0], iItem[1]])
                }
            }
        }
        result = left;
    }

    var data = []
    for(var i = 0; i < queries.length; i++) {
        if (map[`${queries[i][0]}${queries[i][1]}`]) {
            data.push(map[`${queries[i][0]}${queries[i][1]}`])
        } else {
            data.push(-1.0)
        }
    }

    return data;
};

