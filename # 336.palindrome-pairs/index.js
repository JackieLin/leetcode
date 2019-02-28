/*
 * @lc app=leetcode id=336 lang=javascript
 * 也可以采用 Trie 树的形式查询，先将字符串逆序构建 Trie，然后拿正序的字符串比较，如果相等，肯定是回文串
 * [336] Palindrome Pairs
 *
 * https://leetcode.com/problems/palindrome-pairs/description/
 *
 * algorithms
 * Hard (30.09%)
 * Total Accepted:    61.6K
 * Total Submissions: 204.6K
 * Testcase Example:  '["abcd","dcba","lls","s","sssll"]'
 *
 * Given a list of unique words, find all pairs of distinct indices (i, j) in
 * the given list, so that the concatenation of the two words, i.e. words[i] +
 * words[j] is a palindrome.
 * 
 * Example 1:
 * 
 * 
 * 
 * Input: ["abcd","dcba","lls","s","sssll"]
 * Output: [[0,1],[1,0],[3,2],[2,4]] 
 * Explanation: The palindromes are
 * ["dcbaabcd","abcddcba","slls","llssssll"]
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: ["bat","tab","cat"]
 * Output: [[0,1],[1,0]] 
 * Explanation: The palindromes are ["battab","tabbat"]
 * 
 * 
 * 
 */
/**
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function(words) {
    var len = words.length;
    var result = [];
    var s;
    var end;
    for(var i = 0; i < len; i++) {
        for(var j = 0; j < len; j++) {
            if (i === j) continue;
            s = words[i] + words[j];
            end = s.length - 1;
            for(var k = 0; k < end; k++) {
                if (s[k] === s[end]) {
                    end--;
                } else {
                    break;
                }
            }
            if (k >= end) {
                result.push([i, j]);
            }
        }
    }

    return result;
};

