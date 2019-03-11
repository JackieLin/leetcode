/*
 * @lc app=leetcode id=234 lang=javascript
 *
 * [234] Palindrome Linked List
 * 通过 fast->next->next 可以拿出一半的值出来进行计算，本质就是一半
 *
 * https://leetcode.com/problems/palindrome-linked-list/description/
 *
 * algorithms
 * Easy (35.38%)
 * Total Accepted:    234.8K
 * Total Submissions: 663.6K
 * Testcase Example:  '[1,2]'
 *
 * Given a singly linked list, determine if it is a palindrome.
 * 
 * Example 1:
 * 
 * 
 * Input: 1->2
 * Output: false
 * 
 * Example 2:
 * 
 * 
 * Input: 1->2->2->1
 * Output: true
 * 
 * Follow up:
 * Could you do it in O(n) time and O(1) space?
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
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    var point = head;
    var prev = null;
    var last;
    if (!head) return true;

    while(point) {
        point.prev = prev;
        prev = point;
        if (!point.next) last = point;
        point = point.next;
    }

    point = head;

    while(point !== last && last.next !== point) {
        if (point.val === last.val) {
            point = point.next;
            last = last.prev;
        } else {
            return false;
        }
    }

    return true;
};

