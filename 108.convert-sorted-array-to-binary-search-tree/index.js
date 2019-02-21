/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if (!nums.length) return null;
    var middle = parseInt(nums.length / 2);
    var node = new TreeNode(nums[middle]);
    if (nums.length > 1) {
        node.left = sortedArrayToBST(nums.slice(0, middle));
        node.right = sortedArrayToBST(nums.slice(middle + 1, nums.length))        
    }
    return node;
};