/*
 * @lc app=leetcode id=24 lang=javascript
 *
 * [24] Swap Nodes in Pairs
 *
 * https://leetcode.com/problems/swap-nodes-in-pairs/description/
 *
 * algorithms
 * Medium (43.69%)
 * Total Accepted:    292.9K
 * Total Submissions: 670.3K
 * Testcase Example:  '[1,2,3,4]'
 *
 * Given a linked list, swap every two adjacent nodes and return its head.
 * 
 * You may not modify the values in the list's nodes, only nodes itself may be
 * changed.
 * 
 * 
 * 
 * Example:
 * 
 * 
 * Given 1->2->3->4, you should return the list as 2->1->4->3.
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    var lists = [];
    var curr = head;
    var i = 0;
    var temp;
    if (!head) return head;

    while(curr) {
        if (!curr.next) {
            lists.push(curr);
            break;
        } else if (!curr.next.next) {
            lists.push(curr.next);
            curr.next.next = curr;
            curr.next = null;
            break;
        } else {
            temp = curr.next.next;
            lists.push(curr.next)
            curr.next.next = curr;
            curr.next = null;
            curr = temp;
        }
    }

    for(var i = 0; i < lists.length - 1; i++) {
        lists[i].next.next = lists[i + 1]
    }

    return lists[0]
};

