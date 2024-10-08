// url: https://leetcode.com/problems/second-minimum-node-in-a-binary-tree/description/
// Given a non-empty special binary tree consisting of nodes with the non-negative value, where each node in this tree has exactly two or zero sub-node. If the node has two sub-nodes, then this node's value is the smaller value among its two sub-nodes. More formally, the property root.val = min(root.left.val, root.right.val) always holds.

// Given such a binary tree, you need to output the second minimum value in the set made of all the nodes' value in the whole tree.

// If no such second minimum value exists, output -1 instead.

 

 

// Example 1:

// Input: root = [2,2,5,null,null,5,7]
// Output: 5
// Explanation: The smallest value is 2, the second smallest value is 5.

// Example 2:

// Input: root = [2,2,2]
// Output: -1
// Explanation: The smallest value is 2, but there isn't any second smallest value.

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
var findSecondMinimumValue = function(root) {
    let firstValue;
    let secondValue;
    if(!root){return -1}
    dfs(root)
    if(secondValue != null){
        return secondValue
    }else{return -1}
    function dfs(node){
        // if node is null exit
        if(!node){return null}
        // visit node
        const value = node.val
        // grab node value
        // has firstValue
        if(firstValue){
            // has secondValue and value is different from first value and second value
            if(secondValue && value !== firstValue && value !== secondValue){
                [firstValue, secondValue] = [firstValue, secondValue, value].sort((a,b) => a - b)
                // compare value to first value and second value
                // make lowest value first
                // second lowest second
            }        
            // doesn't have secondValue, and value is different from first value
            if(!secondValue && value !== firstValue){
                [firstValue, secondValue] = [firstValue, value].sort((a,b) => a - b)
                // compare value to first value
                // make lowest value first and highest value second
            }
        }else{
            // doesn't have firstvalue
                // assign firstvalue
            firstValue = value
        }
        // if possible visit left node
        if(node.left){
            dfs(node.left)
        }
        // if possible visit right node
        if(node.right){
            dfs(node.right)
        }
    }
};