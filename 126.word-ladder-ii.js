/*
 * @lc app=leetcode id=126 lang=javascript
 *
 * [126] Word Ladder II
 *
 * https://leetcode.com/problems/word-ladder-ii/description/
 *
 * algorithms
 * Hard (17.14%)
 * Total Accepted:    112.3K
 * Total Submissions: 654.8K
 * Testcase Example:  '"hit"\n"cog"\n["hot","dot","dog","lot","log","cog"]'
 *
 * Given two words (beginWord and endWord), and a dictionary's word list, find
 * all shortest transformation sequence(s) from beginWord to endWord, such
 * that:
 * 
 * 
 * Only one letter can be changed at a time
 * Each transformed word must exist in the word list. Note that beginWord is
 * not a transformed word.
 * 
 * 
 * Note:
 * 
 * 
 * Return an empty list if there is no such transformation sequence.
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
 * Output:
 * [
 * ⁠ ["hit","hot","dot","dog","cog"],
 * ["hit","hot","lot","log","cog"]
 * ]
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
 * Output: []
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
 * @return {string[][]}
 */
var findLadders = function (beginWord, endWord, wordList) {
    var wordMap = {};
    var word, left, right;
    var result = [];
    var temp = [];
    var item;
    var tempWord;
    var loop = true
    var data = []

    // debugger;
    for(var i = 0; i < wordList.length; i++) {
        if (wordList[i] === endWord) break;
    }

    if (i >= wordList.length) return data;

    for (var i = 0; i < wordList.length; i++) {
        word = wordList[i];
        for (var j = 0; j < word.length; j++) {
            left = word.substr(0, j);
            right = word.substr(j + 1);
            if (!wordMap[left + '*' + right]) {
                wordMap[left + '*' + right] = []
            }

            wordMap[left + '*' + right].push(word);
        }
    }

    result = [{ map: { [beginWord]: true }, last: beginWord }];

    while (loop) {
        temp = [];
        for (var i = 0; i < result.length; i++) {
            word = result[i].last
            for (var j = 0; j < word.length; j++) {
                left = word.substr(0, j);
                right = word.substr(j + 1);
                if (wordMap[left + '*' + right]) {
                    item = wordMap[left + '*' + right];
                    for (var k = 0; k < item.length; k++) {
                        if (!result[i].map[item[k]]) {
                            tempWord = { ...result[i] }
                            tempWord.map = { ...result[i].map }
                            tempWord.last = item[k];
                            tempWord.map[item[k]] = true;
                            temp.push(tempWord);
                        }
                        if (item[k] === endWord) loop = false;
                    }
                }
            }
        }

        if (temp && !temp.length) return data;
        result = temp;
    }

    for(var i = 0; i <result.length; i++) {
        if (result[i].last === endWord) {
            data.push(Object.keys(result[i].map).map(v => v))
        }
    }

    return data;
};

