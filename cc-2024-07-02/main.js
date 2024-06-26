// url: https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
// Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.

// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

// Example 1:

// Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
// Output: 6
// Explanation: The LCA of nodes 2 and 8 is 6.

// Example 2:

// Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
// Output: 2
// Explanation: The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.

// Example 3:

// Input: root = [2,1], p = 2, q = 1
// Output: 2

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q){
    let leftCount = 0
    let rightCount = 0
    if(p.val > root.val){
        rightCount++
    }
    if(p.val < root.val){
        leftCount++
    }
    if(q.val > root.val){
        rightCount++
    }
    if(q.val < root.val){
        leftCount++
    }
    if(leftCount === 2){
        return lowestCommonAncestor(root.left, p, q)
    }
    if(rightCount === 2){
        return lowestCommonAncestor(root.right, p, q)
    }
    return root;
    //p & q cannot be on the same side exclusively of the node
    // determine left count
    // determine right count
    // if either left count or right count === 2
    // reassign the LCA
};