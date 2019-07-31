/*
 * @lc app=leetcode id=331 lang=javascript
 * 注意：每一次加一个节点都会新增 1 ，减一个节点就是减1
 * [331] Verify Preorder Serialization of a Binary Tree
 */
/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function(preorder) {
    preorder = preorder.split(',')

    if (!preorder.length) { return false }
    if (preorder[0] === '#' && preorder.length === 1) return true;
    if (preorder[0] === '#' && preorder.length !== 1) return false;
    if (preorder.length === 1) return false;
    var nums = 2;
    preorder = preorder.slice(1);

    for(var i = 0; i < preorder.length; i++) {
        if (!nums) return false
        if (preorder[i] === '#') {
            nums--;  
        } else {
            nums++;
        }
    }

    if (!nums) return true
    return false
};

