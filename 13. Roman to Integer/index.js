/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var result = 0;
    var curr, next;
    var map = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
        VI: 4,
        XI: 9,
        LX: 40,
        CX: 90,
        DC: 400,
        MC: 900
    }

    s = s.split('').reverse().join('');
    for (var i = 0; i < s.length; i++) {
        curr = s[i];
        next = s[i+1];
        result += map[curr+next] || map[curr];
        if (map[curr+next]) {
            i++;
        }
    }

    return result;
};