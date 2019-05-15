/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 */
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var length = digits.length;
    var carry = 0;
    if (!length) return [1]

    for(var i = length - 1; i >= 0; i--) {
        if (i === length - 1) {
            digits[i] += 1;
            carry = parseInt(digits[i] / 10);
            digits[i] %= 10; 
        } else if (carry) {
            digits[i] += carry;
            carry = parseInt(digits[i] / 10);
            digits[i] %= 10; 
        } else {
            break;
        }
    }

    if (carry) {
        digits.unshift(carry);
    }

    return digits;
};

