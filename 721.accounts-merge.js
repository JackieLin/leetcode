/*
 * @lc app=leetcode id=721 lang=javascript
 *
 * [721] Accounts Merge
 */
/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function(accounts) {
    var datas = [];
    var result = []
    var ix = -1;
    
    // debugger;

    for(var i = 0; i < accounts.length; i++) {
        var map = {};
        var [name, ...rest] = accounts[i];
        rest.forEach(v => map[v] = true);
        datas.push({name, map});
    }

    // debugger;

    function dfs(start) {
        var item = datas[start];
        item.seen = true;

        for(var key in item.map) {
            for(var i = 0; i < datas.length; i++) {
                // 存在
                if (datas[i].name === item.name && !datas[i].seen && datas[i].map[key]) {
                    datas[i].seen = true;
                    for(var ikey in datas[i].map) {
                        if (!item.map[ikey]) item.map[ikey] = true;
                    }
                }
            }
        }

        return item;
    }

    for(var i = 0; i < datas.length; i++) {
        if (!datas[i].seen) {
            var item = dfs(i);
            result.push([item.name, ...Object.keys(item.map).map(v => v).sort()]);
        }
    }

    return result;
};

