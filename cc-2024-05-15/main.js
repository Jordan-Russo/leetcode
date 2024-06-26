// url: https://leetcode.com/problems/path-sum/description/

// Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

// A leaf is a node with no children.

 

// Example 1:

// Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
// Output: true
// Explanation: The root-to-leaf path with the target sum is shown.

// Example 2:

// Input: root = [1,2,3], targetSum = 5
// Output: false
// Explanation: There two root-to-leaf paths in the tree:
// (1 --> 2): The sum is 3.
// (1 --> 3): The sum is 4.
// There is no root-to-leaf path with sum = 5.

// Example 3:

// Input: root = [], targetSum = 0
// Output: false
// Explanation: Since the tree is empty, there are no root-to-leaf paths.

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
 * @param {number} targetSum
 * @return {boolean}
 */
// Given the root of a binary tree and a target value
// Return a boolean on whether or not there is a root to leaf pathway where the sum of all the node values in that path equals the target value.
// Recursively choose each option and if one works return true
// if an option simply cannot work either don't call it recursively or immediately return false
const hasPathSum = function(root, targetSum) {
    // if we have a node that exists, targetSum is 0, and it has no left node nor no right node, return true
    return dfsSum(root, targetSum)
    function dfsSum(node, target){
        if(!node){
            return false
        }
        const newTarget = target - node.val
        if(newTarget === 0 && !node.left && !node.right){
            return true
        }
        const left = dfsSum(node.left, newTarget)
        const right = dfsSum(node.right, newTarget)
        return left || right
    }
};