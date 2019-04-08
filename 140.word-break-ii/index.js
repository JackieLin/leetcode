/*
 * @lc app=leetcode id=140 lang=javascript
 *
 * [140] Word Break II
 *
 * https://leetcode.com/problems/word-break-ii/description/
 *
 * algorithms
 * Hard (26.95%)
 * Total Accepted:    152.5K
 * Total Submissions: 565.9K
 * Testcase Example:  '"catsanddog"\n["cat","cats","and","sand","dog"]'
 *
 * Given a non-empty string s and a dictionary wordDict containing a list of
 * non-empty words, add spaces in s to construct a sentence where each word is
 * a valid dictionary word. Return all such possible sentences.
 * 
 * Note:
 * 
 * 
 * The same word in the dictionary may be reused multiple times in the
 * segmentation.
 * You may assume the dictionary does not contain duplicate words.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input:
 * s = "catsanddog"
 * wordDict = ["cat", "cats", "and", "sand", "dog"]
 * Output:
 * [
 * "cats and dog",
 * "cat sand dog"
 * ]
 * 
 * 
 * Example 2:
 * 
 * 
 * Input:
 * s = "pineapplepenapple"
 * wordDict = ["apple", "pen", "applepen", "pine", "pineapple"]
 * Output:
 * [
 * "pine apple pen apple",
 * "pineapple pen apple",
 * "pine applepen apple"
 * ]
 * Explanation: Note that you are allowed to reuse a dictionary word.
 * 
 * 
 * Example 3:
 * 
 * 
 * Input:
 * s = "catsandog"
 * wordDict = ["cats", "dog", "sand", "and", "cat"]
 * Output:
 * []
 * 
 */
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
    var map = {};
    var meno = [];
    var length = s.length;
    for(var i = 0; i < wordDict.length; i++) {
        map[wordDict[i]] = true;
    }
    
    function division(start) {
        if (start >= length) return [];
        var word = '';
        var result = [];

        if (meno[start]) return meno[start];

        for(var i = start; i < length; i++) {
            word += s[i];
            if (map[word]) {
                if (i === length - 1) {
                    result.push(word);
                } else {
                    var sub = division(i + 1);
                    if (sub && sub.length) {
                        for(var item of sub) {
                            result.push(word + ' ' + item);
                        }
                    }    
                }
            }
        }

        meno[start] = result;

        return result;
    }

    return division(0)
};

