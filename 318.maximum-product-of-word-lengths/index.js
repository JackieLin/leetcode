/*
 * @lc app=leetcode id=318 lang=javascript
 *
 * [318] Maximum Product of Word Lengths
 */
/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
    if (!words) return 0
    var max = 0;
    
    function isRelation(src, dest) {
        var mapS = {}
        for(var i = 0; i < src.length; i++) {
            mapS[src[i]] = true
        }

        for(var i = 0; i < dest.length; i++) {
            if (mapS[dest[i]]) return true
        }

        return false
    }

    for(var i = 0; i < words.length; i++) {
        for(var j = i + 1; j < words.length; j++) {
            var length = words[i].length * words[j].length;
            if (length <= max) continue;

            if (!isRelation(words[i], words[j])) {
                max = length
            }
        }
    }

    return max;
};

