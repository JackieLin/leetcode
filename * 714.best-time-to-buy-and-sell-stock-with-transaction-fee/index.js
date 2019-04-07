/*
 * @lc app=leetcode id=714 lang=javascript
 *
 * [714] Best Time to Buy and Sell Stock with Transaction Fee
 *
 * 贪心算法 只要收益是比较高的，就卖出去，然后等下一次价格较低的时候买入
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/description/
 *
 * algorithms
 * Medium (49.90%)
 * Total Accepted:    36K
 * Total Submissions: 72.1K
 * Testcase Example:  '[1,3,2,8,4,9]\n2'
 *
 * Your are given an array of integers prices, for which the i-th element is
 * the price of a given stock on day i; and a non-negative integer fee
 * representing a transaction fee.
 * You may complete as many transactions as you like, but you need to pay the
 * transaction fee for each transaction.  You may not buy more than 1 share of
 * a stock at a time (ie. you must sell the stock share before you buy again.)
 * Return the maximum profit you can make.
 * 
 * Example 1:
 * 
 * Input: prices = [1, 3, 2, 8, 4, 9], fee = 2
 * Output: 8
 * Explanation: The maximum profit can be achieved by:
 * Buying at prices[0] = 1Selling at prices[3] = 8Buying at prices[4] =
 * 4Selling at prices[5] = 9The total profit is ((8 - 1) - 2) + ((9 - 4) - 2) =
 * 8.
 * 
 * 
 * 
 * Note:
 * 0 < prices.length .
 * 0 < prices[i] < 50000.
 * 0 .
 * 
 */
/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
// var maxProfit = function(prices, fee) {
//     var result = 0;
//     var length = prices.length;
//     var memo = [];

//     for(var i = 0; i < length; i++) {
//         memo[i] = -1;
//     }

//     function dfs(start) {
//         var max = 0;
//         if (start >= length - 1) return 0;
        
//         if (memo[start] !== -1) return memo[start];

//         for(var i = start + 1; i < length; i++) {
//             if (prices[start] < prices[i]) {
//                 var j = i + 1;
//                 var num = prices[i] - prices[start] - fee;
//                 var next = 0;

//                 while(j + 1 < length) {
//                     if (prices[j] < prices[j + 1]) {
//                         if (memo[j] !== -1) {
//                             next = memo[j];
//                         } else {
//                             next = dfs(j);
//                         }
//                     }

//                     if (num + next > max) {
//                         max = num + next;
//                     }    
//                     j++;
//                 }

//                 if (num + next > max) {
//                     max = num + next;
//                 }    
//             }
//         }

//         memo[start] = max;
        
//         return max;
//     }
    
//     // debugger;
//     for(var i = 0; i < length - 1; i++) {
//         if (prices[i] < prices[i + 1]) {
//             var data = dfs(i);
//             if (data > result) {
//                 result = data;
//             }
//         }
//     }

//     return result;
// };

var maxProfit = function(prices, fee) {
    var cash = 0;
    var hold = -prices[0]

    for(var i = 1; i < prices.length; i++) {
        cash = Math.max(cash, hold + prices[i] - fee);
        hold = Math.max(hold, cash - prices[i])
    }

    return cash;
}