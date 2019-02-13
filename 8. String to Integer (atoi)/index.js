/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    var nonStr = str.trim();
    var result = '';
    let i = 0;
    var first = nonStr[i];
    var max = Math.pow(2, 31) - 1;
    var isNumber = function(char) {
        return char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57;
    }

    var isNegative = first === '-';
    var isPositive = first === '+';

    if (first && (isNegative || isPositive || isNumber(first))) {
        if (!isNegative && !isPositive) {
            result = first;
        }
        while(i < nonStr.length - 1 && isNumber(nonStr[++i])) {
            result += nonStr[i];
        }

        result = Number(result);
        
        if (isNegative && result > max + 1) {
            result = -max - 1;
        } else if (isNegative) {
            result = -result;
        } else if (result > max) {
            result = max;
        }
    } else {
        result = 0
    }

    return result;
};