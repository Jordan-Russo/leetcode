// url: https://leetcode.com/problems/two-sum-iv-input-is-a-bst/

// Given the root of a binary search tree and an integer k

// return true if there exist two elements in the BST such that their sum is equal to k, or false otherwise.

// Example 1:
// Input: root = [5,3,6,2,4,null,7], k = 9
// Output: true

// Example 2:
// Input: root = [5,3,6,2,4,null,7], k = 28
// Output: false

// we build a datastructure which is a set, which holds values
// as you do the recusrive dfs
    // base case: if !node, then return false
    // if the set includes our k - value
        // return true
    // return dfs of left child and right child (logical OR)
// start dfs function with the root and return its call
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
 * @param {number} k
 * @return {boolean}
 */
function findTarget(root,k){
    const cache = new Set();
    return dfsSum(root);
    
    function dfsSum(node){
        if(!node){return false}
        const diff = k - node.val;
        if(cache.has(diff)){
            return true;
        }
        cache.add(node.val);
        return dfsSum(node.left) || dfsSum(node.right);
    }
}