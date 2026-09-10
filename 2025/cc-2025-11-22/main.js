/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
    // make a function that returns both the depth and parent node of a found value during a dfs
    const [xDepth, xParent] = dfs(root, x);
    const [yDepth, yParent] = dfs(root, y);
    return xDepth === yDepth && xParent !== yParent;
};
function dfs(node, target, prev = null, depth = 0){
    if(!node){return false}
    if(node.val === target){
        return [depth, prev]
    }
    return dfs(node.left, target, node, depth + 1) || dfs(node.right, target, node, depth + 1)
}