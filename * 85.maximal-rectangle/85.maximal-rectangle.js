/*
 * @lc app=leetcode id=85 lang=javascript
 *
 * 此题是 84 题的变种，很有意思
 * https://www.youtube.com/watch?v=2Yk3Avrzauk
 * 
 * var maximalRectangle = function (matrix) {
    const n = matrix.length;
    if (n === 0) return 0;
    const m = matrix[0].length;

    const h = new Array(n).fill(0);

    let max = 0;
    for (let j = 0; j < m; j++) {
        for (let i = 0; i < n; i++) {
            if (matrix[i][j] === '1') h[i]++;
            else h[i] = 0;
        }
        for (let i = 0; i < n; i++) {
            let k1 = i - 1;
            while (k1 >= 0 && h[i] <= h[k1]) k1--;
            let k2 = i + 1;
            while (k2 < n && h[i] <= h[k2]) k2++;
            max = Math.max(max, h[i] * (k2 - k1 - 1));
        }
    }
    return max;
}
 * [85] Maximal Rectangle
 */
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    var row = matrix.length;
    if (!row) return 0
    var col = matrix[0].length;
    if (!col) return 0;
    var height = [];
    var max = 0;

    // debugger;
    for(var i = 0; i < col; i++) {
        height[i] = 0;
    }

    for(var i = 0; i < row; i++) {
        for(var j = 0; j < col; j++) {
            if (matrix[i][j] === '1') {
                height[j]++;
            } else {
                height[j] = 0;
            }
        }

        max = Math.max(maxArea(height), max);
    }

    return max;

    function maxArea(height) {
        if (!height || !height.length) return 0;
        var stack = [];
        var maxA = 0;
        
        for(var i = 0; i <= height.length; i++) {
            var hItem = i === height.length ? -1 : height[i]
            while(stack.length && height[stack[stack.length - 1]] >= hItem) {
                var maxHeight = height[stack.pop()]
                var area = !stack.length ? i * maxHeight : maxHeight * (i - stack[stack.length - 1] - 1);
                maxA = Math.max(area, maxA);
            }

            stack.push(i);
        }

        return maxA;
    }
};

