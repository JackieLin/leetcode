/*
 * @lc app=leetcode id=25 lang=javascript
 *
 * [25] Reverse Nodes in k-Group
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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
    if (!head) return head;
    var start = head;
    while (start.next) {
        start.next.prev = start;
        start = start.next;
    }
    
    var next;
    var node = head;
    var current;

    while (node) {
        var end = node;
        var ix = 1;

        while (ix < k && end) {
            end = end.next;
            ix++;
        }

        if (ix >= k && end) {
            node = end.next;
            var length = 1;
            next = end;
            while (length < k) {
                next.next = next.prev;
                next.prev = null;
                next = next.next;
                // console.log(next);
                // console.log('=====')
                // console.log(length)
                next.next = null;
                length++;
            }
            
            if (current) {
                current.next = end;
            } else {
                head = end;
            }
            
            current = next;
        } else {
            if (current) {
                current.next = node;
            }

            break;
        }
    }

    return head;
};