/*
 * @lc app=leetcode id=166 lang=javascript
 *
 * [166] Fraction to Recurring Decimal
 */
/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
    var integer = parseInt(numerator / denominator);
    var remainder = numerator % denominator;
    var remainders = [];
    var left = remainder;
    var first = false;

    while(left && (left !== remainder || !first)) {
        first = true;
        left *= 10;

        while(left < denominator) {
            left *= 10;
            remainders.push(0)
        }

        remainders.push(parseInt(left / denominator));
        left %= denominator;
    }

    if (!left) {
        return `${integer}.${remainders.join('')}`
    } else {
        return `${integer}.(${remainders.join('')})`
    }
};

