/*
 * @lc app=leetcode id=639 lang=javascript
 * 可以说是很经典的动态规划的题目了
 * 动态规划的要点，先从上往下，也就是说，假定结尾是 i，通过公式得出结论
 * 分治算法的核心是怎么划分
 * [639] Decode Ways II
 */
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    var  M = 1000000007;
    var dp = [];
    dp[0] = 1;
    dp[1] = s[0] === '*' ? 9 : s[0] === '0' ? 0 : 1;

    for(var i = 1; i < s.length; i++) {
        if (s[i] === '*') {
            dp[i + 1] = dp[i] * 9;

            if (s[i - 1] === '1') {
                dp[i + 1] = (dp[i + 1] + 9 * dp[i - 1]) % M;
            } else if (s[i - 1] === '2') {
                dp[i + 1] = (dp[i + 1] + 6 * dp[i - 1]) % M;
            } else if (s[i - 1] === '*') {
                dp[i + 1] = (dp[i + 1] + 15 * dp[i - 1]) % M;
            }
        } else {
            dp[i + 1] = s[i] === '0' ? 0 : dp[i];

            if (s.charAt(i - 1) == '1')
                    dp[i + 1] = (dp[i + 1] + dp[i - 1]) % M;
                else if (s.charAt(i - 1) == '2' && s.charAt(i) <= '6')
                    dp[i + 1] = (dp[i + 1] + dp[i - 1]) % M;
                else if (s.charAt(i - 1) == '*')
                    dp[i + 1] = (dp[i + 1] + (s.charAt(i) <= '6' ? 2 : 1) * dp[i - 1]) % M;
        }
    }

    return dp[s.length];
};

