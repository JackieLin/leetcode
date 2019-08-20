/*
 * @lc app=leetcode id=368 lang=javascript
 *
 * [368] Largest Divisible Subset
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
    var len = nums.length;
    var data = []
    // var map = {};
    // debugger;
    function dfs(arr, result) {
        if (data.length === len) return;
        if (arr.length + result.length <= data.length) return;
        
        for(var i = 0; i < arr.length; i++) {
            var item = arr[i];
            for(var j = 0; j < result.length; j++) {
                if (result[j] % item !== 0 && item % result[j] !== 0) break;
            }

            // 符合要求，加入
            if (j >= result.length) {
                arr.splice(i, 1);
                dfs(arr, result.concat(item));
                arr.splice(i, 0, item)
            }
        }

        // 结束
        if (data.length < result.length) {
            data = result;
        }
    }

    dfs(nums, []);
    return data;
};

