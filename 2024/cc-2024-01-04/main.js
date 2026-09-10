// url: https://leetcode.com/problems/validate-binary-search-tree/
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
// edge case: if there is no node, return true
// If left and right children exist compare them to their parent node to make sure its a BST
    // if they fail return false
// if all the nodes follow the conditions of a BST return true
    // left values must be less than their parent
    // right values must be greater than their parent
// return the final state as a boolean.
function isValidBST(node, lowLim = -Infinity, highLim = Infinity){
    if(!node){return true} 
    if(node.val <= lowLim || node.val >= highLim){
        return false
    }
    let left = true
    let right = true
    console.log(lowLim, highLim)
    if(node.left){
        if(node.val <= node.left.val){
            return false
        }
        left = isValidBST(node.left, lowLim, Math.min(highLim, node.val))
    }
    if(node.right){
        if(node.val >= node.right.val){
            return false
        }
        right = isValidBST(node.right, Math.max(lowLim, node.val), highLim)
    }
    // when we're doing the left we want to preserve the smallest value of the parents on the left
    // and the largest value of the ancestors on the right
    return left && right
}