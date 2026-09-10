// url: https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/description/
// Given a singly linked list that has an even number of nodes
// Return the maximum sum that can be made with two nodes the same distance from the middle.
// Input: head = [5,4,2,1]
// Output: 6
// Explanation:
// Nodes 0 and 1 are the twins of nodes 3 and 2, respectively. All have twin sum = 6.
// There are no other nodes with twins in the linked list.
// Thus, the maximum twin sum of the linked list is 6. 
// Example 2:


// Input: head = [4,2,2,3]
// Output: 7
// Explanation:
// The nodes with twins present in this linked list are:
// - Node 0 is the twin of node 3 having a twin sum of 4 + 3 = 7.
// - Node 1 is the twin of node 2 having a twin sum of 2 + 2 = 4.
// Thus, the maximum twin sum of the linked list is max(7, 4) = 7. 
// Example 3:


// Input: head = [1,100000]
// Output: 100001
// Explanation:
// There is only one node with a twin in the linked list having twin sum of 1 + 100000 = 100001.
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */

var pairSum = function(head) {
    const elements = []
    let pos = head
    while(pos){
        elements.push(pos.val)
        pos = pos.next
    }
    let maxTwinSum = 0
    for(let i = 0; i < elements.length / 2; i++){
        const twinSum = elements[i] + elements[elements.length - 1 - i]
        maxTwinSum = Math.max(maxTwinSum, twinSum)
    }
    return maxTwinSum
};