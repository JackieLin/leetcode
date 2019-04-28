/*
 * @lc app=leetcode id=44 lang=javascript
 *
 * 注意，通过多指针的方式能时间效果更好
 * [44] Wildcard Matching
 */
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
// var isMatch = function(s, p) {
//     var temp = '';
//     for(var i = 0; i < p.length; i++) {
//         if (p[i] === '*' && p[i - 1] === '*')  {
//             continue;
//         } else {
//             temp += p[i];
//         }
//     }

//     p = temp;

//     // debugger;
//     function division(src, pattern) {
//         var index = 0;
//         var slength = src.length;
//         var plength = pattern.length;
//         if (pattern === '*') return true;
//         if (src && !pattern) return false;

//         while(index < pattern.length) {
//             if (pattern[index] !== '*') break;
//             index++;
//         }

//         if (index >= plength) return true;
        
//         if (!src && pattern) return false;

//         index = 0;
//         var result = false;
//         var length = Math.max(slength, plength);
//         if (slength === plength) result = true;

//         while(index < length) {
//             if (pattern[index] === '?') {
//                 index++
//             } else if (pattern[index] === '*') {
//                 var lPattern = pattern.substring(index + 1);
//                 // result = false;
//                 while(index <= slength) {
//                     if (division(src.substring(index++), lPattern)) {
//                         return true;
//                     }
//                 }
                
//                 return false;
//             } else if (pattern[index] === src[index]) {
//                 index++;
//             } else {
//                 return false;
//             }
//         }

//         return result;
//     }    

//     return division(s, p);
// };

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    // debugger
    if (p==="" && s== "") return true; 
    s = s.split("");
    p = p.split("");
    const dp = new Array(s.length+5).fill(null);
    dp[0] = new Array(p.length+5);
    let i=0;
    while (p[i] ==="*") {
        dp[0][i+1]=true;
        i++;
    }
    for (let i=0; i<s.length; i++) {
        dp[i+1] = new Array(p.length+5);
        if (i===0) dp[0][0]=true;
         dp[i+1][0]=false;
        for (let j=0; j<p.length; j++) {
            if (p[j]==="?") dp[i+1][j+1] = dp[i][j];
            else if (p[j]==="*") dp[i+1][j+1] = (dp[i+1][j] || dp[i][j+1] || dp[i][j]);
            else {
                if (s[i]===p[j]) dp[i+1][j+1]=dp[i][j];
                else dp[i+1][j+1]=false;
            }
        }
    }
    return !!dp[s.length][p.length]
};

