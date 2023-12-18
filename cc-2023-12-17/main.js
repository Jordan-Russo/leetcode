// url: https://leetcode.com/problems/subtree-of-another-tree/
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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
//  Given the roots of 2 binary trees, return a boolean on whether or not the 2nd tree, the subroot share the same structure and 
// Make a function to check if one tree matches another
// Check each node
// if the node isn't truthy return false
// if the node matches return true
// otherwise return if either or of its children, the left and right children recursively match the subtree.
var isSubtree = function(root, subRoot) {
    if(!root){
        return false
    }
    if(isSameTree(root, subRoot)){
        return true
    }
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)


    function isSameTree(root, subRoot){
        if(!root && !subRoot){
            return true
        }
        if(!root || !subRoot){
            return false
        }
        if(root.val === subRoot.val){
            return isSameTree(root.left, subRoot.left) && isSameTree(root.right, subRoot.right)
        }else{
            return false
        }
    }
};