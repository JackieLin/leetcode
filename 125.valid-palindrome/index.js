/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 *
 * https://leetcode.com/problems/valid-palindrome/description/
 *
 * algorithms
 * Easy (30.66%)
 * Total Accepted:    338.6K
 * Total Submissions: 1.1M
 * Testcase Example:  '"A man, a plan, a canal: Panama"'
 *
 * Given a string, determine if it is a palindrome, considering only
 * alphanumeric characters and ignoring cases.
 * 
 * Note: For the purpose of this problem, we define empty string as valid
 * palindrome.
 * 
 * Example 1:
 * 
 * 
 * Input: "A man, a plan, a canal: Panama"
 * Output: true
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "race a car"
 * Output: false
 * 
 * 
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    var re = /\w+/g;
    var str = s.match(re);
    if (!str) return true;

    str = str.join('')

    var i = 0;
    var j = str.length - 1;

    while(i < j) {
        if (str[i].toLowerCase() === str[j].toLowerCase()) {
            i++;
            j--;
        } else {
            return false;
        }
    }

    return true;
};

