// url: https://leetcode.com/problems/balanced-binary-tree/

// Given the root of a binary tree

// Return a boolean on whether it's height is balanced
    // height balanced: min-and max height have a range that is no greater than 1.

// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: true

// Example 2:
// Input: root = [1,2,2,3,3,null,null,4,4]
// Output: false

// Example 3:
// Input: root = []
// Output: true

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

// dfs approach:

var isBalanced = function(root) {
    if(!root){
        return true;
    }
    return Boolean(recursiveBalanced(root, 1));
    // function returns false if unbalanced
    // otherwise returns the height of the graph, which is always > 0
};

function recursiveBalanced(node, height){
    if(!node.left && !node.right){
        return height;
    }
    // get height of left
    // get height of right
    let leftHeight = height;
    let rightHeight = height;
    if(node.left){
        leftHeight = recursiveBalanced(node.left, height + 1);
    }
    if(node.right){
        rightHeight = recursiveBalanced(node.right, height + 1);
    }
    if(!leftHeight || !rightHeight){
        return false;
        // bubble up unbalancing after recursive check
    }
    if(Math.abs(leftHeight - rightHeight) > 1){
        return false;
    }
    return Math.max(leftHeight, rightHeight);
}