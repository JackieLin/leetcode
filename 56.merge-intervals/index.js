/*
 * @lc app=leetcode id=56 lang=javascript
 *
 * [56] Merge Intervals
 *
 * https://leetcode.com/problems/merge-intervals/description/
 *
 * algorithms
 * Medium (35.13%)
 * Total Accepted:    320.6K
 * Total Submissions: 912.6K
 * Testcase Example:  '[[1,3],[2,6],[8,10],[15,18]]'
 *
 * Given a collection of intervals, merge all overlapping intervals.
 * 
 * Example 1:
 * 
 * 
 * Input: [[1,3],[2,6],[8,10],[15,18]]
 * Output: [[1,6],[8,10],[15,18]]
 * Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into
 * [1,6].
 * 
 * 
 * Example 2:7
 * 
 * 
 * Input: [[1,4],[4,5]]
 * Output: [[1,5]]
 * Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 * 
 */
/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
    intervals = intervals.sort((a, b) => a.start - b.start);
    if (!intervals.length) return intervals;

    var result = [intervals[0]];

    for(var i = 1; i < intervals.length; i++) {
        var item = result.pop();
        // 重合
        if (item.end >= intervals[i].start) {
            item.end = Math.max(item.end, intervals[i].end)
            result.push(item);
        } else {
            result.push(item);
            result.push(intervals[i]);
        }
    }

    return result
};

