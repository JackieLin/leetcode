/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var arr = String(x).split('');
    var first = 0;
    var last = arr.length - 1;

    while(first < last) {
        if (arr[first] !== arr[last]) return false;
        first++;
        last--;
    }

    return true;
};