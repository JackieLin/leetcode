/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 *
 * https://leetcode.com/problems/valid-anagram/description/
 *
 * algorithms
 * Easy (51.06%)
 * Total Accepted:    306.3K
 * Total Submissions: 600K
 * Testcase Example:  '"anagram"\n"nagaram"'
 *
 * Given two strings s and t , write a function to determine if t is an anagram
 * of s.
 * 
 * Example 1:
 * 
 * 
 * Input: s = "anagram", t = "nagaram"
 * Output: true
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: s = "rat", t = "car"
 * Output: false
 * 
 * 
 * Note:
 * You may assume the string contains only lowercase alphabets.
 * 
 * Follow up:
 * What if the inputs contain unicode characters? How would you adapt your
 * solution to such case?
 * 
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    var count1 = {}
    var count2 = {}

    for(var i = 0; i < s.length; i++) {
        if (count1[s[i]] === undefined) {
            count1[s[i]] = 0;
        }

        count1[s[i]]++
    }

    for(var i = 0; i < t.length; i++) {
        if (count2[t[i]] === undefined) {
            count2[t[i]] = 0;
        }

        count2[t[i]]++
    }

    var max = Object.keys(count1) > Object.keys(count2) ? count1 : count2;

    for(var key in max) {
        if (count1[key] !== count2[key]) return false;
    }

    return true
};

