/*
 * @lc app=leetcode id=387 lang=javascript
 *
 * [387] First Unique Character in a String
 *
 * https://leetcode.com/problems/first-unique-character-in-a-string/description/
 *
 * algorithms
 * Easy (49.29%)
 * Total Accepted:    235.1K
 * Total Submissions: 476.9K
 * Testcase Example:  '"leetcode"'
 *
 * 
 * Given a string, find the first non-repeating character in it and return it's
 * index. If it doesn't exist, return -1.
 * 
 * Examples:
 * 
 * s = "leetcode"
 * return 0.
 * 
 * s = "loveleetcode",
 * return 2.
 * 
 * 
 * 
 * 
 * Note: You may assume the string contain only lowercase letters.
 * 
 */
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    var map = {};
    for(var i = 0; i < s.length; i++) {
        if (map[s[i]] === undefined) {
            map[s[i]] = 0;
        }
        map[s[i]] = map[s[i]] + 1;
    }

    for(var i = 0; i < s.length; i++) {
        if (map[s[i]] === 1) return i;
    }

    return -1;
};

