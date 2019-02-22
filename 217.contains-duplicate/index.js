/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var map = {};
    for (var i = 0; i < nums.length; i++) {
        if (map[nums[i]]) return true;
        map[nums[i]] = true;
    }
    
    return false;
};