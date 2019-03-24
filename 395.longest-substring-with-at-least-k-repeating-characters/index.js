/*
 * @lc app=leetcode id=395 lang=javascript
 *
 * [395] Longest Substring with At Least K Repeating Characters
 *
 * https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/description/
 *
 * algorithms
 * Medium (38.06%)
 * Total Accepted:    43.1K
 * Total Submissions: 113.3K
 * Testcase Example:  '"aaabb"\n3'
 *
 * 
 * Find the length of the longest substring T of a given string (consists of
 * lowercase letters only) such that every character in T appears no less than
 * k times.
 * 
 * 
 * Example 1:
 * 
 * Input:
 * s = "aaabb", k = 3
 * 
 * Output:
 * 3
 * 
 * The longest substring is "aaa", as 'a' is repeated 3 times.
 * 
 * 
 * 
 * Example 2:
 * 
 * Input:
 * s = "ababbc", k = 2
 * 
 * Output:
 * 5
 * 
 * The longest substring is "ababb", as 'a' is repeated 2 times and 'b' is
 * repeated 3 times.
 * 
 * 
 */
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) {
    var max = 0;

    if (!s) return max;
    if (k === 1) return s.length;

    function division(s) {
        var map = {}
        var isMatch = true;
        var subs = [s];
        for(var i = 0; i < s.length; i++) {
            if (!map[s[i]]) {
                map[s[i]] = 0;
            }

            map[s[i]] = map[s[i]] + 1;
        }

        for(var key in map) {
            var temp = [];
            if (map[key] < k) {
                isMatch = false;
                for(var i = 0; i < subs.length; i++) {
                    temp = temp.concat(subs[i].split(key))
                }
                subs = temp;
            }
        }

        if (isMatch) {
            if (max < s.length) {
                max = s.length;
            }
        } else {
            for(var i = 0; i < subs.length; i++) {
                if (subs[i]) {
                    division(subs[i]);
                }
            }
        }
    }

    division(s)
    return max
};

