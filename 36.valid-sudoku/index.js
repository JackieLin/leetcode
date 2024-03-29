/*
 * @lc app=leetcode id=36 lang=javascript
 *
 * [36] Valid Sudoku
 *
 * https://leetcode.com/problems/valid-sudoku/description/
 *
 * algorithms
 * Medium (42.16%)
 * Total Accepted:    220.4K
 * Total Submissions: 522.7K
 * Testcase Example:  '[["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]'
 *
 * Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be
 * validated according to the following rules:
 * 
 * 
 * Each row must contain the digits 1-9 without repetition.
 * Each column must contain the digits 1-9 without repetition.
 * Each of the 9 3x3 sub-boxes of the grid must contain the digits 1-9 without
 * repetition.
 * 
 * 
 * 
 * A partially filled sudoku which is valid.
 * 
 * The Sudoku board could be partially filled, where empty cells are filled
 * with the character '.'.
 * 
 * Example 1:
 * 
 * 
 * Input:
 * [
 * ⁠ ["5","3",".",".","7",".",".",".","."],
 * ⁠ ["6",".",".","1","9","5",".",".","."],
 * ⁠ [".","9","8",".",".",".",".","6","."],
 * ⁠ ["8",".",".",".","6",".",".",".","3"],
 * ⁠ ["4",".",".","8",".","3",".",".","1"],
 * ⁠ ["7",".",".",".","2",".",".",".","6"],
 * ⁠ [".","6",".",".",".",".","2","8","."],
 * ⁠ [".",".",".","4","1","9",".",".","5"],
 * ⁠ [".",".",".",".","8",".",".","7","9"]
 * ]
 * Output: true
 * 
 * 
 * Example 2:
 * 
 * 
 * Input:
 * [
 * ["8","3",".",".","7",".",".",".","."],
 * ["6",".",".","1","9","5",".",".","."],
 * [".","9","8",".",".",".",".","6","."],
 * ["8",".",".",".","6",".",".",".","3"],
 * ["4",".",".","8",".","3",".",".","1"],
 * ["7",".",".",".","2",".",".",".","6"],
 * [".","6",".",".",".",".","2","8","."],
 * [".",".",".","4","1","9",".",".","5"],
 * [".",".",".",".","8",".",".","7","9"]
 * ]
 * Output: false
 * Explanation: Same as Example 1, except with the 5 in the top left corner
 * being 
 * ⁠   modified to 8. Since there are two 8's in the top left 3x3 sub-box, it
 * is invalid.
 * 
 * 
 * Note:
 * 
 * 
 * A Sudoku board (partially filled) could be valid but is not necessarily
 * solvable.
 * Only the filled cells need to be validated according to the mentioned
 * rules.
 * The given board contain only digits 1-9 and the character '.'.
 * The given board size is always 9x9.
 * 
 * 
 */
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    var map = {};
    var row = board.length;
    var col = board[0].length;

    for(var i = 0; i < row; i++) {
        map = {};
        for(var j = 0; j < col; j++) {
            if (board[i][j] >= '1' && board[i][j] <= '9') {
                if (map[board[i][j]]) return false;
                map[board[i][j]] = true;
            } else if (board[i][j] !== '.') {
                return false;
            }
        }
    }

    for(var j = 0; j < col; j++) {
        map = {};
        for(var i = 0; i < row; i++) {
            if (board[i][j] >= '1' && board[i][j] <= '9') {
                if (map[board[i][j]]) return false;
                map[board[i][j]] = true;
            } else if (board[i][j] !== '.') {
                return false;
            }
        }
    }

    for(var i = 2; i < row; i += 3) {
        for(var j = 2; j < col; j += 3) {
            map = {};
            for(var t = i - 2; t <= i; t++) {
                for(var k = j - 2; k <= j; k++) {
                    if (board[t][k] >= '1' && board[t][k] <= '9') {
                        if (map[board[t][k]]) return false;
                        map[board[t][k]] = true;
                    } else if (board[t][k] !== '.') {
                        return false;
                    }
                }
            }
        }
    }

    return true;
};

