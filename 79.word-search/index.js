/*
 * @lc app=leetcode id=79 lang=javascript
 *
 * [79] Word Search
 *
 * https://leetcode.com/problems/word-search/description/
 *
 * algorithms
 * Medium (30.68%)
 * Total Accepted:    261.9K
 * Total Submissions: 853.7K
 * Testcase Example:  '[["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]\n"ABCCED"'
 *
 * Given a 2D board and a word, find if the word exists in the grid.
 * 
 * The word can be constructed from letters of sequentially adjacent cell,
 * where "adjacent" cells are those horizontally or vertically neighboring. The
 * same letter cell may not be used more than once.
 * 
 * Example:
 * 
 * 
 * board =
 * [
 * ⁠ ['A','B','C','E'],
 * ⁠ ['S','F','C','S'],
 * ⁠ ['A','D','E','E']
 * ]
 * 
 * Given word = "ABCCED", return true.
 * Given word = "SEE", return true.
 * Given word = "ABCB", return false.
 * 
 * 
 */
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    var size = word.length;
    if (!size) return true;
    
    var row = board.length;
    if (!row) return false;
    var col = board[0].length;
    if (!col) return false;

    function search(x, y, index) {
        if (board[x][y] === word[index]) {
            var temp = board[x][y];
            board[x][y] = '#';
            var childMatch = false;
            
            if (index + 1 >= size) return true;

            // 上
            if (x > 0) {
                childMatch = childMatch || search(x - 1, y, index + 1);
            }

            // 下
            if (!childMatch && x < row - 1) {
                childMatch = childMatch || search(x + 1, y, index + 1);
            }

            // 左
            if (!childMatch && y > 0) {
                childMatch = childMatch || search(x, y - 1, index + 1);
            }

            // 右
            if (!childMatch && y < col - 1) {
                childMatch = childMatch || search(x, y + 1, index + 1);
            }

            board[x][y] = temp;

            return childMatch;
        }

        return false;
    }

    for(var i = 0; i < row; i++) {
        for(var j = 0; j < col; j++) {
            if (board[i][j] === word[0] && search(i, j, 0)) {
                return true;
            }
        }
    }

    return false;
};

