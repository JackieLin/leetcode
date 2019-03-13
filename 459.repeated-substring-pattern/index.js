/*
 * @lc app=leetcode id=459 lang=javascript
 *
 * [459] Repeated Substring Pattern
 * 注意，只能采用比较笨的方式去判断，一个一个拿出来判断
 *
 * https://leetcode.com/problems/repeated-substring-pattern/description/
 *
 * algorithms
 * Easy (39.47%)
 * Total Accepted:    74.5K
 * Total Submissions: 188.6K
 * Testcase Example:  '"abab"'
 *
 * Given a non-empty string check if it can be constructed by taking a
 * substring of it and appending multiple copies of the substring together. You
 * may assume the given string consists of lowercase English letters only and
 * its length will not exceed 10000.
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: "abab"
 * Output: True
 * Explanation: It's the substring "ab" twice.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "aba"
 * Output: False
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: "abcabcabcabc"
 * Output: True
 * Explanation: It's the substring "abc" four times. (And the substring
 * "abcabc" twice.)
 * 
 * 
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    var sub = '';
    var len;

    for(var i = 0; i < s.length; i++) {
        sub += s[i];
        len = sub.length;

        if (sub === s) return false;

        for(var j = 0; j < s.length; j+=len) {
            var temp = s.substr(j, len);
            if (temp !== sub) break;
        }

        if (j >= s.length) return true;
    }

    return false;
};

