/*
 * @lc app=leetcode id=553 lang=javascript
 *
 * [553] Optimal Division
 *
 * 这道题还是很有难度的，主要采用 division 的方法去解决，方式就是 i 表示将数字划为多少段的问题
 * 
 * https://leetcode.com/problems/optimal-division/description/
 *
 * algorithms
 * Medium (55.04%)
 * Total Accepted:    19.3K
 * Total Submissions: 35.1K
 * Testcase Example:  '[1000,100,10,2]'
 *
 * Given a list of positive integers, the adjacent integers will perform the
 * float division. For example, [2,3,4] -> 2 / 3 / 4.
 * 
 * However, you can add any number of parenthesis at any position to change the
 * priority of operations. You should find out how to add parenthesis to get
 * the maximum result, and return the corresponding expression in string
 * format. Your expression should NOT contain redundant parenthesis.
 * 
 * Example:
 * 
 * Input: [1000,100,10,2]
 * Output: "1000/(100/10/2)"
 * Explanation:
 * 1000/(100/10/2) = 1000/((100/10)/2) = 200
 * However, the bold parenthesis in "1000/((100/10)/2)" are redundant, since
 * they don't influence the operation priority. So you should return
 * "1000/(100/10/2)". 
 * 
 * Other cases:
 * 1000/(100/10)/2 = 50
 * 1000/(100/(10/2)) = 50
 * 1000/100/10/2 = 0.5
 * 1000/100/(10/2) = 2
 * 
 * 
 * 
 * Note:
 * 
 * The length of the input array is [1, 10].
 * Elements in the given array will be in range [2, 1000].
 * There is only one optimal division for each test case.
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {string}
 */
var optimalDivision = function(nums) {
    function division(nums, start, end, str) {
        var result = {
            min: Number.MAX_SAFE_INTEGER,
            max: Number.MIN_SAFE_INTEGER,
            minStr: '',
            maxStr: ''
        }

        // 结束
        if (start === end) {
            result.min = nums[start];
            result.max = nums[start];
            result.minStr = result.min + '';
            result.maxStr = result.max + '';

            return result;
        }

        for(var i = start; i < end; i++) {
            var left = division(nums, start, i);
            var right = division(nums, i + 1, end);

            // 需要更新
            if (result.min > left.min / right.max) {
                result.min = left.min / right.max;
                result.minStr = left.minStr + "/" + (i + 1 != end ? "(" : "") + right.maxStr + (i + 1 != end ? ")" : "");
            }

            if (result.max < left.max / right.min) {
                result.max = left.max / right.min;
                result.maxStr = left.maxStr + "/" + (i + 1 != end ? "(" : "") + right.minStr + (i + 1 != end ? ")" : "");
            }
        }

        return result;
    }

    // debugger;
    return division(nums, 0, nums.length - 1).maxStr;
};

