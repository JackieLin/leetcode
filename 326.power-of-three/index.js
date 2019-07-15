/*
 * @lc app=leetcode id=326 lang=javascript
 *
 * [326] Power of Three
 */
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if (n < 0) return false
    if (n === 0) return false
    while(n > 1) {
        if (n % 3) {
            return false
        }

        n = parseInt(n / 3)
    }

    return true
};

