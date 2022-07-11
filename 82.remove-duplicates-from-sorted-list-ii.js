/*
 * @lc app=leetcode id=82 lang=javascript
 *
 * [82] Remove Duplicates from Sorted List II
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
 * @return {ListNode}
 */
 var deleteDuplicates = function(head) {
  let preVal = null;
  let curr = head;
  let pre = null;
  if (!head) return head;
  while(curr) {
    if (preVal === curr.val || (curr.next && curr.next.val === curr.val)) {
      if (!pre) {
        head = curr.next;
      } else {
        pre.next = curr.next;
      }
    } else {
      pre = curr;
    }
    preVal = curr.val;
    curr = curr.next;
  }

  return head;
};
// @lc code=end

