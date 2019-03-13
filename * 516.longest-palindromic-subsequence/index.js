/*
 * @lc app=leetcode id=516 lang=javascript
 *
 * [516] Longest Palindromic Subsequence
 * 
 * 注意，是子序列，bacb =》 bab 或者 bcb 所以是 3
 * 
 * https://leetcode.com/problems/longest-palindromic-subsequence/description/
 *
 * algorithms
 * Medium (45.59%)
 * Total Accepted:    53.3K
 * Total Submissions: 116.9K
 * Testcase Example:  '"bbbab"'
 *
 * 
 * Given a string s, find the longest palindromic subsequence's length in s.
 * You may assume that the maximum length of s is 1000.
 * 
 * 
 * Example 1:
 * Input: 
 * 
 * "bbbab"
 * 
 * Output: 
 * 
 * 4
 * 
 * One possible longest palindromic subsequence is "bbbb".
 * 
 * 
 * Example 2:
 * Input:
 * 
 * "cbbd"
 * 
 * Output:
 * 
 * 2
 * 
 * One possible longest palindromic subsequence is "bb".
 * 
 */
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
    var dp = [];
    var length = s.length;

    // debugger;
    for(var i = 0; i < length; i++) {
        dp[i] = [];
        for(var j = 0; j < length; j++) {
            dp[i][j] = 0;
        }
    }

    for(var i = length - 1; i >= 0; i--) {
        dp[i][i] = 1;

        for(var j = i + 1; j < length; j++) {
            if (s[i] === s[j]) {
                dp[i][j] = dp[i + 1][j - 1] + 2;
            } else {
                dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
            }
        }
    }

    return dp[0][length - 1];
};

