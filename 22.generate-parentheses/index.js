/*
 * @lc app=leetcode id=22 lang=javascript
 *
 * [22] Generate Parentheses
 */
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    var stack = []
    function dfs(num, prev) {
        // debugger;
        var result = []
        // if (!stack.length && num) {
        //     stack.push('(');
        //     result = result.concat(dfs(num - 1, prev));
        // }

        if (num) {
            // (
            stack.push('(')
            result = result.concat(dfs(num - 1, prev + '('))
            stack.pop();

            if (stack.length) {
                // )
                stack.pop();
                result = result.concat(dfs(num, prev + `)`))
                stack.push('(');
            }
        } else if (!num) {
            var right = '';
            // stack.pop();
            for (var i = 0; i < stack.length; i++) {
                right += ')';
            }
            result.push(prev + right);
        }

        return result;
    }

    return dfs(n, '');
};

