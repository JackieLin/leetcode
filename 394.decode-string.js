/*
 * @lc app=leetcode id=394 lang=javascript
 *
 * [394] Decode String
 */
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    var numStack = []
    var charStack = []
    var inside = false
    var result = ''
    var item = ''
    for(var i = 0; i < s.length; i++) {
        // 数字
        if (Number(s[i]) >= 1 && Number(s[i]) <= 9) {
            numStack.push(Number(s[i]))
        } else if (!inside) {
            result += s[i]
        } else if (s[i] === '[') {
            inside = true
        } else if (s[i] >= 'a' && s[i] <= 'z') {
            
        }
    }
};

