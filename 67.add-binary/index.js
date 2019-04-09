/*
 * @lc app=leetcode id=67 lang=javascript
 *
 * [67] Add Binary
 *
 * https://leetcode.com/problems/add-binary/description/
 *
 * algorithms
 * Easy (38.49%)
 * Total Accepted:    288.7K
 * Total Submissions: 750.1K
 * Testcase Example:  '"11"\n"1"'
 *
 * Given two binary strings, return their sum (also a binary string).
 * 
 * The input strings are both non-empty and contains only characters 1 or 0.
 * 
 * Example 1:
 * 
 * 
 * Input: a = "11", b = "1"
 * Output: "100"
 * 
 * Example 2:
 * 
 * 
 * Input: a = "1010", b = "1011"
 * Output: "10101"
 * 
 */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    if (a.length < b.length) {
        var temp = a;
        a = b;
        b = temp;
    }

    var len1 = a.length;
    var len2 = b.length;
    var carry = 0;
    var result = [];
    var prefix = ''
    for(var i = len2; i < len1; i++) {
        prefix += '0'
    }
    
    b = prefix + b;
    
    for(var i = len1 - 1; i >= 0; i--) {
        var add = Number(a[i] || 0) + Number(b[i] || 0) + carry;
        
        result.push(add % 2);
        carry = Math.floor(add / 2);
    }

    if (carry) {
        result.push(carry);
    }

    return result.reverse().join('');
};

