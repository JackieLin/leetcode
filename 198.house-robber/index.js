/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    var size = nums.length;
    var max = 0;
    var item;
    if(!size) return 0;
    function robMax(nums, start) {
        var max = nums[start];
        var cur;
        for(var next = start + 2; next < size; next++) {
            cur = nums[start] + robMax(nums, next);
            if (cur > max) {
                max = cur;
            }
        }
        
        return max;
    }
    
    for(var i = 0; i < size; i++) {
        item = robMax(nums, i);
        if(item > max) {
            max = item;
        }
    }
    return max;
};