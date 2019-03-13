/*
 * @lc app=leetcode id=451 lang=javascript
 *
 * [451] Sort Characters By Frequency
 *
 * https://leetcode.com/problems/sort-characters-by-frequency/description/
 *
 * algorithms
 * Medium (55.14%)
 * Total Accepted:    84.9K
 * Total Submissions: 154K
 * Testcase Example:  '"tree"'
 *
 * Given a string, sort it in decreasing order based on the frequency of
 * characters.
 * 
 * Example 1:
 * 
 * Input:
 * "tree"
 * 
 * Output:
 * "eert"
 * 
 * Explanation:
 * 'e' appears twice while 'r' and 't' both appear once.
 * So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid
 * answer.
 * 
 * 
 * 
 * Example 2:
 * 
 * Input:
 * "cccaaa"
 * 
 * Output:
 * "cccaaa"
 * 
 * Explanation:
 * Both 'c' and 'a' appear three times, so "aaaccc" is also a valid answer.
 * Note that "cacaca" is incorrect, as the same characters must be together.
 * 
 * 
 * 
 * Example 3:
 * 
 * Input:
 * "Aabb"
 * 
 * Output:
 * "bbAa"
 * 
 * Explanation:
 * "bbaA" is also a valid answer, but "Aabb" is incorrect.
 * Note that 'A' and 'a' are treated as two different characters.
 * 
 * 
 */
/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    var map = {};
    var list = [];
    var result = ''
    for(var i = 0; i < s.length; i++) {
        if (!map[s[i]]) {
            map[s[i]] = 0;
        }
        map[s[i]] += 1;
    }

    // debugger;
    Object.keys(map).forEach(function(v) {
        if (!list[map[v]]) {
            list[map[v]] = [];
        }

        list[map[v]].push(v);
    })

    for(var i = list.length - 1; i > 0; i--) {
        if (list[i]) {
            var len = list[i].length;
            for(var j = 0; j < len; j++) {
                for(var num = 0; num < i; num++) {
                    result += list[i][j];
                }
            }
        }
    }

    return result;
};

