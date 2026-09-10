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
 * @return {number}
 */
var getMinimumDifference = function(root) {
    let minDiff = Infinity;
    let prev;
    recursive(root);
    return minDiff;
    function recursive(node){
        if(!node){return}
        if(node.left){
            recursive(node.left);
        }
        if(prev !== undefined){
            const diff = Math.abs(prev - node.val);
            minDiff = Math.min(diff, minDiff);
        }
        prev = node.val;
        if(node.right){
            recursive(node.right);
        }
    }
    // in-order traversal
    // go as left as possible
    // visit node
    // go as right as possible
};