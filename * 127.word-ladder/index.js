/*
 * @lc app=leetcode id=127 lang=javascript
 * 采用 BFS 的思想实现，注意一些细节的判断上面
 * [127] Word Ladder
 * 
 * https://leetcode.com/problems/word-ladder/description/
 *
 * algorithms
 * Medium (22.98%)
 * Total Accepted:    232.9K
 * Total Submissions: 1M
 * Testcase Example:  '"hit"\n"cog"\n["hot","dot","dog","lot","log","cog"]'
 *
 * Given two words (beginWord and endWord), and a dictionary's word list, find
 * the length of shortest transformation sequence from beginWord to endWord,
 * such that:
 * 
 * 
 * Only one letter can be changed at a time.
 * Each transformed word must exist in the word list. Note that beginWord is
 * not a transformed word.
 * 
 * 
 * Note:
 * 
 * 
 * Return 0 if there is no such transformation sequence.
 * All words have the same length.
 * All words contain only lowercase alphabetic characters.
 * You may assume no duplicates in the word list.
 * You may assume beginWord and endWord are non-empty and are not the same.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input:
 * beginWord = "hit",
 * endWord = "cog",
 * wordList = ["hot","dot","dog","lot","log","cog"]
 * 
 * Output: 5
 * 
 * Explanation: As one shortest transformation is "hit" -> "hot" -> "dot" ->
 * "dog" -> "cog",
 * return its length 5.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input:
 * beginWord = "hit"
 * endWord = "cog"
 * wordList = ["hot","dot","dog","lot","log"]
 * 
 * Output: 0
 * 
 * Explanation: The endWord "cog" is not in wordList, therefore no possible
 * transformation.
 * 
 * 
 * 
 * 
 * 
 */
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
// var ladderLength = function(beginWord, endWord, wordList) {
//     var queue = [{
//         word: beginWord,
//         path: []
//     }];
//     var len = wordList.length;

//     function isOneWordChange(word1, word2) {
//         var diff = 0;
//         for(var i = 0; i < word1.length; i++) {
//             if (word1[i] !== word2[i]) diff++;
//             if (diff > 1) break;
//         }

//         return diff === 1 ? true : false
//     }

//     for(var i = 0; i < len; i++) {
//         if (wordList[i] === endWord) break;
//     }

//     if (i >= len) return 0;

//     while(queue.length) {
//         var source = queue.shift();

//         if (source[word] === endWord) return source.path.length;

//         for(var i = 0; i < len; i++) {
//             if (source.path.indexOf(i) < 0 && isOneWordChange(source.word, wordList[i])) {
//                 queue.push({
//                     word: wordList[i],
//                     path: source[path].concat(i)
//                 })
//             }
//         }    
//     }

//     return 0;
// };

var ladderLength = function(beginWord, endWord, wordList) {
    var map = {};
    var visited = {};
    var wordLen = wordList.length;
    var queue = [{
        word: beginWord,
        level: 1
    }];

    for(var i = 0; i < wordLen; i++) {
        var item = wordList[i]
        for(var j = 0; j < item.length; j++) {
            var v = item.substr(0,j) + '*' + item.substr(j+1);
            if (!map[v]) {
                map[v] = [];
            }
            map[v].push(item);
        }
    }
    // debugger;
    while(queue.length) {
        var { word, level } = queue.shift();
        if (word === endWord) return level;

        for(var i = 0; i < word.length; i++) {
            var template = word.substr(0,i) + '*' + word.substr(i+1);
            var values = map[template]
            if(values) {
                for(var j = 0; j < values.length; j++) {
                    if (!visited[values[j]]) {
                        queue.push({
                            word: values[j],
                            level: level + 1
                        })
                        visited[values[j]] = true;
                    }
                }    
            }
        }
    }

    return 0;
} 
