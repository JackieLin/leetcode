/*
 * @lc app=leetcode id=258 lang=javascript
 *
 * [258] Add Digits
 *
 * https://leetcode.com/problems/add-digits/description/
 *
 * algorithms
 * Easy (53.43%)
 * Total Accepted:    226.1K
 * Total Submissions: 423.2K
 * Testcase Example:  '38'
 *
 * Given a non-negative integer num, repeatedly add all its digits until the
 * result has only one digit.
 * 
 * Example:
 * 
 * 
 * Input: 38
 * Output: 2 
 * Explanation: The process is like: 3 + 8 = 11, 1 + 1 = 2. 
 * Since 2 has only one digit, return it.
 * 
 * 
 * Follow up:
 * Could you do it without any loop/recursion in O(1) runtime?
 */
/**
 * @param {number} num
 * @return {number}
 */
// 0(1) solution -- return (num % 9 === 0 ? (num === 0 ? 0 : 9) : num % 9)
var addDigits = function(num) {
    var sum = 0;
    while(true) {
        while(num > 0) {
            sum += num%10;
            num = parseInt(num/10);
        }
        if (sum >= 10) {
            num = sum;
            sum = 0;
        } else {
            break;
        }
    }

    return sum;
};
