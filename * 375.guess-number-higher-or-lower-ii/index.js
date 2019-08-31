/**
 * @param {number} n
 * @return {number}
 */
var getMoneyAmount = function(n) {
    var dp = [];
    var i, j,k, min;
    for(i=0; i<n+1; i++) {
        dp.push([]);
    }
    for(i=1; i<n+1; i++) {
        dp[i][i]=0;
    }
    for(i = n-1; i>=1; i--) {
        dp[i][i+1] = i;
        for(j=i+2; j<n+1; j++) {
            min = Math.min(i + dp[i+1][j], j+dp[i][j-1]);
            for(k=i+1;k<=j-1; k++) {
                min = Math.min(Math.max(dp[i][k-1],dp[k+1][j])+k, min);
            }
            dp[i][j] = min;
        }
    }
    return dp[1][n];
};