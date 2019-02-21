/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    var i = 1;
    var result = 0;
    
    while(i <= 32) {
        result = ((result<<1) | (n&1)) >>> 0
        n = n>>1
        i++
    }
    
    return result;
}; 