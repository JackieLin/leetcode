/*
 * @lc app=leetcode id=386 lang=javascript
 *
 * [386] Lexicographical Numbers
 *
 * https://leetcode.com/problems/lexicographical-numbers/description/
 *
 * algorithms
 * Medium (45.18%)
 * Total Accepted:    38K
 * Total Submissions: 84.2K
 * Testcase Example:  '13'
 *
 * Given an integer n, return 1 - n in lexicographical order.
 * 
 * For example, given 13, return: [1,10,11,12,13,2,3,4,5,6,7,8,9].
 * 
 * Please optimize your algorithm to use less time and space. The input size
 * may be as large as 5,000,000.
 * 
 */
/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function(n) {
    var map = {};
    var t;
    var result = [];
    for(var i = 1; i <= n; i++) {
        var item = String(i);
        t = map;
        for(var j = 0; j < item.length; j++) {
            if (!t[item[j]]) {
                t[item[j]] = {};
            }

            t = t[item[j]];
        }
        t['#'] = true;
    }

    function travel(t, perfix) {

        if (t['#']) result.push(Number(perfix));

        for(var key in t) {
            if(key !== '#') {
                travel(t[key], perfix + key);
            }
        }
    }

    travel(map, '');

    return result;
};

