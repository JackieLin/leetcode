/*
 * @lc app=leetcode id=398 lang=javascript
 *
 * [398] Random Pick Index
 *
 * https://leetcode.com/problems/random-pick-index/description/
 *
 * algorithms
 * Medium (49.49%)
 * Total Accepted:    53.6K
 * Total Submissions: 108.3K
 * Testcase Example:  '["Solution","pick"]\n[[[1,2,3,3,3]],[3]]'
 *
 * Given an array of integers with possible duplicates, randomly output the
 * index of a given target number. You can assume that the given target number
 * must exist in the array.
 * 
 * Note:
 * The array size can be very large. Solution that uses too much extra space
 * will not pass the judge.
 * 
 * Example:
 * 
 * 
 * int[] nums = new int[] {1,2,3,3,3};
 * Solution solution = new Solution(nums);
 * 
 * // pick(3) should return either index 2, 3, or 4 randomly. Each index should
 * have equal probability of returning.
 * solution.pick(3);
 * 
 * // pick(1) should return 0. Since in the array only nums[0] is equal to 1.
 * solution.pick(1);
 * 
 * 
 */
/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
   this.map = {};
   
   for(var i = 0; i < nums.length; i++) {
       if (!this.map[nums[i]]) {
        this.map[nums[i]] = []
       }

       this.map[nums[i]].push(i);
   }
};

/** 
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function(target) {
    var data = this.map[target];
    var length = data.length;
    
    return data[Math.floor(Math.random() * length)]
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */

