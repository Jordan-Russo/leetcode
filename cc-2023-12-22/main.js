// url: https://leetcode.com/problems/count-good-nodes-in-binary-tree/
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
// dfs preorder transversal
// at each stage while recursing in the binary tree
// keep track of the greatest value
// increment an external value each time a condition is met
// return the external value, the couunt, once the recursive process is done.

var goodNodes = function(root) {
    let count = 0
    function nodeCount(node, max = -Infinity){
        if(!node){
            return
        }
        if(node.val >= max){
            max = node.val
            count++
        }
        nodeCount(node.left, max)
        nodeCount(node.right, max)
    }
    nodeCount(root)
    return count
};