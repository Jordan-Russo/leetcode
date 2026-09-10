// url: https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/description/
// Given two integer arrays inorder and postorder where inorder is the inorder traversal of a binary tree and postorder is the postorder traversal of the same tree, construct and return the binary tree.

 

// Example 1:

// Input: inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
// Output: [3,9,20,null,null,15,7]

// Example 2:

// Input: inorder = [-1], postorder = [-1]
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  let position = inorder.length - 1
  const indexes = {}
  for(let i = 0; i < inorder.length; i++){
      indexes[inorder[i]] = i
  }
  return buildTree()
  function buildTree(low = 0, high = inorder.length - 1){
      if(low > high){return null}
      const node = makeNode(postorder[position])
      position--
      const pivot = indexes[node.val]
      node.right = buildTree(pivot + 1, high)
      node.left = buildTree(low, pivot - 1)
      return node
  }
  function makeNode(val){
      return {val, left: null, right: null}
  }
};