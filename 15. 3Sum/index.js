/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    var result = [];
    // for(var i = 0; i < len; i++) {
    //     for(var j = i + 1; j < len; j++) {
    //         for(var k = j + 1; k < len; k++) {
    //             if (nums[i] + nums[j] + nums[k] === 0) {
    //                 var temp = [nums[i], nums[j], nums[k]].sort();
    //                 if (!result.filter(v => JSON.stringify(v) === JSON.stringify(temp)).length) {
    //                     result.push(temp);
    //                 }
    //             }
    //         }
    //     }
    // }

    // return result;

    // [13,5,-4,-9,1,-3,10,-7,7,3,1,-13,-11,7,-10,12,-15,13,5,-8,-11,-12,-15,-13,-3,-13,5,-4,6,1,-10,4,13,-7,3,-9,-3,-2,-1,12,9,-15,14,5,0,-10,-5,-8,-12,-15,-1,-8,11,-9,-14,-7,-6,7,-4,-15,-15,-7,-4,14,1,6,12,14,12,-11,11,-2,11,2,-12,-4,7,-2,-5,10,-9,10,9,-13,-14,11,-13,-13,3,-1,9,3,7,-9,-6,-14,4,-8,7,1,-12,-5,14,14,12,10,-12,-3,-7,-2,-8,-9,-7,9,-7,-13,5,-12,-11,-7,2,14,3,-14]
    // 456ms
    var nums = Array.from(new Set(nums));;

};