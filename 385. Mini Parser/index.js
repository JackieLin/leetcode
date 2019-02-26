/*
 * @lc app=leetcode id=385 lang=javascript
 *
 * [385] Mini Parser
 *
 * https://leetcode.com/problems/mini-parser/description/
 *
 * algorithms
 * Medium (31.55%)
 * Total Accepted:    28K
 * Total Submissions: 88.7K
 * Testcase Example:  '"324"'
 *
 * Given a nested list of integers represented as a string, implement a parser
 * to deserialize it.
 * 
 * Each element is either an integer, or a list -- whose elements may also be
 * integers or other lists.
 * 
 * Note:
 * You may assume that the string is well-formed:
 * 
 * String is non-empty.
 * String does not contain white spaces.
 * String contains only digits 0-9, [, - ,, ].
 * 
 * 
 * 
 * Example 1:
 * 
 * Given s = "324",
 * 
 * You should return a NestedInteger object which contains a single integer
 * 324.
 * 
 * 
 * 
 * Example 2:
 * 
 * Given s = "[123,[456,[789]]]",
 * 
 * Return a NestedInteger object containing a nested list with 2 elements:
 * 
 * 1. An integer containing value 123.
 * 2. A nested list containing two elements:
 * ⁠   i.  An integer containing value 456.
 * ⁠   ii. A nested list with one element:
 * ⁠        a. An integer containing value 789.
 * 
 * 
 */
/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     @return {void}
 *     this.setInteger = function(value) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     @return {void}
 *     this.add = function(elem) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @param {string} s
 * @return {NestedInteger}
 */
var deserialize = function(s) {
    var stack = [];
    var cur;
    var finished;
    var num = '0';
    var isNegative = 1;
    var temp;
        
    for(var i = 0; i < s.length; i++) {
        // 表示新创建
        if (s[i] === '[') {
            if (cur) {
                stack.push(cur);
                cur = null;
            }
            cur = new NestedInteger();
        } else if (s[i] >= '0' && s[i] <= 9) {
            num = Number(num) * 10 + Number(s[i]);
        } else if (s[i] === '-') {
            isNegative = -1;
        } else if (s[i] === ',') {
            if (num !== '0') {
                num = num * isNegative;
                temp = new NestedInteger();
                temp.setInteger(num)
                if (cur) {
                    cur.add(temp);
                } else {
                    cur = temp;
                }
                num = '0';
                isNegative = 1;
            }
            // 一项结束
            // temp = cur;
            // if (stack.length) {
            //     cur = stack.pop();
            //     cur.add(temp);
            //     stack.push(cur);    
            // } else {
            //     stack.push(cur);
            // }
            // cur = null;
        } else if (s[i] === ']') {            
            if (num !== '0') {
                num = num * isNegative;
                temp = new NestedInteger();
                temp.setInteger(num)
                if (cur) {
                    cur.add(temp);
                } else {
                    cur = temp;
                }
                num = '0';
                isNegative = 1;
            }
            
            temp = cur;
            if (stack.length) {
                cur = stack.pop();
                cur.add(temp);
            }
        }
    }
    
    if (num !== '0') {
        temp = new NestedInteger();
        temp.setInteger(num * isNegative)
        num = '0'
        isNegative = 1;
    
        cur = temp;
    }

    return cur;
};