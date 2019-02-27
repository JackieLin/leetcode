/*
 * @lc app=leetcode id=212 lang=javascript
 *
 * [212] Word Search II
 *
 * https://leetcode.com/problems/word-search-ii/description/
 *
 * algorithms
 * Hard (27.50%)
 * Total Accepted:    98.7K
 * Total Submissions: 358.6K
 * Testcase Example:  '[["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]]\n["oath","pea","eat","rain"]'
 *
 * Given a 2D board and a list of words from the dictionary, find all words in
 * the board.
 * 
 * Each word must be constructed from letters of sequentially adjacent cell,
 * where "adjacent" cells are those horizontally or vertically neighboring. The
 * same letter cell may not be used more than once in a word.
 * 
 * Example:
 * 
 * 
 * Input: 
 * words = ["oath","pea","eat","rain"] and board =
 * [
 * ⁠ ['o','a','a','n'],
 * ⁠ ['e','t','a','e'],
 * ⁠ ['i','h','k','r'],
 * ⁠ ['i','f','l','v']
 * ]
 * 
 * Output: ["eat","oath"]
 * 
 * 
 * Note:
 * You may assume that all inputs are consist of lowercase letters a-z.
 */
/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
  var curr;
  var fisrt;
  var stack = [];
  var index = 0;
  var currentStack = [];
  var left, right, bottom, top;

  for (var i = 0; i < words.length; i++) {
    curr = words[i];
    for(var j = 0; j < board.length; j++) {
        for (var k = 0; k < board[j].length; k++) {
            fisrt = board[j][k];
            if (fisrt === curr[index]) {
                index++;
                while(true) {
                    left = board[j][k - 1];
                    right = board[j][k + 1];
                    top = board[j - 1][k];
                    bottom = board[j - 1][k];
                    if (curr[index] === left) {
                        
                    }
                }
            } else {
                continue;
            }
        }
    }
  }  
};

