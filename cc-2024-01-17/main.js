// url: https://leetcode.com/problems/sum-of-left-leaves/
// Given the root of a binary tree, return the sum of all left leaves.
    // the root cannot be a left leaf
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
// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: 24
// Explanation: There are two left leaves in the binary tree, with values 9 and 15 respectively.
// Example 2:
// Input: root = [1]
// Output: 0
var sumOfLeftLeaves = function(root) {
    let sum = 0
    sumNodes(root)
    return sum
    function sumNodes(node, isLeft){
        if(!node){
            return
        }
        if(!node.left && !node.right && isLeft){
            sum += node.val
        }
        sumNodes(node.left, true)
        sumNodes(node.right)
    }
};