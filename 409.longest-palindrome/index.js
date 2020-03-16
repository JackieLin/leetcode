/*
 * @lc app=leetcode id=409 lang=javascript
 *
 * [409] Longest Palindrome
 */
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    // 排序
    s = s.split('').sort().join('')
    var num = 0;
    var result = 1;

    for(var i = 0; i < s.length; i++) {
        if (s[i] === s[i + 1]) {
            num++; 
        } else {
            if (num) {
                num = num + 1;
                result += Math.floor((num / 2)) * 2
            }
            num = 0;
        }
    }

    if (s.length < result) result = s.length;
    return result;
};

