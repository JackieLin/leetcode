/*
 * @lc app=leetcode id=57 lang=javascript
 *
 * [57] Insert Interval
 */
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
    var result = [];
    var interval;
    var i;
    var j;

    // debugger;
    function link(src, dest) {
        var [t0, t1] = dest;
        var [p0, p1] = src;

        if (t1 >= p0 && t1 <= p1) {
            return {
                isLink: true,
                point: [Math.min(t0, p0), p1]
            }
        } else if (t0 <= p1 && t1 >= p1) {
            return {
                isLink: true,
                point: [Math.min(t0, p0), t1]
            };
        } else if (t1 < p0) {
            return {
                isLink: false,
                point: dest
            };
        }

        return false;
    }

    for (i = 0; i < intervals.length; i++) {
        interval = link(intervals[i], newInterval);
        if (interval && interval.isLink) {
            interval = interval.point;
            break;
        } else if (interval && !interval.isLink) {
            result.push(interval.point);
            result.push(intervals[i]);
            interval = null;
            break;
        } else {
            // 没有交集
            result.push(intervals[i]);
            interval = undefined;
        }
    }

    if (i >= intervals.length && interval === undefined) {
        result.push(newInterval);
        return result;
    }

    var current = interval;

    if (interval) {
        for (j = i + 1; j < intervals.length; j++) {
            current = link(intervals[j], interval)
            if (current && current.isLink) {
                interval = current.point;
            } else if (current && !current.isLink) {
                result.push(current.point);
                interval = null;
                break;
            } else {
                result.push(interval);
                interval = null;
                break;
            }
        }
    } else {
        j = i + 1;
    }

    if (interval) {
        result.push(interval);
    }

    for (i = j; i < intervals.length; i++) {
        result.push(intervals[i]);
    }

    return result;
};

