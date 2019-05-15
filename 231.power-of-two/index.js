/*
 * @lc app=leetcode id=231 lang=javascript
 *
 * [231] Power of Two
 */
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if (n === 1) return true;
    if (n < 1) return false;

    var i = 1;
    var next;
    while((next = Math.pow(2, i)) <= n) {
        if (next === n) {
            return true;
        } else {
            i++;
        }
    }

    return false
};

