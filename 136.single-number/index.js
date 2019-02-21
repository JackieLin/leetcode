
/**
 * a^0 = a  a^a = 0;
 * 可以采用 异或的方式解决，厉害了：singleNumber = nums=> nums.reduce((r, x)=>r^x, 0)
 * 2∗(a+b+c)−(a+a+b+b+c)=c 数学方式，强无敌
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var map = {};
    for (var i = 0; i < nums.length; i++) {
        if (!map[nums[i]]) {
            map[nums[i]] = true;
        } else {
            delete map[nums[i]];
        }
    }
    
    for(var key in map) {
        return key
    }
};