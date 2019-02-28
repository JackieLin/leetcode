/*
 * @lc app=leetcode id=212 lang=javascript
 * 通过构建 trie 树解决这个问题（注意）
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
// var findWords = function(board, words) {
//   var curr;
//   var fisrt;
//   var currItemIndex;
//   var stack = [];
//   var result = [];
//   var index = 0;
//   var currentStack = [];
//   var currentMap = {};
//   var left, right, bottom, top;
//   var row, col;

//   for (var i = 0; i < words.length; i++) {
//     currentMap[words[i]] = true;
//   }

//   words = Object.keys(currentMap);
//   currentMap = {};

//   for (var i = 0; i < words.length; i++) {
//     curr = words[i];
//     for(var j = 0; j < board.length; j++) {
//         if (index >= curr.length) {
//             break;
//         }
//         for (var k = 0; k < board[j].length; k++) {
//             fisrt = board[j][k];
//             if (fisrt === curr[index]) {
//                 stack.push(j + '' + k);
//                 currentStack.push(stack[stack.length - 1]);
//                 currentMap[j + '' + k] = true;
//                 index++;

//                 // debugger
//                 if (index >= curr.length) {
//                     break;
//                 }

//                 while(true) {
//                     // 匹配
//                     if (index >= curr.length) {
//                         break;
//                     }

//                     if (!stack.length) {
//                         index = 0;
//                         currentStack = [];
//                         currentMap={};
//                         break;
//                     }

//                     currItemIndex = currentStack[currentStack.length - 1];
//                     row = Number(currItemIndex[0]);
//                     col = Number(currItemIndex[1]);

//                     // debugger
//                     try {
//                         if (!currentMap[row + '' + (col - 1)]) {
//                             left = board[row][col - 1];
//                         } else {
//                             left = undefined;
//                         }
//                     } catch(e) {
//                         left = undefined;
//                     }

//                     try {
//                         if (!currentMap[row + '' + (col + 1)]) {
//                             right = board[row][col + 1];
//                         } else {
//                             right = undefined;
//                         }
//                     } catch(e) {
//                         right = undefined;
//                     }
//                     try {
//                         if (!currentMap[(row - 1) + '' + col]) {
//                             top = board[row - 1][col];
//                         } else {
//                             top = undefined;
//                         }
//                     } catch(e) {
//                         top = undefined;
//                     }
//                     try {
//                         if (!currentMap[(row + 1) + '' + col]) {
//                             bottom = board[row + 1][col];
//                         } else {
//                             bottom = undefined;
//                         }
//                     } catch(e) {
//                         bottom = undefined;
//                     }

//                     if (curr[index] === left) {
//                         stack.push(row + '' + (col - 1))
//                     }
//                     if (curr[index] === right) {
//                         stack.push(row + '' + (col + 1))
//                     }
//                     if (curr[index] === top) {
//                         stack.push((row - 1) + '' + col)
//                     }
//                     if (curr[index] === bottom) {
//                         stack.push((row + 1) + '' + col);
//                     }

//                     // debugger;
//                     index++
//                     // 没有一个符合条件的
//                     if  (stack[stack.length - 1] === currentStack[currentStack.length - 1]) {
//                         while(stack[stack.length - 1] === currentStack[currentStack.length - 1]) {
//                             currentMap[currentStack.pop()] = false;
//                             stack.pop();
//                             index--
//                             if (stack.length === 0 || currentStack.length === 0) break;
//                         }
//                     }

//                     if (stack.length) {
//                         currentStack.push(stack[stack.length - 1]);
//                         currentMap[stack[stack.length - 1]] = true;    
//                     }
//                 }
//             } else {
//                 continue;
//             }
//         }
//     }

//     if (index >= curr.length) {
//         result.push(curr)
//         index = 0;
//         stack = [];
//         currentStack = [];
//         currentMap={};
//     }
//   }  

//   return result;
// };

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
    var trie = {};
    var t;
    for (var word of words) {
        t = trie;
        for (var char of word) {
            if (!t[char]) {
                t[char] = {};
            }
            t = t[char];
        }
        t['#'] = word;
    }

    var row = board.length;
    var col = board[0].length;
    var result = []
        
    function dfs(r, c, tree) {
        var next = tree[board[r][c]];
        var letter = board[r][c];
        board[r][c] = '#';

        // 结束
        if (next['#'] && next['#'] !== '#') {
            result.push(next['#']);
            next['#'] = '#';
        }

        // left
        if (c >= 1 && board[r][c - 1] !== '#' && next[board[r][c - 1]]) {
            dfs(r, c - 1, next);
        }
        // right
        if (c + 1 < col && board[r][c + 1] !== '#' && next[board[r][c + 1]]) {
            dfs(r, c + 1, next);
        }
        // top
        if (r >= 1 && board[r - 1][c] !== '#' && next[board[r - 1][c]]) {
            dfs(r - 1, c, next);
        }
        // bottom
        if (r + 1 < row && board[r + 1][c] !== '#' && next[board[r + 1][c]]) {
            dfs(r + 1, c, next);
        }

        board[r][c] = letter;
    }

    for (var i = 0; i < row; i++) {
        for (var j = 0; j < col; j++) {
            if (trie[board[i][j]]) {
                dfs(i, j, trie);
            }
        }
    }

    return result;
};

