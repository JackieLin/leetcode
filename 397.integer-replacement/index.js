/*
 * @lc app=leetcode id=397 lang=javascript
 *
 * [397] Integer Replacement
 *
 * https://leetcode.com/problems/integer-replacement/description/
 *
 * algorithms
 * Medium (31.13%)
 * Total Accepted:    38.3K
 * Total Submissions: 122.9K
 * Testcase Example:  '8'
 *
 * 
 * Given a positive integer n and you can do operations as follow:
 * 
 * 
 * 
 * 
 * If n is even, replace n with n/2.
 * If n is odd, you can replace n with either n + 1 or n - 1.
 * 
 * 
 * 
 * 
 * What is the minimum number of replacements needed for n to become 1?
 * 
 * 
 * 
 * 
 * Example 1:
 * 
 * Input:
 * 8
 * 
 * Output:
 * 3
 * 
 * Explanation:
 * 8 -> 4 -> 2 -> 1
 * 
 * 
 * 
 * Example 2:
 * 
 * Input:
 * 7
 * 
 * Output:
 * 4
 * 
 * Explanation:
 * 7 -> 8 -> 4 -> 2 -> 1
 * or
 * 7 -> 6 -> 3 -> 2 -> 1
 * 
 * 
 */
/**
 * @param {number} n
 * @return {number}
 */
var integerReplacement = function(n) {
    // debugger;
    function division(n) {
        var count = 0;

        while(!(n % 2)) {
            n = n / 2;
            count++;
        }

        if (n === 1) return count;

        if (n % 2) {
            count = count + Math.min(division(n - 1), division(n + 1)) + 1;
        }

        return count;
    }
    
    return division(n);
};

