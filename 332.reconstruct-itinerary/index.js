/*
 * @lc app=leetcode id=332 lang=javascript
 *
 * [332] Reconstruct Itinerary
 */
/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function (tickets) {
    var map = {}
    for (var i = 0; i < tickets.length; i++) {
        var [from, to] = tickets[i]
        if (!map[from]) {
            map[from] = []
        }

        map[from].push(to)
    }

    for (var key in map) {
        map[key] = map[key].sort()
    }

    // debugger;
    function dfs(node) {
        var result = [node]
        // 结束
        if (!Object.keys(map).length) {
            return result;
        }
        // 不存在，直接返回
        if (!map[node] || !map[node].length) return [];

        for (var i = 0; i < map[node].length; i++) {
            var item = map[node][i];
            map[node].splice(i, 1);
            if (!map[node].length) {
                delete map[node];
            }
            var children = dfs(item);
            if (children && children.length) {
                result = result.concat(children)
                return result;
            }

            if (!map[node]) {
                map[node] = [];
            }
            map[node].splice(i, 0, item)
        }
    }

    return dfs('JFK');
};