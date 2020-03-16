/*
 * @lc app=leetcode id=402 lang=javascript
 *
 * [402] Remove K Digits
 */
/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    if (num === '0') {
        return '0'
    }

    if (k >= num.length) {
        return '0'
    }

    var nums = num.split('').map(v => Number(v))

    for(var i = 0; i < k; i++) {
        for(var j = 0; j < nums.length; j++) {
            if (nums[j] > (nums[j + 1] || 0)) {
                nums.splice(j, 1);
                while(j === 0 && nums[j] === 0)  {
                    nums.splice(j, 1);
                }
                break;
            }
        }
    }

    if (!nums.length) return '0'

    return nums.join('')
};

