/*
 * @lc app=leetcode id=647 lang=javascript
 *
 * [647] Palindromic Substrings
 *
 * https://leetcode.com/problems/palindromic-substrings/description/
 *
 * algorithms
 * Medium (56.51%)
 * Total Accepted:    92.7K
 * Total Submissions: 164.1K
 * Testcase Example:  '"abc"'
 *
 * Given a string, your task is to count how many palindromic substrings in
 * this string.
 * 
 * The substrings with different start indexes or end indexes are counted as
 * different substrings even they consist of same characters.
 * 
 * Example 1:
 * 
 * 
 * Input: "abc"
 * Output: 3
 * Explanation: Three palindromic strings: "a", "b", "c".
 * 
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "aaa"
 * Output: 6
 * Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
 * 
 * 
 * 
 * 
 * Note:
 * 
 * 
 * The input string length won't exceed 1000.
 * 
 * 
 * 
 * 
 */
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    var length = s.length;
    var result = 0;
    var map = {};

    // debugger;
    function isPalind(sub) {
        var start = 0;
        var end = sub.length - 1;
        while(start < end) {
            if (sub[start++] === sub[end--]) continue;
            return false;
        }

        return true;
    }

    function dfs(start, prev) {
        // if (map[start + ',' + prev] !== undefined) return map[start];
        var count = 0;
        prev += s[start];
        
        if (isPalind(prev)) {
            count++;
        }

        if (start + 1 < length) {
            count += dfs(start + 1, prev)
        }

        // map[start] = count;
        return count;
    }

    for(var i = 0; i < length; i++) {
        result += dfs(i, '')
    }

    return result;
};

