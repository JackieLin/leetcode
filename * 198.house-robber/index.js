/**
 * 贪心算法，此题可以理解为，假设 nums[i] 为终点，那么最大值只有两种情况
 *  dp[i] = Math.max(dp[i-2] + nums[i], dp[i - 1]);
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (!nums || !nums.length) return 0;
    let dp0 = nums.length >= 1 ? nums[0] : 0;
    let dp1 = nums.length >= 2 ? Math.max(nums[0], nums[1]) : dp0;
    for (let i = 2; i < nums.length; i++) {
        const curr = Math.max(dp0 + nums[i], dp1);
        dp0 = dp1;
        dp1 = curr;
    }
    return dp1;
};