// url: https://leetcode.com/problems/binary-tree-preorder-traversal/

// Given the head node to a binary tree
// Perform a preorder transversal and return a stack that contains all the nodes in the transversal

// Example 1:
    // Input: root = [1,null,2,3]
    // Output: [1,2,3]

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

// if node is falsy STOP
// visit node
    // push value
// recurse left
// recurse right

function preorderTraversal(head){
    const preorderArr = [];
    return preorderWalk(head, preorderArr);
}
function preorderWalk(node, arr){
    if(!node){return arr}
    arr.push(node.val);
    preorderWalk(node.left, arr);
    preorderWalk(node.right, arr);
    return arr;
}