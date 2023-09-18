// url: https://leetcode.com/problems/minimum-depth-of-binary-tree/

// Given a binary tree
// Return the minimum depth

// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: 2

// Example 2:
// Input: root = [2,null,3,null,4,null,5,null,6]
// Output: 5

// base case is when the node is null.

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

// bfs
// create a queue and a count
// if queue is empty return count
// increment count
//  keep shifting nodes from the queue
    // for each shifted node
        // if node has no children return count
        // otherwise push children (if truthy) into a newQueue
// return recurse using newQueue and count

function minDepth(root){
    const queue = root ? [root] : [];
    return bfs(queue, 0)
}
function bfs(queue, count){
    if(queue.length === 0){return count}
    // increment count;
    count++;
    const newQueue = [];
    while(queue.length > 0){
        const node = queue.shift();
        // if neither left child nor right child return count
        if(!node.left && !node.right){
            return count;
        }
        if(node.left){
            newQueue.push(node.left);
        }
        if(node.right){
            newQueue.push(node.right);
        }
    }

    return bfs(newQueue, count);
}

// dfs
// if node is falsy return count
// increase count
// return minimum of two children or just value of 1 child.
// if no children return count

// dfs approach:

// function minDepth(node, count = 0){
//     if(!node){return count}
//     count++;
//     if(node.left && node.right){return Math.min(minDepth(node.left, count), minDepth(node.right, count))}
//     if(node.left){return minDepth(node.left, count)}
//     if(node.right){return minDepth(node.right, count)}
//     return count;
// }