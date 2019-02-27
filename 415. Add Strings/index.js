/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    var num1n = '';
    var num2n = '';
    var one, two;
    var carry = 0;
    var value = ''
    var result = ''
    var cur;

    if (num1.length > num2.length) {
        for(var i = 0; i < num1.length - num2.length; i++) {
            num2n += '0'
        }
        num2 = num2n + num2
    } else {
        for(var i = 0; i <  num2.length - num1.length; i++) {
            num1n += '0'
        }
        num1 = num1n + num1
    }

    for(var i = num1.length - 1; i >= 0; i--) {
        if (!num1[i]) {one = 0} else {one = parseInt(num1[i])}
        if (!num2[i]) {two = 0} else {two = parseInt(num2[i])}
        cur = one + two + carry
        carry = parseInt(cur / 10);
        value += cur%10
    }

    if (carry) {
        value += carry;
    }

    for(var i = value.length - 1; i >= 0; i--) {
        result += value[i]
    }

    return result;
};