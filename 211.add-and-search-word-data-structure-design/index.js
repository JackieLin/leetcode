/*
 * @lc app=leetcode id=211 lang=javascript
 *
 * [211] Add and Search Word - Data structure design
 *
 * https://leetcode.com/problems/add-and-search-word-data-structure-design/description/
 *
 * algorithms
 * Medium (29.80%)
 * Total Accepted:    110K
 * Total Submissions: 369.1K
 * Testcase Example:  '["WordDictionary","addWord","addWord","addWord","search","search","search","search"]\n[[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]'
 *
 * Design a data structure that supports the following two operations:
 * 
 * 
 * void addWord(word)
 * bool search(word)
 * 
 * 
 * search(word) can search a literal word or a regular expression string
 * containing only letters a-z or .. A . means it can represent any one
 * letter.
 * 
 * Example:
 * 
 * 
 * addWord("bad")
 * addWord("dad")
 * addWord("mad")
 * search("pad") -> false
 * search("bad") -> true
 * search(".ad") -> true
 * search("b..") -> true
 * 
 * 
 * Note:
 * You may assume that all words are consist of lowercase letters a-z.
 * 
 */
/**
 * Initialize your data structure here.
 */
var WordDictionary = function () {
    this.map = {};
};

/**
 * Adds a word into the data structure. 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
    var t = this.map;
    for (var w of word) {
        if (!t[w]) { t[w] = {} }
        t = t[w];
    }

    t['#'] = true;
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter. 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
    var length = word.length;
    function dfs(map, index) {
        if (index >= length && map['#']) return true;
        var item = word[index];
        var result = false;
        if (item !== '.' && !map[item]) return false;

        if (item === '.') {
            if (index >= length && map['#']) {
                result = true;
            } else {
                for (var key in map) {
                    if (key !== '#') {
                        result = result || dfs(map[key], index + 1);
                    }
                }    
            }
        } else {
            result = dfs(map[item], index + 1);
        }

        return result;
    }

    // console.log(JSON.stringify(this.map))
    return dfs(this.map, 0);
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

