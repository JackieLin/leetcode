/*
 * @lc app=leetcode id=138 lang=javascript
 *
 * 额，直接用 dfs 就可以了，需要一个 map 来存放节点对应的新节点
 * 
 * [138] Copy List with Random Pointer
 *
 * https://leetcode.com/problems/copy-list-with-random-pointer/description/
 *
 * algorithms
 * Medium (25.82%)
 * Total Accepted:    225K
 * Total Submissions: 871.2K
 * Testcase Example:  '{"$id":"1","next":{"$id":"2","next":null,"random":{"$ref":"2"},"val":2},"random":{"$ref":"2"},"val":1}'
 *
 * A linked list is given such that each node contains an additional random
 * pointer which could point to any node in the list or null.
 * 
 * Return a deep copy of the list.
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * 
 * 
 * Input:
 * 
 * {"$id":"1","next":{"$id":"2","next":null,"random":{"$ref":"2"},"val":2},"random":{"$ref":"2"},"val":1}
 * 
 * Explanation:
 * Node 1's value is 1, both of its next and random pointer points to Node 2.
 * Node 2's value is 2, its next pointer points to null and its random pointer
 * points to itself.
 * 
 * 
 * 
 * 
 * Note:
 * 
 * 
 * You must return the copy of the given head as a reference to the cloned
 * list.
 * 
 */
/**
 * // Definition for a Node.
 * function Node(val,next,random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    if (!head) return null;;
    var point = head;
    var map = {};
    var id = 0;
    var deepCopy;
    var prev;
    while(point) {
        point.id = id++;
        point = point.next;
    }

    point = head;

    while(point) {
        var node = new Node(point.val);
        node.id = point.id;
        if (!prev) {
            deepCopy = node;
            prev = node;
        } else {
            prev.next = node;
            prev = node;
        }

        map[point.id] = point.random ? point.random.id : null;
        point = point.next
    }

    point = deepCopy;
    var mapPoint;

    while(point) {
        var pId = map[point.id];
        mapPoint = deepCopy;

        if (pId === null) {
            point.random = null;
        } else {
            while(mapPoint) {
                if (mapPoint.id === pId) {
                    point.random = mapPoint;
                    break;
                }
                mapPoint = mapPoint.next;
            }    
        }
        point = point.next;
    }

    return deepCopy;
};

