/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    var map = {};
    for(var i = 0; i < nums.length; i++) {
        if (map[nums[i]] === undefined) {
            map[nums[i]] =  i;
        } else {
            if (i - map[nums[i]] <= k) {
                return true
            } else {
                map[nums[i]] = i;
            }
        }
    }
    
    return false;
};