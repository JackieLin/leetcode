/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
 *
 * https://leetcode.com/problems/merge-two-sorted-lists/description/
 *
 * algorithms
 * Easy (45.79%)
 * Total Accepted:    511.4K
 * Total Submissions: 1.1M
 * Testcase Example:  '[1,2,4]\n[1,3,4]'
 *
 * Merge two sorted linked lists and return it as a new list. The new list
 * should be made by splicing together the nodes of the first two lists.
 * 
 * Example:
 * 
 * Input: 1->2->4, 1->3->4
 * Output: 1->1->2->3->4->4
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
var mergeTwoLists = function(l1, l2) {
    var temp;
    if (!l1) return l2;
    if (!l2) return l1;
    
    if (l1.val > l2.val) {
        temp = l1;
        l1 = l2;
        l2 = temp;        
    }

    var curr = l1, l1Next = l1.next, l2Next = l2;
    
    while(l1Next && l2Next) {
        if (l1Next.val > l2Next.val) {
            curr.next = l2Next;
            curr = l2Next;
            l2Next = l2Next.next;
        } else {
            curr.next = l1Next;
            curr = l1Next;
            l1Next = l1Next.next;
        }
    }

    if (l1Next) {
        curr.next = l1Next;
    }

    if (l2Next) {
        curr.next = l2Next;
    }

    return l1;
};