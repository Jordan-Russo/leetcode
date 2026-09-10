// url: https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
// Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.

 

// Example 1:

// Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
// Output: [3,9,20,null,null,15,7]

// Example 2:

// Input: preorder = [-1], inorder = [-1]
// Output: [-1]

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    let position = 0
    const indexes = {}
    for(let i = 0; i < inorder.length; i++){
        indexes[inorder[i]] = i
    }
    return buildTree()
    function buildTree(low = 0, high = preorder.length - 1){
        if(low > high){return null}
        const node = makeNode(preorder[position])
        position++
        const pivot = indexes[node.val]
        node.left = buildTree(low, pivot - 1)
        node.right = buildTree(pivot + 1, high)
        return node
    }
}
function makeNode(val){
    return {val, left: null, right: null}
}