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
var reverseList = function(head) {    
    var parent = null;
    while(head) {
        head.nextPoint = head.next
        head.next = parent;
        parent = head;
        if (head.nextPoint) {
            head = head.nextPoint;   
        } else break;
    }
    return head;
};