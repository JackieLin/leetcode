/*
 * @lc app=leetcode id=309 lang=javascript
 *  https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/discuss/294658/C%2B%2B-DP-O(n)-space
 * 可以细细的看看这个解决方案；
 * [309] Best Time to Buy and Sell Stock with Cooldown
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function(prices) {
//     var length = prices.length;
//     var max = 0;

//     function division(index, hold, profit, sell) {
//         // 结束
//         if (index === length) {
//             if (max < profit) {
//                 max = profit;
//             }

//             return;
//         }

//         if (sell) {
//             // colddown
//             return division(index + 1, hold, profit, false);
//         }

//         if (!hold) {
//             // 不买
//             division(index + 1, false, profit, sell);
//             // 买
//             division(index + 1, true, profit - prices[index], sell);
//         } else {
//             // 不卖
//             division(index + 1, true, profit, sell);
//             // 卖
//             if (profit + prices[index] > 0) {
//                 division(index + 1, false, profit + prices[index], true);
//             }
//         }
//     }

//     division(0, false, 0, false);

//     return max;
// };

function maxProfit(prices) {
    var buy = -Number.MAX_VALUE;
    var cooldown = 0;

    // debugger;
    return prices.reduce((sell, price) => {
       buy = Math.max(buy, cooldown - price);
       cooldown = Math.max(cooldown, sell);
       return Math.max(sell, buy + price);
    }, 0);
}

