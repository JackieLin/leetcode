/*
 * @lc app=leetcode id=44 lang=javascript
 *
 * [44] Wildcard Matching
 */
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {

    // debugger;
    function division(src, pattern) {
        var index = 0;
        var slength = src.length;
        var plength = pattern.length;
        if (pattern === '*') return true;
        if (src && !pattern) return false;

        while(index < pattern.length) {
            if (pattern[index] !== '*') break;
            index++;
        }

        if (index >= plength) return true;
        
        if (!src && pattern) return false;

        index = 0;
        var result = false;
        var length = Math.max(slength, plength);
        if (slength === plength) result = true;

        while(index < length) {
            if (pattern[index] === '?') {
                index++
            } else if (pattern[index] === '*') {
                var lPattern = pattern.substring(index + 1);
                // result = false;
                while(index <= slength) {
                    if (division(src.substring(index++), lPattern)) {
                        return true;
                    }
                }
                
                return false;
            } else if (pattern[index] === src[index]) {
                index++;
            } else {
                return false;
            }
        }

        return result;
    }    

    return division(s, p);
};

