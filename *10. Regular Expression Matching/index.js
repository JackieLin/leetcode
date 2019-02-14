/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
// var isMatch = function(s, p) {
//     var dead = -1;
//     var i = 0;
//     var star = -1;
//     var length = p.length;
//     var slen = s.length;

//     debugger
//     while(i < length) {
//         if (p[i+1] === '*') {
//             star++;
//             while((s[star] === p[i] || p[i] === '.') && star < slen) star++;
//             // 回退
//             star--;
//             // 下一个
//             i++;
//         } else {
//             star++;
//             if ((s[star] === p[i] || p[i] === '.') && star < slen) {
//                 dead = star;
//             } else if (star > dead + 1) {
//                 // 有星号，回退
//                 while(star > dead + 1) {
//                     star--;
//                     if (s[star] === p[i] || p[i] === '.') {
//                         star++;
//                         dead = star;
//                         break;
//                     }
//                 }
//                 // 没有匹配中
//                 if (star < dead) {
//                     return false;
//                 }
//             } else {
//                 return false;
//             }
//         }

//         i++;
//     }
    
//     if (i >= length && star >= slen - 1) {
//         return true;
//     } else {
//         return false;
//     }
// };

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  if (!p) return !s;
  var firstMatch = !!s && (s[0] === p[0] || p[0] === '.');
  
  if (p.length >= 2 && p[1] === '*') {
    return isMatch(s, p.slice(2)) || (firstMatch && isMatch(s.slice(1), p));
  } else {
    return firstMatch && isMatch(s.slice(1), p.slice(1));
  }
};