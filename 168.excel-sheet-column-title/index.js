/*
 * @lc app=leetcode id=168 lang=javascript
 *
 * [168] Excel Sheet Column Title
 *
 * https://leetcode.com/problems/excel-sheet-column-title/description/
 *
 * algorithms
 * Easy (28.73%)
 * Total Accepted:    167.7K
 * Total Submissions: 583.7K
 * Testcase Example:  '1'
 *
 * Given a positive integer, return its corresponding column title as appear in
 * an Excel sheet.
 * 
 * For example:
 * 
 * 
 * ⁠   1 -> A
 * ⁠   2 -> B
 * ⁠   3 -> C
 * ⁠   ...
 * ⁠   26 -> Z
 * ⁠   27 -> AA
 * ⁠   28 -> AB 
 * ⁠   ...
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: 1
 * Output: "A"
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: 28
 * Output: "AB"
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: 701
 * Output: "ZY"
 * 
 */
/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    var arr = [];
    var next = n;
    var data = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    // debugger;
    while(next > 0) {
        arr.unshift(next % 26)
        next = Math.floor(next / 26);
    }

    // debugger;
    var carry = 0;

    for(var i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === 0) {
            arr[i] = data[26 - carry];
            carry = 1;
        } else if (carry && arr[i]) {
            arr[i] = arr[i] - carry;
            carry = 0;

            if (arr[i] === 0) {
                carry = 1;
                if (i === 0) {
                    arr[i] = data[0];
                } else {
                    arr[i] = data[26];
                }
            } else {
                arr[i] = data[arr[i]];
            }
        } else {
            arr[i] = data[arr[i]]
        }
    }

    var result = '';
    for(var i = 0; i < arr.length; i++) {
        if (arr[i]) result += arr[i];
    }

    return result;
};

