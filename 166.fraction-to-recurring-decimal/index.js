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
    var carry = '';

    if (numerator < 0 && denominator > 0) {
        carry = '-'
    } else if (numerator > 0 && denominator < 0) {
        carry = '-'
    }

    numerator = Math.abs(numerator);
    denominator = Math.abs(denominator);
    
    var integer = Math.floor(numerator / denominator);
    var remainder = numerator % denominator;
    var remainders = [];
    var lefts = [];
    var left = remainder;

    while(left && (lefts.indexOf(left) < 0)) {
        lefts.push(left);
        left *= 10;

        while(left < denominator) {
            lefts.push(left);
            left *= 10;
            remainders.push(0)
        }

        remainders.push(Math.floor(left / denominator));
        left %= denominator;
    }

    if (!left) {
        return remainders.length ? `${carry}${integer}.${remainders.join('')}` : `${carry}${integer}`
    } else {
        var index = lefts.indexOf(left);
        
        return `${carry}${integer}.${remainders.slice(0, index).join('')}(${remainders.slice(index).join('')})`
    }
};

