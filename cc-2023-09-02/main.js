// url: https://leetcode.com/problems/same-tree

// Given the roots of two binary trees p and q, write a function to check if they are the same or not.
// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

// Example 1:
// Input: p = [1,2,3], q = [1,2,3]
// Output: true

// Example 2:
// Input: p = [1,2], q = [1,null,2]
// Output: false

// Example 3:
// Input: p = [1,2,1], q = [1,1,2]
// Output: false

var isSameTree = function(p, q) {
  if(!p && !q){return true}
  if(!p || !q){return false}
  // structural checks
  if(p.val !== q.val){return false}
  // value check
  // base cases

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  // recursion
};