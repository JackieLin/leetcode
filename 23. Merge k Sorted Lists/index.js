/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    lists = lists.filter(v => v);
    if (!lists.length) return null;
    var vals = [];
    var result;
    for(var i = 0; i < lists.length; i++) {
        var item = lists[i];
        while(item) {
            vals.push(item.val);
            item = item.next;
        }
    }
    
    vals = vals.sort((a, b) => a - b);
    
    var next = null;
    
    for(var i = vals.length - 1; i >= 0; i--) {
        result = new ListNode(vals[i])
        result.next = next;
        next = result; 
    }
    
    return result
};