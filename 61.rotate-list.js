/*
 * @lc app=leetcode id=61 lang=javascript
 *
 * [61] Rotate List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (!head) return head;
    let length = 0;
    let last;
    let curr = head;
    while(curr) {
      length++;
      last = curr;
      curr = curr.next;
    }

    let count = k % length;
    let currIdx = 1;
    curr = head;
    while(currIdx < length - count) {
      curr = curr.next;
      currIdx++;
    }
    last.next = head;
    let result = curr.next;
    curr.next = null;
    return result;
};
// @lc code=end

