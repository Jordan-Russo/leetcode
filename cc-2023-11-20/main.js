// url: https://leetcode.com/problems/invert-binary-tree/

// Given a binary tree

// Invert the binary tree and return it

// inverted binary tree is where, for each node, the left and right children have been swapped.

// Example 1:
// Input: root = [4,2,7,1,3,6,9]
// Output: [4,7,2,9,6,3,1]

// Example 2:
// Input: root = [2,1,3]
// Output: [2,3,1]

// Example 3:
// Input: root = []
// Output: []


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
 * @return {TreeNode}
 */

// dfs
// post order transformation

// take a node
// if it doesn't have children return node
// otherwise keep going and recurse
// after recursing
// swap nodes left and right posisitions


var invertTree = function(root) {
    const invert = node => {
        if(!node.left && !node.right){
            return node
        }
        // handles leaves
        if(node.left){
            invert(node.left)
        }
        if(node.right){
            invert(node.right)
        }
        // post recurse
        const temp = node.left
        node.left = node.right
        node.right = temp
        return node
    }
    return root ? invert(root) : root
};