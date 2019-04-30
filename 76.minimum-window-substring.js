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
var minWindow = function(s, t) {
    var map = {};
    var points = [];
    var min = Number.MAX_SAFE_INTEGER;
    var start, end;

    for(var i = 0; i < t.length; i++) {
        if (map[t[i]]) {
            map[t[i]] = 0;
        } else {
            map[t[i]] = map[t[i]] + 1;
        }
    }

    for(var i = 0; i < s.length; i++) {
        if (map[s[i]]) {
            points.push({
                i,
                c: s[i]
            })
        }
    }

    var temp;
    
    for(var i = 0; i < points.length; i++) {
        temp = map;
        temp[points[i].c] -= 1;

        if (!temp[points[i].c]) {
            delete temp[points[i].c];
        }

        for(var j = i + 1; j < points.length; j++) {
            temp[points[j].c] -= 1;

            if (!temp[points[j].c]) {
                delete temp[points[i].c];
            }

            // 找到
            if (!Object.keys(temp).length) {
                if (min > j - i) {
                    min = j - i;
                    start = i;
                    end = j;
                }    
                break;
            }
        }
    }

    return s.substring(start, end);
};

