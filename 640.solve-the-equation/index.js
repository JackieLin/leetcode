/*
 * @lc app=leetcode id=640 lang=javascript
 *
 * [640] Solve the Equation
 *
 * https://leetcode.com/problems/solve-the-equation/description/
 *
 * algorithms
 * Medium (39.95%)
 * Total Accepted:    16.5K
 * Total Submissions: 41.3K
 * Testcase Example:  '"x+5-3+x=6+x-2"'
 *
 * 
 * Solve a given equation and return the value of x in the form of string
 * "x=#value". The equation contains only '+', '-' operation, the variable x
 * and its coefficient.
 * 
 * 
 * 
 * If there is no solution for the equation, return "No solution".
 * 
 * 
 * If there are infinite solutions for the equation, return "Infinite
 * solutions".
 * 
 * 
 * If there is exactly one solution for the equation, we ensure that the value
 * of x is an integer.
 * 
 * 
 * Example 1:
 * 
 * Input: "x+5-3+x=6+x-2"
 * Output: "x=2"
 * 
 * 
 * 
 * Example 2:
 * 
 * Input: "x=x"
 * Output: "Infinite solutions"
 * 
 * 
 * 
 * Example 3:
 * 
 * Input: "2x=x"
 * Output: "x=0"
 * 
 * 
 * 
 * Example 4:
 * 
 * Input: "2x+3x-6x=x+2"
 * Output: "x=-1"
 * 
 * 
 * 
 * Example 5:
 * 
 * Input: "x=x+2"
 * Output: "No solution"
 * 
 * 
 */
/**
 * @param {string} equation
 * @return {string}
 */
var solveEquation = function(equation) {
    var equationArr = equation.split('=')
    var left = equationArr[0];
    var right = equationArr[1];
    var xNums = 0;
    var nums = 0;
    var negative = 1;
    var num = 0;

    // debugger;
    for(var i = 0; i < left.length; i++) {
        if (left[i] === '-' || left[i] === '+') {
            nums += negative * num;
            num = 0;
        }

        if (left[i] === 'x') {
            if (left[i - 1] >= '0' && left[i - 1] <= '9') {
                xNums += negative * num;
            } else {
                xNums += negative * 1;
            }
            num = 0;
        }

        if (left[i] === '-') {
            negative = -1;
        }

        if (left[i] === '+') {
            negative = 1;
        }

        // 数字
        if (left[i] >= '0' && left[i] <= '9') {
            num = num * 10 + Number(left[i])
        }
    }

    nums += negative * num;
    num = 0;
    negative = -1;

    for(var i = 0; i < right.length; i++) {
        if (right[i] === '-' || right[i] === '+') {
            nums += negative * num;
            num = 0;
        }

        if (right[i] === 'x') {
            if (right[i - 1] >= '0' && right[i - 1] <= '9') {
                xNums += negative * num;
            } else {
                xNums += negative * 1;
            }
            num = 0;
        }

        if (right[i] === 'x') {
            xNums += negative * num;
            num = 0;
        }

        if (right[i] === '-') {
            negative = 1;
        }

        if (right[i] === '+') {
            negative = -1;
        }

        // 数字
        if (right[i] >= '0' && right[i] <= 9) {
            num = num * 10 + Number(right[i])
        }
    }

    nums += negative * num;
    num = 0;
    negative = 1;

    if (!xNums && nums) {
        return 'No solution';
    }

    if (!xNums && !nums) {
        return 'Infinite solutions';
    }

    if (xNums) {
        return 'x=' + (-1 * nums / xNums);
    }
};

