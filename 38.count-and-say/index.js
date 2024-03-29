/*
 * @lc app=leetcode id=38 lang=javascript
 *
 * [38] Count and Say
 *
 * https://leetcode.com/problems/count-and-say/description/
 *
 * algorithms
 * Easy (39.97%)
 * Total Accepted:    270.2K
 * Total Submissions: 676K
 * Testcase Example:  '1'
 *
 * The count-and-say sequence is the sequence of integers with the first five
 * terms as following:
 * 
 * 
 * 1.     1
 * 2.     11
 * 3.     21
 * 4.     1211
 * 5.     111221
 * 6.     312211
 * 
 * 
 * 1 is read off as "one 1" or 11.
 * 11 is read off as "two 1s" or 21.
 * 21 is read off as "one 2, then one 1" or 1211.
 * 
 * Given an integer n where 1 ≤ n ≤ 30, generate the n^th term of the
 * count-and-say sequence.
 * 
 * Note: Each term of the sequence of integers will be represented as a
 * string.
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: 1
 * Output: "1"
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: 4
 * Output: "1211"
 * 
 */
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    if (n === 1) return '1';

    var prev = '1';

    for (var i = 1; i < n; i++) {
        var length = prev.length;
        var curr = '';
        var count = 1;
        for (var s = 0; s < length; s++) {
            if (prev[s] === prev[s + 1]) {
                count++;
            } else {
                curr += count + prev[s];
                count = 1;
            }
        }

        // 最后一个
        if (count !== 1) {
            curr += count + prev[length - 1];
            count = 1;
        }

        prev = curr;
    }

    return prev;
};

