// url: https://leetcode.com/problems/binary-tree-inorder-traversal/

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

//  Example 1:
    // Input: root = [1,null,2,3]
    // Output: [1,3,2]

// Example 2:
    // Input: root = []
    // Output: []

// Example 3:
    // Input: root = [1]
    // Output: [1]

// basecase: node is nullish
// recurse left
// push into array
// recurse right
// return array
function inorderTraversal(node, array = []){
    if(!node){return array}
    inorderTraversal(node.left, array);
    array.push(node.val);
    inorderTraversal(node.right, array);
    return array;
};