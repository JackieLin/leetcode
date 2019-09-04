/*
 * @lc app=leetcode id=389 lang=javascript
 *
 * [389] Find the Difference
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    s = s.split('').sort().join('')
    t = t.split('').sort().join('')

    for(var i = 0; i < t.length; i++) {
        if (t[i] !== s[i]) return t[i];
    }
};

