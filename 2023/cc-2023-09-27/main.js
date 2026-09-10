// url: https://leetcode.com/problems/search-in-a-binary-search-tree/

// Given a root of a Binary Search Tree
    // BST: Binary Tree with the following properties
        // At each node smaller values are stored as the left child and larger values are stored as the right child.
        // You don't need to worry about values being equal to the parent since if there's a match the parent would be returned.

// Return the node containing the value
// If the node doesn't exist    
    // return null

// Example 1:
// Input: root = [4,2,7,1,3], val = 2
// Output: [2,1,3]

// Example 2:
// Input: root = [4,2,7,1,3], val = 5
// Output: []

// if !node return null
// grab value of node
// if node = needle
// return node
// if node < needle
// return dfs of node right
// if node > needle
// return dfs of node left

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
 * @param {number} val
 * @return {TreeNode}
 */

function searchBST(node, needle){
    if(!node){return null}
    const value = node.val;
    if(value === needle){
        return node;
    }
    if(value < needle){
        return searchBST(node.right, needle);
    }else{
        return searchBST(node.left, needle);
    }
}