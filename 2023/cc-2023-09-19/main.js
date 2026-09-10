// url: https://leetcode.com/problems/maximum-depth-of-binary-tree/

// Given the root of a binary tree

// Return the maximum depth (height) of the tree

// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: 3

// Example 2:
// Input: root = [1,null,2]
// Output: 2


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

// dfs
// if !node, return height
// increment height
// return Math.max of left and right children nodes recursively

function maxDepth(node, count = 0){
    if(!node){return count}
    count++;
    return Math.max(maxDepth(node.left, count), maxDepth(node.right, count));
}

// Time: O(n); n = # of nodes.
// Space O(h); h = height of tree.

// bfs
// not worth implementing due to a linkedList needed for dequeuing optimization 
// (instead of increasing time complexity with Array.prototype.shift())
// doesn't save any transversal of levels/nodes.