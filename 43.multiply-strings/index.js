/*
 * @lc app=leetcode id=43 lang=javascript
 *
 * [43] Multiply Strings
 *
 * https://leetcode.com/problems/multiply-strings/description/
 *
 * algorithms
 * Medium (30.26%)
 * Total Accepted:    191.6K
 * Total Submissions: 633.3K
 * Testcase Example:  '"2"\n"3"'
 *
 * Given two non-negative integers num1 and num2 represented as strings, return
 * the product of num1 and num2, also represented as a string.
 * 
 * Example 1:
 * 
 * 
 * Input: num1 = "2", num2 = "3"
 * Output: "6"
 * 
 * Example 2:
 * 
 * 
 * Input: num1 = "123", num2 = "456"
 * Output: "56088"
 * 
 * 
 * Note:
 * 
 * 
 * The length of both num1 and num2 is < 110.
 * Both num1 and num2 contain only digits 0-9.
 * Both num1 and num2 do not contain any leading zero, except the number 0
 * itself.
 * You must not use any built-in BigInteger library or convert the inputs to
 * integer directly.
 * 
 * 
 */
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if (num1.length < num2.length) {
        var temp = num1;
        num1 = num2;
        num2 = temp;
    }

    var len1 = num1.length;
    var len2 = num2.length;

    var carry = 0
    var result = '0';

    if (num2 === '0' || num1 === '0') return '0';

    for(var i = len2 - 1; i >= 0; i--) {
        var data = ''
        var s2 = Number(num2[i]);

        // 补 0
        for(var j = 0; j < len2 - 1 - i; j++) {
            data += '0';
        }

        for(var j = len1 - 1; j >= 0; j--) {
            var s1 = Number(num1[j]);
            var product = s1 * s2 + carry;
            data += product % 10;
            carry = Math.floor(product / 10);
        }

        if (carry) {
            data += carry;
            carry = 0;
        }
        // 加法
        var add = '';
        var len = Math.max(result.length, data.length);

        for(var j = 0; j < len; j++) {
            var item = Number(result[j] || 0) + Number(data[j] || 0) + carry;
            add += item % 10;
            carry = Math.floor(item / 10);
        }
        
        if (carry) {
            add += carry;
            carry = 0;
        }
        result = add;
    }

    return result.split('').reverse().join('');
};

