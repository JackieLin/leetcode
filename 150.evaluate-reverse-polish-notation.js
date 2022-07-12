/*
 * @lc app=leetcode id=150 lang=javascript
 *
 * [150] Evaluate Reverse Polish Notation
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = [];
    if(tokens.length === 1) {
      return tokens[0];
    }
    let result = 0;
    for(let i = 0; i < tokens.length; i++) {
      if (!isNaN(Number(tokens[i]))) {
        stack.push(Number(tokens[i]));
        continue;
      }

      if(tokens[i] === '+') {
        result = stack.pop() + stack.pop();
        stack.push(result)
      } else if (tokens[i] === '-') {
        result = (-stack.pop() + stack.pop());
        stack.push(result)
      } else if (tokens[i] === '*') {
        result = stack.pop() * stack.pop();
        stack.push(result)
      } else if (tokens[i] === '/') {
        result = parseInt(1 / (stack.pop() / stack.pop()));
        stack.push(result)
      }
    }

    return result;
};
// @lc code=end

