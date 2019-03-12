/*
 * @lc app=leetcode id=438 lang=javascript
 *
 * [438] Find All Anagrams in a String
 *
 * https://leetcode.com/problems/find-all-anagrams-in-a-string/description/
 *
 * algorithms
 * Easy (36.56%)
 * Total Accepted:    109.5K
 * Total Submissions: 299.6K
 * Testcase Example:  '"cbaebabacd"\n"abc"'
 *
 * Given a string s and a non-empty string p, find all the start indices of p's
 * anagrams in s.
 * 
 * Strings consists of lowercase English letters only and the length of both
 * strings s and p will not be larger than 20,100.
 * 
 * The order of output does not matter.
 * 
 * Example 1:
 * 
 * Input:
 * s: "cbaebabacd" p: "abc"
 * 
 * Output:
 * [0, 6]
 * 
 * Explanation:
 * The substring with start index = 0 is "cba", which is an anagram of "abc".
 * The substring with start index = 6 is "bac", which is an anagram of
 * "abc".
 * 
 * 
 * 
 * Example 2:
 * 
 * Input:
 * s: "abab" p: "ab"
 * 
 * Output:
 * [0, 1, 2]
 * 
 * Explanation:
 * The substring with start index = 0 is "ab", which is an anagram of "ab".
 * The substring with start index = 1 is "ba", which is an anagram of "ab".
 * The substring with start index = 2 is "ab", which is an anagram of "ab".
 * 
 * 
 */
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    var lettes = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var pletters = lettes.slice();
    var pLength = p.length;
    var sLength = s.length;
    var idxs = []
    var idx = -1;
    
    if (sLength < pLength) return [];

    for(var i = 0; i < pLength; i++) {
        pletters[p[i].charCodeAt() - 97] += 1;
    }

    for(var i = 0; i < sLength; i++) {
        var item = s.substr(i, pLength);
        if (item.length < pLength) break;
        if (i === 0) {
            for(var j = 0; j < pLength; j++) {
                lettes[item[j].charCodeAt() - 97] += 1;
            }
        } else {
            lettes[s[i - 1].charCodeAt() - 97] -= 1;
            lettes[item[pLength - 1].charCodeAt() - 97] += 1;
        }

        for(idx = 0; idx < lettes.length; idx++) {
            if (lettes[idx] !== pletters[idx]) break;
        }

        if (idx >= lettes.length) idxs.push(i)
        idx = -1;
    }

    return idxs;
};

