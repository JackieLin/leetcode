/**
 * 此种解法耗时 O((mn)^2) 动态规划有更好的方法只需要访问一次节点即可
 * @wiki https://leetcode.com/problems/maximal-square/solution/
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    var row = matrix.length;
    if (!row) {
        return 0;
    }
    var column = matrix[0].length;
    var max = 0;
    var child;
    var store = {};
    
    if (!column) {
        return 0;
    }
        
    function dp(startX, startY, n) {
        try {
            if (store[startX][startY][n]) {
                return store[startX][startY][n];
            }            
        } catch(e) {
            
        }
        
        var flag = true;
        var value;
        for(var i = startX; i < startX + n; i++) {
            for(var j = startY; j < startY + n; j++) {
                if (matrix[i][j] === '0') {
                    flag = false;                    
                    break;
                }
            }
        }
        
        // max
        if (flag) {
            value = n * n;
        } else if (n === 1) {
            value = matrix[startX][startY]
        } else {
            value = Math.max(dp(startX, startY, n - 1), dp(startX, startY + 1, n - 1), dp(startX + 1, startY, n - 1), dp(startX + 1, startY + 1, n - 1));
        }
        
        if (!store[startX]) {
            store[startX] = {};
        }

        if (!store[startX][startY]) {
            store[startX][startY] = {};
        }

        store[startX][startY][n] = value;
        
        return value;
    }
    
    if (column >= row) {
        for(var i = 0; i <= column-row; i++) {
            child = dp(0, i, row);
            if (child > max) {
                max = child
            }
        }
    } else {
       for(var i = 0; i <= row-column; i++) {
            child = dp(i, 0, column);
            if (child > max) {
                max = child
            }
        } 
    }
    
    return max;
};