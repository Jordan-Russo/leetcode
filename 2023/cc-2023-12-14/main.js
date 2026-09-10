// url: https://leetcode.com/problems/diameter-of-binary-tree/

// Given root of a binary tree
// Return the diameter of the tree
    // AKA the length of the furthest distance between any 2 nodes in the graph.
// ROOT WILL ALWAYS BE A NDOE
    // no null root

// take the root
// if it doesn't have left or right return 0
// initialize left /w recursive func left call
// same with right
// sum sides, reassign greatest value to diameter

// recursive func
// if node doesn't exist return 0
// left is left recurisve
// right is right recursive
// sum sides, reassign greatest value to diameter
// return greatest side + 1

// initialize diameter as 0
// dfs
// post recursion
// for each node that isn't the head
    // have length of left and right child
    // if the sum of both is greater than the current diameter, reassign it.
    // return the greater side
        // except for the head
// handle nodes 

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
var diameterOfBinaryTree = function(root) {
  let diameter = 0
  if(!root.left && !root.right){
      return diameter
  }
  const left = findDiameter(root.left)
  const right = findDiameter(root.right)
  diameter = Math.max(diameter, left + right)
  return diameter

  function findDiameter(node){
      if(!node){return 0}
      const left = findDiameter(node.left)
      const right = findDiameter(node.right)
      diameter = Math.max(diameter, left + right)
      return Math.max(left, right) + 1
  }
};