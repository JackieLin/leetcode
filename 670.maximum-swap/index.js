/*
 * @lc app=leetcode id=670 lang=javascript
 *
 * [670] Maximum Swap
 */
/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
    var copy = num;
    var arr = [];
    
    while(copy) {
        arr.push(copy % 10);
        copy = Math.floor(copy / 10);
    }

    var source = arr.slice();
    arr = arr.sort((a, b) => b - a);
    var ix = 0;
    
    for(var i = source.length - 1; i >= 0; i--) {
        var temp = arr[ix++];
        if (source[i] < temp) {
            for(var j = 0; j < i; j++) {
                if (source[j] === temp) {
                    temp = source[j];
                    source[j] = source[i];
                    source[i] = temp;    
                    break;
                }
            }

            break;
        }
    }

    return Number(source.reverse().join(''))
};

