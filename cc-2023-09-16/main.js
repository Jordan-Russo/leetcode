// url: https://leetcode.com/problems/n-ary-tree-level-order-traversal/

// Given a n-ary tree
// Return an array containing a level order transversal of it's node's values

// Nary-Tree input serialization is represented in their level order traversal
// each group of children is separated by the null value (See examples).

// Example 1:
// Input: root = [1,null,3,2,4,null,5,6]
// Output: [[1],[3,2,4],[5,6]]

// Example 2:
// Input: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
// Output: [[1],[2,3,4,5],[6,7,8,9,10],[11,12,13],[14]]

// levelOrder
// iniitializes an orderTransversal array
// initializes a stack array (empty). maybe delete this
// calls bfs

// bfs (takes node, takes array, takes stack)
    // if(!node){return }
    // create an array that has the current stack
    // 




/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */

function levelOrder(head){
    const visited = [];
    const queue = [];
    if(head){queue.push(head)}
    return bfs(visited, queue);
}

function bfs(visited, queue = []){
    if(queue.length === 0){return visited}
    let newNodes = [];
    let values = [];
    let currNode;
    while(queue.length > 0){
        currNode = queue.shift();
        // bottle neck - should try modelling the queue with a linked list instead
        // an O(1) linked list dequeue could be made instead.
        values.push(currNode.val);
        for(const child of currNode.children){
            newNodes.push(child)
        }
    }
    // stack is emptied
    visited.push(values);
    return bfs(visited, newNodes)
}

// Time complexity: O(n ^ 2); due to looping shift; n is number of nodes at each level
// can be improved to O(h + n); height of the tree, nodes at each level.

// space complexity: O(n) for each node.

// We need an old array
// We need a new array
// We unshift from old array until empty
// We push to new array
// Once old array is empty, all of the visits from the old array get pushed into the visited
// old array becomes the new array
// new array is reinitialized.
// some logic where we can push other values in curr as well
// push value of node to visited

// unshift node from stack
// add all chilren to a different stack