/*
 * @lc app=leetcode id=373 lang=javascript
 *
 * [373] Find K Pairs with Smallest Sums
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
    var result = [];

    for(var i = 0; i < nums1.length; i++) {
        for(var j = 0; j < nums2.length; j++) {
            result.push([nums1[i], nums2[j]])
        }
    }

    result = result.sort((a, b) => (a[0] + a[1]) - (b[0] + b[1]))

    if (result.length <= k) {
        return result;
    }

    return result.slice(0, k)
};

