/*
 * @lc app=leetcode id=139 lang=javascript
 *
 * [139] Word Break
 *
 * https://leetcode.com/problems/word-break/description/
 *
 * algorithms
 * Medium (34.40%)
 * Total Accepted:    305.6K
 * Total Submissions: 888.3K
 * Testcase Example:  '"leetcode"\n["leet","code"]'
 *
 * Given a non-empty string s and a dictionary wordDict containing a list of
 * non-empty words, determine if s can be segmented into a space-separated
 * sequence of one or more dictionary words.
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
 * Input: s = "leetcode", wordDict = ["leet", "code"]
 * Output: true
 * Explanation: Return true because "leetcode" can be segmented as "leet
 * code".
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: s = "applepenapple", wordDict = ["apple", "pen"]
 * Output: true
 * Explanation: Return true because "applepenapple" can be segmented as "apple
 * pen apple".
 * Note that you are allowed to reuse a dictionary word.
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
 * Output: false
 * 
 * 
 */
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
// var wordBreak = function(s, wordDict) {
//     var map = {};
//     for(var i = 0; i < wordDict.length; i++) {
//         map[wordDict[i]] = true;
//     }

//     function travelNode(s) {
//         var cut = ''
//         if (!s) return true;
//         for(var i = 0; i < s.length; i++) {
//             cut += s[i];
//             if (map[cut]) {

//                 var left = s.substr(i + 1);

//                 if (!left) return true;

//                 if (travelNode(left)) {
//                     return true;
//                 }
//             }
//         }

//         if (i >= s.length) return false;
//     }

//     return travelNode(s);
// };

var wordBreak = function(s, wordDict) {
    var i = s.length - 1;
    var checked = [];
    var curr = 0;
    var newStr = ''
    var next
    while(i--) checked[i] = false;

    while(curr < s.length) {
        newStr = s.substr(curr);
        for(var i = 0; i < wordDict.length; i++) {
            if (newStr.startsWith(wordDict[i])) {
                next = curr + wordDict[i].length;
                if (next >= s.length) return true;
                checked[next] = true;
            }
        }

        curr++;
        while(!checked[curr]) {
            curr++;
            if (curr >= s.length) return false;
        }
    }

    return false;
}