// url: https://leetcode.com/problems/n-ary-tree-preorder-traversal/

// Given a root of a tree
// Return an array transversal of all the nodes visited in a pre-recursive manner

// Example 1:
// Input: root = [1,null,3,2,4,null,5,6]
// Output: [1,3,5,6,2,4]

// Example 2:
// Input: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
// Output: [1,2,3,6,7,11,14,4,8,12,5,9,13,10]

// initialize arr
// call walking function params: node, arr
    // if the node exists
        // visit a node
        // for each child of the node's children call walk again
    // return the array

/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */

function preorder(head){
    const preorderArr = [];
    return preorderWalk(head, preorderArr);
}
function preorderWalk(node, arr){
    if(node){
        arr.push(node.val);
        node.children.forEach(child => preorderWalk(child, arr));
    }
    return arr;
}