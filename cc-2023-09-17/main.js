// url: https://leetcode.com/problems/binary-tree-level-order-traversal/

// Given the root of a binary tree

// Return the level order transversal of its nodes' values.

// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]

// Example 2:
// Input: root = [1]
// Output: [[1]]

// Example 3:
// Input: root = []
// Output: []


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
 * @return {number[][]}
 */

function levelOrder(root){
    let levelOrderValues = [];
    let rootNodes = [];
    if(root){rootNodes.push(root)}
    // pass an empty arr if root is falsy
    // otherwise pass in [root]
    return bfs(levelOrderValues, rootNodes);
}

function bfs(arr, queue){
    if(queue.length === 0){return arr}
    // if queue is empty return visited
    const levelValues = [];
    const levelNodes = [];
    while(queue.length > 0){
        const node = queue.shift();
        // take node from queue
        // add value to new value
        // add left and right to newNodes
        levelValues.push(node.val);
        if(node.left){
            levelNodes.push(node.left);
        }
        if(node.right){
            levelNodes.push(node.right);
        }
    }
    arr.push(levelValues);
    return bfs(arr, levelNodes);
}

// bfs
// we have a datastructure that has all the nodes on a level
// we go through every node removing each from the queue
// grouping the values of each level to a floor and then pushing it to the visited transerval for the level
// each node visited will also have its children pushed into a new queue
// we return the array of arrays containing the values of nodes at each level of the binary tree.