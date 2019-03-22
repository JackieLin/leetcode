/*
 * @lc app=leetcode id=383 lang=javascript
 *
 * [383] Ransom Note
 *
 * https://leetcode.com/problems/ransom-note/description/
 *
 * algorithms
 * Easy (49.42%)
 * Total Accepted:    105.7K
 * Total Submissions: 213.9K
 * Testcase Example:  '"a"\n"b"'
 *
 * 
 * Given an arbitrary ransom note string and another string containing letters
 * from all the magazines, write a function that will return true if the
 * ransom 
 * note can be constructed from the magazines ; otherwise, it will return
 * false. 
 * 
 * 
 * Each letter in the magazine string can only be used once in your ransom
 * note.
 * 
 * 
 * Note:
 * You may assume that both strings contain only lowercase letters.
 * 
 * 
 * 
 * canConstruct("a", "b") -> false
 * canConstruct("aa", "ab") -> false
 * canConstruct("aa", "aab") -> true
 * 
 * 
 */
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    if (!ransomNote) return true;
    var map1 = {};
    var map2 = {};

    for(var i = 0; i < ransomNote.length; i++) {
        if (!map1[ransomNote[i]]) {
            map1[ransomNote[i]] = 1;
        } else {
            map1[ransomNote[i]] += 1;
        }
    }

    for(var i = 0; i < magazine.length; i++) {
        if (!map2[magazine[i]]) {
            map2[magazine[i]] = 1;
        } else {
            map2[magazine[i]] += 1;
        }
    }

    for(var key in map1) {
        if (map1[key] > (map2[key] || 0)) return false;
    }

    return true;
};

