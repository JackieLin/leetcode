/*
 * @lc app=leetcode id=279 lang=javascript
 *
 * [279] Perfect Squares
 */
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    var squares = [];
    var dp = [];
    var i = 1;
    var min;
    var temp;
    dp[0] = 0;

    // debugger;
    while(i * i <= n) {
        squares.push(i * i);
        i++;
    }

    for(var i = 1; i <= n; i++) {
        min = Number.MAX_SAFE_INTEGER;
        for(var j = 0; squares[j] <= i; j++) {
            temp = dp[i - squares[j]] + 1
            if (temp < min) {
                min = temp;
            }
        }

        dp[i] = min;
    }

    // console.log(dp)
    return dp[n];
};

