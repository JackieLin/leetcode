// /*
//  * @lc app=leetcode id=689 lang=javascript
//  *
//  * [689] Maximum Sum of 3 Non-Overlapping Subarrays
//  */
// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number[]}
//  */
// var maxSumOfThreeSubarrays = function(nums, k) {
//     var max = Number.MIN_SAFE_INTEGER;
//     var data = [];
//     function dp(i, value, indexs) {
//         var result = 0;
//         var op = !indexs.length ? 2 : 1;
//         for(var j = i - k + 1; j <= i; j++) {
//             result += nums[j];
//         }

//         value = value + result;

//         if (indexs.length === 3 && max <= value) {
//             max = value;
//             data = indexs.slice();
//             return;
//         }
//         for(var j = i - k; j >= op * k - 1; j--) {
//             indexs.unshift(j - k + 1);
//             dp(j, value, indexs)
//             indexs.shift();
//         }
//     }

//     for(var i = nums.length - 1; i >= 3 * k - 1; i--) {
//         dp(i, 0, [i - k + 1]);
//     }

//     return data;
// };

var maxSumOfThreeSubarrays = function (nums, K) {
    // debugger;
    //W is an array of sums of windows
    var W = []
    var sum = 0;
    for (var i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (i >= K) sum -= nums[i - K];
        if (i >= K - 1) W[i - K + 1] = sum;
    }

    var left = [];
    var best = 0;

    for (var i = 0; i < W.length; i++) {
        if (W[i] > W[best]) best = i;
        left[i] = best;
    }

    var right = [];

    best = W.length - 1;

    for (var i = W.length - 1; i >= 0; i--) {
        if (W[i] >= W[best]) best = i;
        right[i] = best;
    }

    var ans = [-1, -1, -1];

    for (var j = K; j < W.length - K; j++) {
        var i = left[j - K], k = right[j + K];
        if (ans[0] == -1 || W[i] + W[j] + W[k] >
            W[ans[0]] + W[ans[1]] + W[ans[2]]) {

            ans[0] = i;
            ans[1] = j;
            ans[2] = k;
        }
    }
    return ans;
}
