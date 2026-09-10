// url: https://leetcode.com/problems/increasing-order-search-tree/

// Given the root of a binary tree

// Return the tree in-order so that every node has no left child and only one right child.

// Example 1:
// Input: root = [5,3,6,2,4,null,8,1,null,null,null,7,9]
// Output: [1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]

// Example 2:
// Input: root = [5,1,7]
// Output: [1,null,5,null,7]

// it should be an in-order transversal
    // recurse as left as possible
    // visit node
    // go as right as possible

// if you have a right value keep it

// transversal
// set tree = null
// set tail = null
// call inorderSearchTree
// return tree

// helper function (has node)
// if left child recursive left
// if tree is null
    // set tree to node
// set tail to node
// if right child recusrive right

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
var increasingBST = function(root) {
    let tree = null;
    let tail = null;
    bstToLinkedList(root);
    return tree;
    
    function bstToLinkedList(node){
        if(node?.left){
            bstToLinkedList(node.left);
        }
        tree ??= node;
        if(tail){
            tail.right = node;
        }
        tail = node;
        tail.left = null;
        
        if(node?.right){
            bstToLinkedList(node.right);
        }
    }
};