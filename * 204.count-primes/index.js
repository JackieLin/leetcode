/*
 * @lc app=leetcode id=204 lang=javascript
 *
 * [204] Count Primes
 *
 * 所有的合数都可以用素数的组合完成，所以打表就可以了
 * 
 * https://leetcode.com/problems/count-primes/description/
 *
 * algorithms
 * Easy (28.30%)
 * Total Accepted:    215.9K
 * Total Submissions: 762.8K
 * Testcase Example:  '10'
 *
 * Count the number of prime numbers less than a non-negative number, n.
 * 
 * Example:
 * 
 * 
 * Input: 10
 * Output: 4
 * Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
 * 
 */
/**
 * @param {number} n
 * @return {number}
 */
// var countPrimes = function(n) {
//     var count = 1;
//     if (n === 0 || n === 1 || n === 2) return 0;

//     var max;
//     for(var i = 3; i < n; i++) {
//         if (i % 2 === 0) continue;
//         max = parseInt(i / 2);
//         for(var j = 2; j <= max; j++) {
//             if (i % j === 0) break;
//         }

//         if (j > max) count++;
//     }

//     return count;
// };

var countPrimes = function(n) {
    const arr = new Array(n);
    arr.fill(false);

    var i = 2;
    var count = 0

    while(i < n) {
        if (!arr[i]) count++;

        for(var j = i * 2; j < n; j += i) {
            if (arr[j]) continue;
            arr[j] = true
        }

        i++;
    }

    return count;
}

