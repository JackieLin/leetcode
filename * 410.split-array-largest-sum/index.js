/*
 * @lc app=leetcode id=410 lang=javascript
 *
 * [410] Split Array Largest Sum
 *
 * https://leetcode.com/problems/split-array-largest-sum/description/
 *
 * 采用二分查找和贪心算法， 因为最小，所以需要每次分隔都是最大的
 * 
 * algorithms
 * Hard (41.92%)
 * Total Accepted:    37.1K
 * Total Submissions: 88.5K
 * Testcase Example:  '[7,2,5,10,8]\n2'
 *
 * Given an array which consists of non-negative integers and an integer m, you
 * can split the array into m non-empty continuous subarrays. Write an
 * algorithm to minimize the largest sum among these m subarrays.
 * 
 * 
 * Note:
 * If n is the length of array, assume the following constraints are
 * satisfied:
 * 
 * 1 ≤ n ≤ 1000
 * 1 ≤ m ≤ min(50, n)
 * 
 * 
 * 
 * Examples: 
 * 
 * Input:
 * nums = [7,2,5,10,8]
 * m = 2
 * 
 * Output:
 * 18
 * 
 * Explanation:
 * There are four ways to split nums into two subarrays.
 * The best way is to split it into [7,2,5] and [10,8],
 * where the largest sum among the two subarrays is only 18.
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
// var splitArray = function (nums, m) {
//     var length = nums.length;
//     var result = []
//     var minData = Number.MAX_SAFE_INTEGER;
//     var memo = [];

//     for (var i = 0; i < length; i++) {
//         memo[i] = [];
//         for(var k = 0; k < length; k++) {
//             memo[i][k] = [];
//             for (var j = 0; j < m; j++) {
//                 memo[i][k][j] = 0;
//             }    
//         }
//     }

//     if (m === 1) {
//         var sum = 0
//         for (var i = 0; i < length; i++) {
//             sum += nums[i];
//         }

//         return sum;
//     }


//     // debugger;
//     function division(begin, count) {
//         var min = Number.MAX_SAFE_INTEGER;


//         for (var i = begin + 1; i <= length - m + count; i++) {

//             if (!memo[begin][i][count]) {
//                 var left = 0;
//                 var right = 0;
//                 var sum;
//                 for (var j = begin; j < i; j++) {
//                     left += nums[j];
//                 }

//                 if (count + 1 === m) {
//                     for (var j = i; j < length; j++) {
//                         right += nums[j];
//                     }
//                 } else {
//                     right = division(i, count + 1);
//                 }

//                 sum = Math.max(left, right)

//                 memo[begin][i][count] = sum;
//             } else {
//                 console.log(begin + '   ' + i + '    ' + count + '   ' + memo[begin][i][count]);
//             }

//             if (min > memo[begin][i][count]) {
//                 min = memo[begin][i][count];
//             }

//             if (begin === 0) {
//                 result.push(memo[begin][i][count])
//             }
//             // result.push({
//             //     begin,
//             //     sep: i,
//             //     value: Math.max(left, right)
//             // })    
//         }

//         // memo[begin][count] = min;

//         return min;
//     }

//     division(0, 1);

//     for (var i = 0; i < result.length; i++) {
//         if (minData > result[i]) {
//             minData = result[i]
//         }
//     }

//     return minData;
// };

var splitArray = function (nums, m) {
    var left = Math.max(...nums);
    var right = nums.reduce((a, b) => a + b);

    while(left <= right) {
        var mid = Math.floor((left + right) / 2);
        var sum = 0;
        var count = 1;
        for (const num of nums) {
            if (num + sum > mid) {
                if (++count > m) break;
                sum = num;
            } else {
                sum += num;
            }
        }

        if (count <= m) right = mid - 1;
        else left = mid + 1;
    }

    return left;
}
