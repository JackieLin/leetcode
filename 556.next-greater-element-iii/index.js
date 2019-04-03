/*
 * @lc app=leetcode id=556 lang=javascript
 *
 * [556] Next Greater Element III
 *
 * https://leetcode.com/problems/next-greater-element-iii/description/
 *
 * algorithms
 * Medium (29.85%)
 * Total Accepted:    24.3K
 * Total Submissions: 81.5K
 * Testcase Example:  '12'
 *
 * Given a positive 32-bit integer n, you need to find the smallest 32-bit
 * integer which has exactly the same digits existing in the integer n and is
 * greater in value than n. If no such positive 32-bit integer exists, you need
 * to return -1.
 * 
 * Example 1:
 * 
 * 
 * Input: 12
 * Output: 21
 * 
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: 21
 * Output: -1
 * 
 * 
 * 
 * 
 */
/**
 * @param {number} n
 * @return {number}
 */
var nextGreaterElement = function(n) {
    var nums = String(n).split('');
    var max =  Math.pow(2, 31) - 1;
    var fined = false;
    var min = max;

    function dfs(num, prefix) {
        if (num.length === 1) {
            var final = Number(prefix + num[0]);
            if (final > n && min > final) {
                fined = true;
                min = final;
            }
        }

        for(var i = 0; i < num.length; i++) {
            var item = [];
            for(var j = 0; j < num.length; j++) {
                if (j !== i) {
                    item.push(num[j])
                }
            }

            dfs(item, prefix + num[i]);
        }
    }

    dfs(nums, '');

    if (min === max && !fined) min = -1;

    return min;
};

