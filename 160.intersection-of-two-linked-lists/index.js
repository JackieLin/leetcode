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

// 一个强的飞起的解法

// var getIntersectionNode = function(headA, headB) {
//     var a=headA, b=headB;
//     while(a!=b){
//         a = a? a.next : headB // move a to head of b if at end
//         b = b? b.next : headA // move b to head of a if at end      
//     }
    
//     return a; // 
// };