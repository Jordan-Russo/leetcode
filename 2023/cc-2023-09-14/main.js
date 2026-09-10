// url: https://leetcode.com/problems/linked-list-cycle-ii/

// Given the head of a linked list that may or may not being cyclic.
// Return the node where the cycle begins (or null if there is no cycle)

// Example 1:
// Input: head = [3,2,0,-4], pos = 1
// Output: tail connects to node index 1
// Explanation: There is a cycle in the linked list, where tail connects to the second node.

// Example 2:
// Input: head = [1,2], pos = 0
// Output: tail connects to node index 0
// Explanation: There is a cycle in the linked list, where tail connects to the first node.

// Example 3:
// Input: head = [1], pos = -1
// Output: no cycle
// Explanation: There is no cycle in the linked list.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// Create two pointers
    // slow and fast
// looping continues until fast reaches end of linked list (equal to null)
    // slow moves one node at a time per loop
    // fast moves two nodes at a time per loop
    // return null if fast or fast.next is null.
// If fast === slow
    // set one of the nodes to the head
    // increment both pointers until they equal each other again
        // return the node both of the pointers are equal to
// call function with the head
function detectCycle(head){
    let slow = head;
    let fast = head;
    do{
        slow = slow?.next ?? null;
        fast = fast?.next?.next ?? null;
        if(slow === fast){
            return findCycleStart(head, fast, slow);
        }
    }while(fast && fast.next)
    return null
}
function findCycleStart(head, node1, node2){
    if(!node1 || !node2){return null}
    // checks for finished linked list
    node1 = head;
    // readjusts graph offset
    while(node1 !== node2){
        node1 = node1.next;
        node2 = node2.next;
    }
    return node1;
    // match after offset occurs at the start of cycle
}
// interesting edge case:
// if list isn't cyclic and only 1 node long, both slow and fast will be nullish (but equal) which goes into the equality conditional
// but since slow and fast are going to be equal and fast was reassigned now to head.
// Therefore we don't need to check that both slow and fast are truthy
// optional chaining is important to prevent errors being thrown from reading properties of nullish values.