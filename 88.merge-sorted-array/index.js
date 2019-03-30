/*
 * @lc app=leetcode id=88 lang=javascript
 *
 * [88] Merge Sorted Array
 *
 * https://leetcode.com/problems/merge-sorted-array/description/
 *
 * algorithms
 * Easy (35.16%)
 * Total Accepted:    342.1K
 * Total Submissions: 973.1K
 * Testcase Example:  '[1,2,3,0,0,0]\n3\n[2,5,6]\n3'
 *
 * Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as
 * one sorted array.
 * 
 * Note:
 * 
 * 
 * The number of elements initialized in nums1 and nums2 are m and n
 * respectively.
 * You may assume that nums1 has enough space (size that is greater or equal to
 * m + n) to hold additional elements from nums2.
 * 
 * 
 * Example:
 * 
 * 
 * Input:
 * nums1 = [1,2,3,0,0,0], m = 3
 * nums2 = [2,5,6],       n = 3
 * 
 * Output: [1,2,2,3,5,6]
 * 
 * 
 */
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    var arr = [];
    var p1 = 0;
    var p2 = 0;

    while(p1 < m && p2 < n) {
        if (nums1[p1] < nums2[p2]) {
            arr.push(nums1[p1++])
        } else if (nums1[p1] > nums2[p2]) {
            arr.push(nums2[p2++])
        } else {
            arr.push(nums2[p2++])
            arr.push(nums1[p1++])
        }
    }

    while(p1 < m) {
        arr.push(nums1[p1++])
    }

    while(p2 < n) {
        arr.push(nums2[p2++])
    }

    for(var i = 0; i < arr.length; i++) {
        nums1[i] = arr[i]
    }
};

