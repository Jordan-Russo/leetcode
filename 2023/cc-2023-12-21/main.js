// url: https://leetcode.com/problems/binary-tree-right-side-view/
// Given the root of a binary tree
// Return all the values of the right most node in an array
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
 * @return {number[]}
 */
// use a pre-order dfs to visit a node then go to its rightmost descendant next recursively.
// var rightSideView = function(root) {
//     const values = []
//     function visitRightSide(node){
//         if(!node){
//             return values
//         }
//         values.push(node.val)
//         return visitRightSide(node.right)
//     }
//     return visitRightSide(root)
// };
// Failed since the most right value may not exist. 

// Instead use a BFS and only push the rightmost value for each level of the queue.
function rightSideView(root){
  const values = []
  if(root){
      return rightmostNode([root], values)
  }else{
      return values
  }
  function rightmostNode(nodes, values){
      if(nodes.length === 0){
          return values
      }
      values.push(nodes[nodes.length - 1].val)
      const newNodes = []
      for(let i = 0; i < nodes.length; i++){
          const node = nodes[i]
          if(node.left){
              newNodes.push(node.left)
          }
          if(node.right){
              newNodes.push(node.right)
          }
      }
      console.log(newNodes)
      return rightmostNode(newNodes, values)
  }    
}