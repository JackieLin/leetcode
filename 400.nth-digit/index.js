/*
 * @lc app=leetcode id=400 lang=javascript
 *
 * [400] Nth Digit
 */
/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
    var num = 0;
    var i = 0;
    // (i - 1) * 10
    // debugger;
    while(true) {
        if (num + (Math.pow(10, i) * 9 * (i + 1)) < n) {
            num += (Math.pow(10, i) * 9 * (i + 1))
            i++;
        } else { break }
    }

    var left = n - num;
    var pos = parseInt(left / (i + 1));
    var ix = left % (i + 1)
    if (!ix) {
        return (pos + Math.pow(10, i) - 1) % 10
    }
    var start = pos + Math.pow(10, i);

    var stack = []
    
    while(start) {
        stack.unshift(start % 10)
        start = parseInt(start / 10)
    }

    return stack[ix - 1];
};

