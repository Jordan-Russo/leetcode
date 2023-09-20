// https://leetcode.com/problems/maximum-depth-of-n-ary-tree/description/

// Given a n-ary tree

// Return the height ( the maximum depth )

// Example 1:
// Input: root = [1,null,3,2,4,null,5,6]
// Output: 3

// Example 2:
// Input: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
// Output: 5

// start with node as root and height of 0;

// If node is falsy
    // return currheight

// Increment height

// Run a loop for each child of the node
    // find the maximum returned height out of all of them
    // use reduce on recursive calls (initial value is current height)
        // reduce to find the largest height.

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */

function maxDepth(node, height = 0){
    if(!node){return height}
    height++;
    return node.children.reduce((deepest, child) => {
        return Math.max(deepest, maxDepth(child, height));
    }, height);
 }