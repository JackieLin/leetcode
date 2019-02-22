/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    var map = {};
    var result;
    
    function calc(n) {
        result = 0;
        while(n) {
            result += Math.pow(n%10,2);
            n = parseInt(n/10);
        }

        if (result === 1) {
            return true;
        } else if (map[result]) {
            return false;
        } else {
            map[result] = true;
            return calc(result)
        }        
    }
    
    return calc(n);
};