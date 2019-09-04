/*
 * @lc app=leetcode id=393 lang=javascript
 *
 * [393] UTF-8 Validation
 */
/**
 * @param {number[]} data
 * @return {boolean}
 */
var validUtf8 = function(data) {
    var bit = 0
    // debugger;
    for(var i = 0; i < data.length; i++) {
        // debugger;
        var string = parseInt(data[i]).toString(2)
        if (string.length < 8) {
            var left = '';
            for(var j = string.length; j < 8; j++) {
                left += '0'
            }
            string = left + string
        }

        if (bit === 0) {
            for(var j = 0; j < string.length; j++) {
                if (string[j] === '0') break;
                bit++ 
            }

            if (bit === 0) continue;

            if(bit > 4 || bit === 1) return false
        } else {
            if (!(string[0] === '1' && string[1] === '0')) return false
        }

        bit--;
    }
    
    return bit === 0
};

