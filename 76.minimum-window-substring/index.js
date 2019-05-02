/*
 * @lc app=leetcode id=76 lang=javascript
 *
 * [76] Minimum Window Substring
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    var map = {};
    var min = Number.MAX_SAFE_INTEGER;
    var result = '';

    if (!t.length) {
        return '';
    }

    if (t.length === 1) {
        for(var i = 0; i < s.length; i++) {
            if (s[i] === t) return s[i]
        }    

        return '';
    }

    for (var i = 0; i < t.length; i++) {
        if (!map[t[i]]) {
            map[t[i]] = 1;
        } else {
            map[t[i]] = map[t[i]] + 1;
        }
    }

    // for (var i = 0; i < s.length; i++) {
    //     if (map[s[i]]) {
    //         points.push({
    //             i,
    //             c: s[i]
    //         })
    //     }
    // }

    // var temp;

    // // debugger;
    // for (var i = 0; i < points.length; i++) {
    //     temp = Object.assign({}, map);
    //     temp[points[i].c] -= 1;

    //     if (!temp[points[i].c]) {
    //         delete temp[points[i].c];
    //     }

    //     for (var j = i + 1; j < points.length; j++) {
    //         var char = points[j].c;
    //         if (char) {
    //             temp[char] -= 1;

    //             if (!temp[char]) {
    //                 delete temp[char];
    //             }

    //             // 找到
    //             if (!Object.keys(temp).length) {
    //                 var start1 = points[i].i;
    //                 var end1 = points[j].i;
    //                 if (min > end1 - start1) {
    //                     min = end1 - start1;
    //                     start = start1;
    //                     end = end1;
    //                 }
    //                 break;
    //             }
    //         }
    //     }
    // }

    // return s.substring(start, end + 1);

    // debugger;
    var dp = {};
    var match = true;
    for(var i = 0; i < s.length; i++) {
        if (map[s[i]]) {
            match = true;
            if (!dp[s[i]]) {
                dp[s[i]] = [];
            }
            dp[s[i]].push(i);
            min = i;
    
            for(var key in map) {
                if (dp[key] && dp[key].length >= map[key]) {
                    var ix = dp[key][dp[key].length - map[key]];
                    if (min > ix) {
                        min = ix;
                    }
                } else {
                    match = false;
                    break;
                }
            }

            if (match) {
                var data = s.substring(min, i + 1);
                if (!result || result.length > data.length) {
                    result = data;
                }    
            }
        }
    }

    return result;
};

