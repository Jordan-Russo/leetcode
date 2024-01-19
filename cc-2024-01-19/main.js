// url: https://leetcode.com/problems/count-complete-tree-nodes/
// Given the root of a binary tree
// Return the number of nodes in the tree
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
// Example 1:


// Input: root = [1,2,3,4,5,6]
// Output: 6
// Example 2:

// Input: root = []
// Output: 0
// Example 3:

// Input: root = [1]
// Output: 1

// Have a count
// Visit each node recursively and increase the count
// Return the count
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function(root) {
    let count = 0
    visitNodes(root)
    return count
    function visitNodes(node){
        if(!node){
            return
        }
        count++
        visitNodes(node.left)
        visitNodes(node.right)
    }
};