// url: https://leetcode.com/problems/symmetric-tree/
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
 * @return {boolean}
 */
// Recursively for every node
// if all the opposite nodes match until there are no more nodes, return true
// if at any step the nodes aren't opposites return false
// return the state of symmetry for the binary tree
var isSymmetric = function(root) {
    if(!root){
        return true
    }else{
        return nodeCheck(root, root)
    }

    function nodeCheck(left, right){
        if(!left && !right){
            return true
        }
        if(!left || !right){
            return false
        }
        if(left.val !== right.val){
            return false
        }
        let newLeft = nodeCheck(left.left, right.right)
        let newRight = nodeCheck(left.right, right.left)
        return newLeft && newRight
    }
};