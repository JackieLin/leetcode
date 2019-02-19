/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    nums = nums.sort((a, b) => a - b);
    var middle = nums.length / 2;
    var num = 1;

    for(var i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i+1]) {
            num++;
        } else {
            if (num >= middle) {
                return nums[i];
            } else {
                num = 1;
            }
        }
    }
};