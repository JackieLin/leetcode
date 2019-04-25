/*
 * @lc app=leetcode id=680 lang=javascript
 *
 * [680] Valid Palindrome II
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    if (!s) return true;

    // debugger;
    function isPalindrome(subs) {
        if (!subs) return true
        var start = 0;
        var end = subs.length - 1;

        while (start < end) {
            if (subs[start] === subs[end]) {
                start++;
                end--;
            } else {
                return {
                    status: false,
                    start,
                    end
                }
            }
        }

        return {
            status: true
        };
    }

    var match = isPalindrome(s);
    if (match.status) return true;

    // console.log(s.substring(match.start,match.end));
    // console.log(s.substring(match.start + 1,match.end + 1));

    return isPalindrome(s.substring(match.start,match.end)).status || isPalindrome(s.substring(match.start + 1,match.end + 1)).status
};

