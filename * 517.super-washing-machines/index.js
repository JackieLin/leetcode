/*
 * @lc app=leetcode id=517 lang=javascript
 *
 * [517] Super Washing Machines
 *
 * wiki: https://leetcode.com/problems/super-washing-machines/discuss/99177/Very-intuitive-O(n)-solution
 * 
 * https://leetcode.com/problems/super-washing-machines/description/
 *
 * algorithms
 * Hard (36.84%)
 * Total Accepted:    11.8K
 * Total Submissions: 32.1K
 * Testcase Example:  '[1,0,5]'
 *
 * You have n super washing machines on a line. Initially, each washing machine
 * has some dresses or is empty. 
 * 
 * 
 * For each move, you could choose any m (1 ≤ m ≤ n) washing machines, and pass
 * one dress of each washing machine to one of its adjacent washing machines
 * at the same time .  
 * 
 * Given an integer array representing the number of dresses in each washing
 * machine from left to right on the line, you should find the minimum number
 * of moves to make all the washing machines have the same number of dresses.
 * If it is not possible to do it, return -1.
 * 
 * Example1
 * 
 * Input: [1,0,5]
 * 
 * Output: 3
 * 
 * Explanation: 
 * 1st move:    1     0     1     1     4
 * 2nd move:    1     2     1     3    
 * 3rd move:    2     1     2     2     2   
 * 
 * 
 * Example2
 * 
 * Input: [0,3,0]
 * 
 * Output: 2
 * 
 * Explanation: 
 * 1st move:    0     1     2     0    
 * 2nd move:    1     2 --> 0    =>    1     1     1     
 * 
 * 
 * Example3
 * 
 * Input: [0,2,0]
 * 
 * Output: -1
 * 
 * Explanation: 
 * It's impossible to make all the three washing machines have the same number
 * of dresses. 
 * 
 * 
 * 
 * 
 * Note:
 * 
 * The range of n is [1, 10000].
 * The range of dresses number in a super washing machine is [0, 1e5].
 * 
 * 
 */
/**
 * @param {number[]} machines
 * @return {number}
 */
var findMinMoves = function(machines) {
    var len = machines.length;
    var mid;
    var sum = 0;
    var leftSums = [];
    var rightSums = [];
    for(var i = 0; i < len; i++) {
        sum += machines[i];
    }
    if (sum % len !== 0) return -1;

    // 中位数
    mid = sum/len;
    
    for(var i = 0; i < len; i++) {
        leftSums[i] = (leftSums[i - 1] || 0) + (machines[i - 1] || 0);
    }

    for(var i = len - 2; i >= 0; i--) {
        rightSums[i] = (rightSums[i + 1] || 0) + (machines[i + 1] || 0);
    }

    var max = Number.MIN_SAFE_INTEGER;

    for(var i = 0; i < len; i++) {
        var expLeft = mid * i;
        var expRight = mid * (len - i - 1);
        var left = 0;
        var right = 0;

        if (expLeft > (leftSums[i] || 0)) {
            left = expLeft - leftSums[i]
        }

        if (expRight > (rightSums[i] || 0)) {
            right = expRight - rightSums[i];
        }

        max = Math.max(max, left + right);
    }

    return max;
}

