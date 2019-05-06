/*
 * @lc app=leetcode id=282 lang=javascript
 *
 * [282] Expression Add Operators
 */
/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
var addOperators = function(num, target) {
    if (!num) return [];

    var result = [];
    var length = num.length;

    function divide(index, prev, curr, value, ops) {
        // 结束
        if (index === length) {
            if (value === target && !curr)  {
                result.push(ops.join('').slice(1));
            }
            return;
        }

        curr = curr * 10 + Number(num[index])

        // NO OP
        if (curr > 0) {
            divide(index + 1, prev, curr, value, ops);
        }

        // +
        ops.push('+');
        ops.push(curr);

        divide(index + 1, curr, 0, value + curr, ops);
        ops.pop();
        ops.pop();

        if (ops.length > 0) {
            // -
            ops.push('-');
            ops.push(curr);
            divide(index + 1, -curr, 0, value - curr, ops);
            ops.pop();
            ops.pop();

            // *
            ops.push('*');
            ops.push(curr);
            divide(index + 1, curr * prev, 0, value - prev + (curr * prev), ops);
            ops.pop();
            ops.pop();
        }
    }

    divide(0, 0, 0, 0, []);

    return result;
};

