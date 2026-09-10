// url: https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal

// Given the root of a binary tree

// Return a nested array that is a zigzag level transversal of the node's values 

// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[20,9],[15,7]]

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
function zigzagLevelOrder(root) {
    const queue = new DoublyLinkedList();
    if(root){
        queue.append(root);
    }
    return bfs([], queue, true);
};

function bfs(visited, queue, isZigzag){
    if(queue.size === 0){return visited}
    const levelValues = [];
    const children = new DoublyLinkedList();
    while(queue.size > 0){
        const node = queue.pop();
        levelValues.push(node.val);
        if(isZigzag){
            if(node.left){
                children.append(node.left);
            }
            if(node.right){
                children.append(node.right);
            }
        }else{
            if(node.right){
                children.append(node.right);
            }
            if(node.left){
                children.append(node.left);
            }
        }
    }
    visited.push(levelValues);
    return bfs(visited, children, !isZigzag);
}

// set up function
// root
// creates a DLL
// if root is truthy appends root to queue
// calls bfs with visited arr, current queue, and zigZag set to true

// bfs function
// take visited arr, take queue, take isZigzag
// basecase for queue being empty, would return visited arr if so
// initialize level values arr
// initialize DLL for children nodes
// loop while queue size > 0
    // pop node from queue
    // push value into levelValues
    // if zigZag
        // append left then right
    // if not zigZag
        // append right and then left
// call bfs with visited arr, children queue, and !zigZag

// it may have been better for the implementation methods to instead be push, shift and pop.

// Doubly Linked List implementation
// needs:
// head, tail
// next, prev
// size
// append
// pop
class DoublyLinkedList{
    constructor(){
        this.head = this.tail = null;
        this.size = 0;
    }
    append(node){
        this.size++;
        if(this.size === 1){
            this.head = this.tail = node;
        }else{
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        return this.size;
    }
    pop(){
        if(this.size === 0){return null}
        const node = this.tail;
        this.size--;
        if(this.size === 0){this.head = this.tail = null}
        else{
            node.prev.next = null;
            this.tail = node.prev;
            node.prev = null;
        }
        return node;
    }
}