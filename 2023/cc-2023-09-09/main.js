// url: https://leetcode.com/problems/linked-list-cycle/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */


// Given the head of a linked list, determine if there is a cycle (unlimited repeat of 2 or more nodes, as you transverse)

// Example 1:
    // Input: head = [3,2,0,-4], pos = 1
    // Output: true
    // Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

// Example 2:
    // Input: head = [1,2], pos = 0
    // Output: true
    // Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.

// Example 3:
    // Input: head = [1], pos = -1
    // Output: false
    // Explanation: There is no cycle in the linked list.


function hasCycle(head){
    // base case where there is no nodes to go to anymore
        // returns false
    // base case where a node is repeated
        // returns true

    // at each node, we assigne a pos
    // position gets incremented after being assigned
    let node = head;
    let pos = 0;
    while(node){
        if('pos' in node){return true};
        node.pos = pos++;
        console.log(node.pos);
        node = node.next;
    }
    return false;
};

function hasCycle(head){
    let slow = fast = head;
    do{
        if(!fast || !fast.next){return false}
        fast = fast.next.next;
        slow = slow.next;
        // fast moves 2 spaces
        // slow moves 1
        // collide should happen in a single cycle of slow.
    }while(slow !== fast)
    return true;
};