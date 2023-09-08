// url: https://leetcode.com/problems/binary-tree-postorder-traversal/

// Given the root of a binary tree
// Return an array transversal of the node values
// The transversal should be depth-first, starting off going left, then right, then visiting the node.

// Example 1:
    // Input: root = [1,null,2,3]
    // Output: [3,2,1]

// Example 2:
    // Input: root = []
    // Output: []

// Example 3:
    // Input: root = [1]
    // Output: [1]

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
 * @return {number[]}
 */

// initialize an array to store the transversal
// walk starting from the root
    // walk should have a base-case checking whether or not the node is falsy
    // walk left
    // walk right
    // visit node by pushing it to the array
// return the transversal array

function postorderTraversal(root){
    const transversalArr = [];
    postOrderWalk(root, transversalArr);
    return transversalArr;
};
function postOrderWalk(node, arr){
    if(!node){return arr}
    // base-case
    postOrderWalk(node.left, arr)
    postOrderWalk(node.right, arr)
    arr.push(node.val)
}