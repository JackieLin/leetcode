/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  var head = headA;
  var parent = null;

  while(head) {
      head.parent = parent;
      parent = head;
      head = head.next;
  }

  head = headB;
  parent = null;

  while(head) {
      if (head.parent || headA === head) {
          return head;
      }
      head.parent = parent;
      parent = head;
      head = head.next;
  }

  if (!head) {
      return null;
  }
};
