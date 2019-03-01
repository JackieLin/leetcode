/*
 * @lc app=leetcode id=49 lang=javascript
 *
 * 还可以通过打字母表的方式去计算，26 个字母组成一个 hashMap，然后计算个数就可以区分了
 * 
 * [49] Group Anagrams
 *
 * https://leetcode.com/problems/group-anagrams/description/
 *
 * algorithms
 * Medium (44.71%)
 * Total Accepted:    296.4K
 * Total Submissions: 663K
 * Testcase Example:  '["eat","tea","tan","ate","nat","bat"]'
 *
 * Given an array of strings, group anagrams together.
 * 
 * Example:
 * 
 * 
 * Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
 * Output:
 * [
 * ⁠ ["ate","eat","tea"],
 * ⁠ ["nat","tan"],
 * ⁠ ["bat"]
 * ]
 * 
 * Note:
 * 
 * 
 * All inputs will be in lowercase.
 * The order of your output does not matter.
 * 
 * 
 */
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    var map = {};
    var result = [];
    for(var i = 0; i < strs.length; i++) {
        var item = strs[i].split('').sort().join('');
        if (!map[item]) {
            map[item] = [];
        }

        map[item].push(strs[i]);
    }

    Object.keys(map).forEach(function(v) {
        result.push(map[v])
    })

    return result;
};

