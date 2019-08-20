/*
 * 数学 C 10 取 9 ，排列组合
 * @lc app=leetcode id=357 lang=javascript
 *
 * [357] Count Numbers with Unique Digits
 */
/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function (n) {
    if (n == 0) return 1;

    var result = 10;
    var pow = 9;
    for (var i = 1; i < Math.min(n, 10); i++) {
        pow = pow * (10 - i);
        result = result + pow;
    }
    return result;
};

