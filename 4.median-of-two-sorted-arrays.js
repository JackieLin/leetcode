/*
 * @lc app=leetcode id=4 lang=javascript
 *
 * [4] Median of Two Sorted Arrays
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let result1 = 0;
    let num = 2;
    if (!nums1.length) {result1 = 0; num -= 1}
    else if (nums1.length === 1) {
      result1 = nums1[0];
    } else {
      const nums1Middle = Math.round(nums1.length / 2);
      const a = nums1Middle % 2 ? [nums1[nums1Middle - 1], nums1[nums1Middle]] : [nums1[nums1Middle]];
      const num1 = a.reduce((acc, prev) => acc + prev, 0);
      result1 = num1 / a.length;   
    }

   let result2;
   if (!nums2.length) {result2 = 0; num -= 1}
   else if (nums2.length === 1) {
     result2 = nums2[0];
   } else {
    const nums2Middle = Math.round(nums2.length / 2);
    const b = nums2Middle % 2 ? [nums2[nums2Middle - 1], nums2[nums2Middle]] : [nums2[nums2Middle]];
    const num2 = b.reduce((acc, prev) => acc + prev, 0);
    result2 = num2 / b.length; 
    }

   return (result1 + result2) / (num || 1);

};
// @lc code=end

