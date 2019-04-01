/*
 * @lc app=leetcode id=131 lang=javascript
 *
 * [131] Palindrome Partitioning
 *
 * https://leetcode.com/problems/palindrome-partitioning/description/
 *
 * algorithms
 * Medium (40.06%)
 * Total Accepted:    156.2K
 * Total Submissions: 390K
 * Testcase Example:  '"aab"'
 *
 * Given a string s, partition s such that every substring of the partition is
 * a palindrome.
 * 
 * Return all possible palindrome partitioning of s.
 * 
 * Example:
 * 
 * 
 * Input: "aab"
 * Output:
 * [
 * ⁠ ["aa","b"],
 * ⁠ ["a","a","b"]
 * ]
 * 
 * 
 */
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    if (!s) return [[]]
    function isPalindrome(s) {
        var start = 0;
        var end = s.length - 1;
        while(start < end) {
            if (s[start++] !== s[end--]) return false;
        }

        return true;
    }

    function division(s) {
        if (s.length === 1) {
            return [[s]];
        }

        var item = [];
        if (isPalindrome(s)) {
            item.push([s])
        }
        for(var i = 1; i < s.length; i++) {
            var left = s.substr(0, i);
            if (isPalindrome(left)) {
                var right = division(s.substr(i, s.length));
                for(var j = 0; j < right.length; j++) {
                    right[j].unshift(left);
                    item.push(right[j])
                }
            }
        }

        return item;
    }

    return division(s);
};

