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
    var start = head;
    while (start.next) {
        start.next.prev = start;
        start = start.next;
    }

    var result;
    var next = head;
    var end = head;
    var ix = 1;
    var current;

    while (head) {
        while (ix < k && end) {
            end = end.next;
            ix++;
        }

        head = end.next;

        if (ix >= k) {
            var length = 1;
            next = end;
            while (length < k) {
                next.next = next.prev;
                length++;
            }

            if (current) {
                current.next = end;
            } else {
                result = end;
            }

            current = next.next;
        }
    }

    // // 没有走完
    // if (ix <= k) {
    //     if (result) {
    //     }
    //     result = start;
    // }
};

