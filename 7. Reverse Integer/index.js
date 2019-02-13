/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var isNegative = x < 0;
    var num = Math.abs(x);
    var max = Math.pow(2, 31) - 1;
    var result = Number(String(num).split('').reverse().join(''))
    if (isNegative && result > max + 1) {
        result = 0
    } else if (result > max) {
        result = 0;
    }

    if (isNegative && result) {
        result = -result;
    }

    return result;
};