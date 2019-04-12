/*
 * @lc app=leetcode id=91 lang=javascript
 *
 * [91] Decode Ways
 *
 * https://leetcode.com/problems/decode-ways/discuss/268450/Python-easy-to-read-iterative-solution-faster-than-94.00-with-some-explanation
 * 可以参考这个，里面有如何将递归转换为 dp 的思想
 * 
 * https://leetcode.com/problems/decode-ways/description/
 *
 * algorithms
 * Medium (22.10%)
 * Total Accepted:    249.3K
 * Total Submissions: 1.1M
 * Testcase Example:  '"12"'
 *
 * A message containing letters from A-Z is being encoded to numbers using the
 * following mapping:
 * 
 * 
 * 'A' -> 1
 * 'B' -> 2
 * ...
 * 'Z' -> 26
 * 
 * 
 * Given a non-empty string containing only digits, determine the total number
 * of ways to decode it.
 * 
 * Example 1:
 * 
 * 
 * Input: "12"
 * Output: 2
 * Explanation: It could be decoded as "AB" (1 2) or "L" (12).
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "226"
 * Output: 3
 * Explanation: It could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2
 * 6).
 * 
 */
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    var map = {};

    // debugger;
    function division(str) {
        var num = 0;
        var left = ''

        if (map[str] !== undefined) return map[str];

        if (str.length === 1) {
            if (Number(str) < 1) {
                map[str] = 0;
                return 0;
            }

            map[str] = 1;
            return 1;
        }

        for(var i = 0; i < str.length; i++) {
            left += str[i]
            if (Number(left) > 26 || Number(left) < 1) break;
            
            if (i + 1 < str.length) {
                num += division(str.substr(i + 1));
            } else {
                num += 1;
            }
        }

        map[str] = num;
        return num;
    }

    return division(s);
};

