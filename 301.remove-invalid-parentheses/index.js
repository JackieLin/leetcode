/*
 * @lc app=leetcode id=301 lang=javascript
 *
 * [301] Remove Invalid Parentheses
 */
/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function (s) {
    if (!s) return [''];

    var min = Number.MAX_SAFE_INTEGER;
    var result = [];
    var map = {};
    var length = s.length;

    // debugger;
    function dfs(index, op, prev, stack) {
        if (op > min) return;

        if (length === index) {
            if (!stack.length && !map[prev]) {
                if (op < min) {
                    min = op;
                    result = [];
                    map = {};
                    result.push(prev);
                    map[prev] = true;
                } else if (op === min) {
                    map[prev] = true;
                    result.push(prev);
                }
            }

            return;
        }

        if (s[index] !== '(' && s[index] !== ')') {
            return dfs(index + 1, op, prev + s[index], stack);
        }

        // 留
        if (s[index] === '(') {
            stack.push('(')
            dfs(index + 1, op, prev + s[index], stack);
            stack.pop();
        } else if (s[index] === ')') {
            if (stack[stack.length - 1] === '(') {
                stack.pop()
                dfs(index + 1, op, prev + s[index], stack);
                stack.push('(');
            }
        }

        // 丢
        dfs(index + 1, op + 1, prev, stack);
    }

    dfs(0, 0, '', []);

    return result;
};

