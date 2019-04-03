/*
 * @lc app=leetcode id=445 lang=javascript
 *
 * [445] Add Two Numbers II
 *
 * https://leetcode.com/problems/add-two-numbers-ii/description/
 *
 * algorithms
 * Medium (49.58%)
 * Total Accepted:    84.6K
 * Total Submissions: 170.7K
 * Testcase Example:  '[7,2,4,3]\n[5,6,4]'
 *
 * You are given two non-empty linked lists representing two non-negative
 * integers. The most significant digit comes first and each of their nodes
 * contain a single digit. Add the two numbers and return it as a linked list.
 * 
 * You may assume the two numbers do not contain any leading zero, except the
 * number 0 itself.
 * 
 * Follow up:
 * What if you cannot modify the input lists? In other words, reversing the
 * lists is not allowed.
 * 
 * 
 * 
 * Example:
 * 
 * Input: (7 -> 2 -> 4 -> 3) + (8 -> 6 -> 4)
 * Output: 7 -> 8 -> 0 -> 7
 * 
 * 
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    var len1 = 0;
    var len2 = 0;
    var h1 = l1;
    var h2 = l2;
    var prev1;
    var prev2;

    while (h1) {
        if (prev1) {
            h1.prev = prev1;
        }
        len1++;
        prev1 = h1;
        h1 = h1.next;
    }

    while (h2) {
        if (prev2) {
            h2.prev = prev2;
        }
        len2++;
        prev2 = h2;
        h2 = h2.next;
    }
    var carry = 0;

    if (len1 < len2) {
        var temp = prev1;
        prev1 = prev2;
        prev2 = temp;

        temp = l1;
        l1 = l2;
        l2 = l1;
    }

    while (prev1 && prev2) {
        var val = prev1.val + prev2.val + carry;
        prev1.val = val % 10;
        carry = Math.floor(val / 10)
        prev1 = prev1.prev;
        prev2 = prev2.prev;
    }

    if (prev1) {
        while (carry && prev1) {
            val = prev1.val + carry;
            prev1.val = val % 10;
            carry = Math.floor(val / 10)
            prev1 = prev1.prev;
        }
    }
    if (carry === 1) {
        var node = new ListNode(carry)
        node.next = l1;
        l1 = node;
    }

    return l1;
};

