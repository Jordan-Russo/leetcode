// url: https://leetcode.com/problems/middle-of-the-linked-list/
// Given the head of a singly linked list, return the middle node of the linked list.

// If there are two middle nodes, return the second middle node.

// Example 1:


// Input: head = [1,2,3,4,5]
// Output: [3,4,5]
// Explanation: The middle node of the list is node 3.
// Example 2:


// Input: head = [1,2,3,4,5,6]
// Output: [4,5,6]
// Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.

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
var middleNode = function(head) {
    let length = 0
    let curr = head
    while(curr){
        length++
        curr = curr.next
    }
    curr = head
    // where is half
    // 5 -> 3
    // 6 -> 4
    // so we divide length by 2, floor it, and add 1
    const half = Math.trunc(length / 2) + 1
    let depth = 0
    while(curr){
        depth++
        if(depth === half){
            return curr
        }
        curr = curr.next
    }
};