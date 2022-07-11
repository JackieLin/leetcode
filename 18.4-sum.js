/*
 * @lc app=leetcode id=18 lang=javascript
 *
 * [18] 4Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
 var fourSum = function(nums, target) {
  nums.sort((a, b) => a - b);  
  let lens = nums.length;
  const data = [];
  const map = {};
  for(let d = lens - 1; d >= 0; d--) {
    for(let c = d - 1; c >= 0; c--) {
      let a = 0;
      let b = d - 1;
      let result = target - nums[c] - nums[d];
      while(a === c || a === d) a++;
      while(b === c || b === d) b--;
      if (a >= b) continue;
      while(a < b) {
        if (a >= b) break;
        while (nums[a] + nums[b] < result || a === c || a === d) a++;
        while (nums[a] + nums[b] > result || b === c || b === d) b--;
        if (a >= b) break;         
        if (nums[a] + nums[b] === result) {
            let t = [nums[a], nums[b], nums[c], nums[d]].sort((a, b) => a - b);
            if (!map[t.join(',')]) {
                map[t.join(',')] = true;
                data.push(t);
            }
            a++;
            b--;
        };
      }
    }
  }

  return data;
};
// @lc code=end

