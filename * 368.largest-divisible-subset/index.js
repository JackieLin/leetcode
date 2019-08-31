// /*
//  * @lc app=leetcode id=368 lang=javascript
//  *
//  * [368] Largest Divisible Subset
//  */
// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// var largestDivisibleSubset = function (nums) {
//     var len = nums.length;
//     var data = []
//     nums = nums.sort()
//     // var map = {};
//     // debugger;
//     function dfs(arr, result) {
//         if (data.length === len) return;
//         if (arr.length + result.length <= data.length) return;

//         for (var i = 0; i < arr.length; i++) {
//             var item = arr[i];
//             // for (var j = 0; j < result.length; j++) {
//             //     if (result[j] % item !== 0 && item % result[j] !== 0) break;
//             // }

//             // 符合要求，加入
//             if (!result.length) {
//                 arr.splice(i, 1);
//                 dfs(arr, result.concat(item));
//                 arr.splice(i, 0, item)
//             } else if (result.length === 1 && item % result[0] === 0) {
//                 arr.splice(i, 1);
//                 dfs(arr, result.concat(item));
//                 arr.splice(i, 0, item)
//             } else if (result.length >= 2 && item % (result[1] / result[0]) === 0) {
//                 arr.splice(i, 1);
//                 dfs(arr, result.concat(item));
//                 arr.splice(i, 0, item)
//             }
//         }
//         // 结束
//         if (data.length < result.length) {
//             data = result;
//         }

//     }

//     dfs(nums, []);
//     return data;
// };

var largestDivisibleSubset = function (nums) {
    if (!nums.length) return [];
    nums = nums.sort((a, b) => a - b)

    var dp = new Array(nums.length).fill(1)
    var pre = new Array(nums.length).fill(-1)
    var max = 0;
    var preIdx = 0
    dp[0] = 1;

    // debugger
    for(var i = 1; i < nums.length; i++) {
        for(var j = i - 1; j >= 0; j--) {
            if (nums[i] % nums[j] === 0) {
                if (dp[i] < dp[j] + 1) {
                    dp[i] = dp[j] + 1
                    pre[i] = j
                }

                if (max < dp[i]) {
                    max = dp[i]
                    preIdx = i
                }
            }
        }
    }

    var result = []
    while(preIdx !== -1) {
        result.unshift(nums[preIdx])
        preIdx = pre[preIdx]
    }

    return result;
}

