// Given the head of a linked List, reverse the list, and return the reversed list.

// Must return from the new head, which is the tail of the original head.

// Can be given empty lists (or of any amount)

// Example 1:
// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]

// Example 2:
// Input: head = [1,2]
// Output: [2,1]

// Example 3:
// Input: head = []
// Output: []

// check the prev node
    // if false return node
// set nodeNext = prev
// set prev to prev?.next
// remove node.next property
// set nodeNext.next to node
// recursively return this same function now using nodeNext, as the node, and prev as prev

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function reverseList(head = null) {
    if (!head || !head.next) {
        return head;
    }
    let nextNode = head.next;
    let prev = nextNode.next;
    nextNode.next = head;
    head.next = null; // Remove the reference to the next node
    return reverseBody(nextNode, prev);
}

function reverseBody(node = null, prev = null) {
    if (!prev) {
        return node;
    }
    let nextNode = prev;
    prev = prev?.next;
    nextNode.next = node;
    return reverseBody(nextNode, prev);
}