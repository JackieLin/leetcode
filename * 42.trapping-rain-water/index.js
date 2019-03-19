/*
 * @lc app=leetcode id=42 lang=javascript
 *
 * [42] Trapping Rain Water
 *
 * https://leetcode.com/problems/trapping-rain-water/description/
 *
 * algorithms
 * Hard (42.18%)
 * Total Accepted:    264.5K
 * Total Submissions: 626.9K
 * Testcase Example:  '[0,1,0,2,1,0,1,3,2,1,2,1]'
 *
 * Given n non-negative integers representing an elevation map where the width
 * of each bar is 1, compute how much water it is able to trap after raining.
 * 
 * 
 * The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1].
 * In this case, 6 units of rain water (blue section) are being trapped. Thanks
 * Marcos for contributing this image!
 * 
 * Example:
 * 
 * 
 * Input: [0,1,0,2,1,0,1,3,2,1,2,1]
 * Output: 6
 * 
 */
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    if (!height) return 0;
    var leftMax = [];
    var rightMax = [];
    var ans = 0;
    leftMax[0] = height[0];

    for(var i = 1; i < height.length; i++) {
        leftMax[i] = Math.max(height[i], leftMax[i - 1]);
    }

    rightMax[height.length - 1] = height[height.length - 1];

    for(var i = height.length - 2; i >= 0; i--) {
        rightMax[i] = Math.max(height[i], rightMax[i + 1])
    }

    for (var i = 1; i < height.length - 1; i++) {
        ans += Math.min(leftMax[i], rightMax[i]) - height[i];
    }

    return ans;
};

