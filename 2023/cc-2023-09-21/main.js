// url: https://leetcode.com/problems/binary-tree-level-order-traversal-ii/

// Given the root of a binary tree
// Return a transversal from the bottom level up of all its nodes' values.
    // left to right, from leaf to root,

// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: [[15,7],[9,20],[3]]

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


 // bfs approach should be best here since this is a level order transversal

// set up function
    // set an visited array that we push each level's values to
        // in a post recursive manner
    // have the starting queue

// recursive function: takes queue (to have nodes), levelArr (for .values), reference to visited array, maybe something else...

// push values into viisted arr
// return visited arr;

function levelOrderBottom(root){
    const queue = new DoublyLinkedList();
    if(root){
        queue.enqueue(root);
    }
    return postRecursiveBfs(queue, [])
};

function postRecursiveBfs(queue, visited){
    // basecase of size
    if(queue.size === 0){
        return visited
    }
    const values = [];
    const children = new DoublyLinkedList();
    while(queue.size > 0){
        const node = queue.dequeue();
        // grab node, dequeue
        values.push(node.val);
        // push val into values arr
        if(node.left){
            children.enqueue(node.left);
        }
        if(node.right){
            children.enqueue(node.right);
        }
        // enqueue children into childrenarr
    }

    postRecursiveBfs(children, visited);
    // call function of child recursively
    visited.push(values);
    // push values into visited
    return visited;
    // return visited

}

// head, tail
// next, prev
class DoublyLinkedList{
    constructor(){
        this.size = 0;
        this.head = this.tail = null;
    }
    enqueue(node){
        this.size++;
        // increase size
        // if size === 1
            // set head and tail to node
        // otherwise set this.tail.next to node
        // node.prev to tail
        // this.tail = node
        // return new size
        if(this.size === 1){
            this.head = this.tail = node;
        }else{
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        return this.size;
    }
    dequeue(){
        if(this.size === 0){return null}
        this.size--;
        const node = this.head;
        if(this.size === 0){
            this.head = this.tail = null;
        }else{
            // adjust this.tail
            node.next.prev = null;
            this.head = node.next;
            node.next = null;
        }
        return node;
    }
    // removes the last item in linkedList
}