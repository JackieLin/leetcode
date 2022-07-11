/*
 * @lc app=leetcode id=19 lang=javascript
 *
 * [19] Remove Nth Node From End of List
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
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
  let i = 0;
  let tmp = head;
  let pre = null;
  let length = 0;
  while(tmp) {
    length++;
    tmp = tmp.next;
  }
  tmp = head;
  while(tmp) {
    if (i >= length - n) {
      if(pre) {
          pre.next = tmp.next;            
      } else {
          head = tmp.next;
      }
      break;
    }
    pre = tmp;
    tmp = tmp.next;
    i++;
  }

  return head;
};
// @lc code=end

