// url: https://leetcode.com/problems/binary-tree-paths/description/
// Given the root of a binary tree, return all root-to-leaf paths in any order.

// A leaf is a node with no children.

 

// Example 1:

// Input: root = [1,2,3,null,5]
// Output: ["1->2->5","1->3"]

// Example 2:

// Input: root = [1]
// Output: ["1"]

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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  const paths = []
  recursive(root, String(root.val))
  return paths
  function recursive(node, path){
      const hasLeft = Boolean(node.left)
      const hasRight = Boolean(node.right)
      if(!hasLeft && !hasRight){
          paths.push(path)
          return
      }
      if(hasLeft){
          recursive(node.left, `${path}->${node.left.val}`)
      }
      if(hasRight){
          recursive(node.right, `${path}->${node.right.val}`)
      }
  }

};