/*
 * @lc app=leetcode id=537 lang=javascript
 *
 * [537] Complex Number Multiplication
 *
 * https://leetcode.com/problems/complex-number-multiplication/description/
 *
 * algorithms
 * Medium (65.12%)
 * Total Accepted:    34.2K
 * Total Submissions: 52.6K
 * Testcase Example:  '"1+1i"\n"1+1i"'
 *
 * 
 * Given two strings representing two complex numbers.
 * 
 * 
 * You need to return a string representing their multiplication. Note i^2 = -1
 * according to the definition.
 * 
 * 
 * Example 1:
 * 
 * Input: "1+1i", "1+1i"
 * Output: "0+2i"
 * Explanation: (1 + i) * (1 + i) = 1 + i^2 + 2 * i = 2i, and you need convert
 * it to the form of 0+2i.
 * 
 * 
 * 
 * Example 2:
 * 
 * Input: "1+-1i", "1+-1i"
 * Output: "0+-2i"
 * Explanation: (1 - i) * (1 - i) = 1 + i^2 - 2 * i = -2i, and you need convert
 * it to the form of 0+-2i.
 * 
 * 
 * 
 * Note:
 * 
 * The input strings will not have extra blank.
 * The input strings will be given in the form of a+bi, where the integer a and
 * b will both belong to the range of [-100, 100]. And the output should be
 * also in this form.
 * 
 * 
 */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var complexNumberMultiply = function(a, b) {
    a = a.substr(0, a.length - 1);
    b = b.substr(0, b.length - 1);
    
    a = a.split('+')
    b = b.split('+')

    return (a[0] * b[0] + a[1] * b[1]) + '+' + (a[0] * b[1] + a[1] * b[0]) + 'i';
};

