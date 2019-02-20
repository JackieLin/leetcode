/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var leftPads = [];
    var map = {
        ')': '(',
        '}': '{',
        ']': '['
    }
    var result = false;
    function isLeftPad(c) {
        if (c === '(' || c === '{' || c === '[') {
            leftPads.push(c);
        }
    }
    
    function isRightPad(c) {
        if (c === ')' || c === '}' || c === ']') {
            var left = leftPads.pop();
            if (map[c] === left) {
                return true;
            } else return false;
        }
        
        return true;
    }
    
    for(var i = 0; i < s.length; i++) {
        isLeftPad(s[i]);
        if (!isRightPad(s[i])) {
            result = false;
            break;
        }
    }
    
    if (i >= s.length && !leftPads.length) result = true;
    
    return result;
};