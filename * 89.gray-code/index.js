/*
 * @lc app=leetcode id=89 lang=javascript
 * 每一次去异或一个 1，2，4，8 就可以了
 * [89] Gray Code
 *
 * https://leetcode.com/problems/gray-code/description/
 *
 * algorithms
 * Medium (44.94%)
 * Total Accepted:    126.8K
 * Total Submissions: 282.2K
 * Testcase Example:  '2'
 *
 * The gray code is a binary numeral system where two successive values differ
 * in only one bit.
 * 
 * Given a non-negative integer n representing the total number of bits in the
 * code, print the sequence of gray code. A gray code sequence must begin with
 * 0.
 * 
 * Example 1:
 * 
 * 
 * Input: 2
 * Output: [0,1,3,2]
 * Explanation:
 * 00 - 0
 * 01 - 1
 * 11 - 3
 * 10 - 2
 * 
 * For a given n, a gray code sequence may not be uniquely defined.
 * For example, [0,2,3,1] is also a valid gray code sequence.
 * 
 * 00 - 0
 * 10 - 2
 * 11 - 3
 * 01 - 1
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: 0
 * Output: [0]
 * Explanation: We define the gray code sequence to begin with 0.
 * A gray code sequence of n has size = 2n, which for n = 0 the size is 20 =
 * 1.
 * Therefore, for n = 0 the gray code sequence is [0].
 * 
 * 
 */
/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
    var iter = 0;
    var result = new Set();

    while(true) {
        result.add(iter);
        for(var i = 0; i < n; i++) {
            var block = 1 << i;
            if (!result.has(iter ^ block)) {
                iter ^= block;
                break;
            }
        }

        if (n === i) break;
    }

    return Array.from(result.values())
};

