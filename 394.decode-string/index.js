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
    debugger
    for(var i = 0; i < s.length; i++) {
        // 数字
        if (Number(s[i]) >= 1 && Number(s[i]) <= 9) {
            var numbers = Number(s[i]);
            i++;
            while(Number(s[i]) >= 0 && Number(s[i]) <= 9) {
                numbers = numbers * 10 + Number(s[i]);
                i++;
            }
            i--;
            if (item) {
                if (charStack.length && charStack.length >= numStack.length) {
                    charStack.push(charStack.pop() + item)
                } else {
                    charStack.push(item)
                }
                item = ''
            }
            numStack.push(numbers)
        } else if (s[i] === '[') {
            inside = true
        } else if (s[i].toLowerCase() >= 'a' && s[i].toLowerCase() <= 'z' && inside) {
            item += s[i]
        } else if (s[i] === ']') {
            var num = numStack.pop()
            while(charStack.length > numStack.length) {
                item = charStack.pop() + item;
            }
            if (!item) {
                item = charStack.pop()
            }

            var data = ''
            for(var j = 0; j < num; j++) {
                data += item;
            }
            item = ''
            if (charStack.length || numStack.length) {
                if (charStack.length && charStack.length >= numStack.length) {
                    charStack.push(charStack.pop() + data)
                } else {
                    charStack.push(data)
                }
            } else {
                result += data;
            }

            if (!numStack.length && !charStack.length) inside = false
        } else if (!inside) {
            result += s[i]
        }
    }

    return result;
};


/**
 * @param {string} s
 * @return {string}
 * 这是一个更好的解决方案
 */
// function decodeString(s) {
//     const stack = [];
//     for (let i = 0; i < s.length; i++) {
//       const char = s.charAt(i);
//       let temp = '';
//       if (char !== ']') {
//         stack.push(char);
//         continue;
//       }
      
//       while (stack.length && stack[stack.length - 1] !== '[') {
//         temp = stack.pop() + temp;
//       }
      
//       stack.pop();
//       let multiplier = '';
//       while (!Number.isNaN(Number(stack[stack.length - 1]))) {
//         multiplier = stack.pop() + multiplier;
//       }
    
//       const repeatStr = temp;
//       for (let i = 1; i < Number(multiplier || 1); i++) {
//         temp += repeatStr;
//       }
      
//       stack.push(temp);
//     }
    
//     return stack.join('');
//   }