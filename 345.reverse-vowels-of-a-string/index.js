/*
 * @lc app=leetcode id=345 lang=javascript
 *
 * [345] Reverse Vowels of a String
 */
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    s = s.split('');

    var start = 0;
    var end = s.length - 1;
    // debugger;
    while(start < end) {
        if (vowels.indexOf(s[start]) < 0) {
            start++;
            continue;
        }

        while(vowels.indexOf(s[end]) < 0) {
            end--;
        }

        if (start < end) {
            var temp = s[start];
            s[start] = s[end];
            s[end] = temp;

            start++;
            end--;
        }
    }

    return s.join('');
};

