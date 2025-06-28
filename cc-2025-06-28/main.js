// url: https://leetcode.com/problems/insert-greatest-common-divisors-in-linked-list/
// Given the head of a linked list head, in which each node contains an integer value.

// Between every pair of adjacent nodes, insert a new node with a value equal to the greatest common divisor of them.

// Return the linked list after insertion.

// The greatest common divisor of two numbers is the largest positive integer that evenly divides both numbers.
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
function GCD(a, b){
    const min = Math.min(a,b);
    const max = Math.max(a,b);
    // with a min and a max we want to loop through 1 to min(inclusive)
    for(let i = min; i > 1; i--){
        // check if both min and max are divisible by the number
        if(min % i === 0 && max % i === 0){
            return i;
        }
    }
    // return the factor
    return 1;
}
function insertGreatestCommonDivisors(head){
    let currNode = head;
    let nextNode = currNode.next;
    while(nextNode){
        currNode.next = {val: GCD(currNode.val, nextNode.val), next: nextNode};
        currNode = nextNode;
        nextNode = nextNode.next;
    }
    // start with two nodes
        // calculate GCD
        // insert a new node
        // reassign currNode to nextNode
        // reassign nextNode to nextNode.next
        // if nextNode exists, then loop again
    // edge cases?    
    return head;
};
// Input: head = [18,6,10,3]
// Output: [18,6,6,2,10,1,3]
// Explanation: The 1st diagram denotes the initial linked list and the 2nd diagram denotes the linked list after inserting the new nodes (nodes in blue are the inserted nodes).
// - We insert the greatest common divisor of 18 and 6 = 6 between the 1st and the 2nd nodes.
// - We insert the greatest common divisor of 6 and 10 = 2 between the 2nd and the 3rd nodes.
// - We insert the greatest common divisor of 10 and 3 = 1 between the 3rd and the 4th nodes.
// There are no more adjacent nodes, so we return the linked list.

// Example 2:

// Input: head = [7]
// Output: [7]
// Explanation: The 1st diagram denotes the initial linked list and the 2nd diagram denotes the linked list after inserting the new nodes.
// There are no pairs of adjacent nodes, so we return the initial linked list.
