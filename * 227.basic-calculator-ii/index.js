/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    var addSub = 0;
    var isAdd = 1;
    var mulSub = 1;
    var isMul = 1;
    var num = 0;
 
    for(var i = 0; i < s.length; i++) {
        if (s[i] === ' ') continue;
        if (s[i] >= '0' && s[i] <= '9') {
         num = num * 10 + Number(s[i]);
        } else {
            // 先算乘除
            mulSub = isMul ? mulSub * num : parseInt(mulSub / num);
            num = 0;
            if (s[i] === '+' || s[i] === '-') {
                // 先算上一个运算符
                addSub += isAdd * mulSub;
                isAdd = s[i] === '+' ? 1 : -1;
                mulSub = 1;
                isMul = 1;
            } else {
                isMul = s[i] === '*' ? 1 : 0;
            }
        }
    }
 
    return addSub + isAdd * (isMul ? mulSub * num : parseInt(mulSub / num));
 };

//  function calculate(s) {
//     // remove space
//     s = s.replace(/\s/g, '');
  
//     let nums = [];
//     let num = 0;
//     let sign = '+';
  
//     for (let i = 0; i < s.length; i++) {
//       const c = s[i];
  
//       // number
//       if (/\d/.test(c)) {
//         // e.g. '14' -> 1 * 10 + 4
//         num = num * 10 + Number(c);
//       }
  
//       // sign or last number
//       if ((/\D/.test(c)) || i === s.length - 1) {
//         if (sign === '-') nums.push(-num);
//         if (sign === '+') nums.push(num);
//         if (sign === '*') nums.push(nums.pop() * num);
//         if (sign === '/') nums.push(~~(nums.pop() / num));
  
//         sign = c;
//         num = 0;
//       }
//     }
  
//     let res = 0;
  
//     for (let n of nums) {
//       res += n;
//     }
  
//     return res;
//   }