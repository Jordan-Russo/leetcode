// url: https://leetcode.com/problems/reverse-nodes-in-k-group/
// Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.

// k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.

// You may not alter the values in the list's nodes, only nodes themselves may be changed.

 

// Example 1:

// Input: head = [1,2,3,4,5], k = 2
// Output: [2,1,4,3,5]

// Example 2:

// Input: head = [1,2,3,4,5], k = 3
// Output: [3,2,1,4,5]

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
function reverseKGroup(head, k){
    let node = head
    const nodes = []
    while(node){
        nodes.push(node)
        node = node.next
    }
    for(let i = k - 1; i < nodes.length; i += k){
        const after = nodes[i + 1] || null
        const before = nodes[i - k] || null
        const left = i - k + 1
        const right = i
        let position = right
        while(position > i - k + 1){
            nodes[position].next = nodes[position - 1]
            position--
        }
        nodes[left].next = after
        if(before){
            before.next = nodes[right]
        }else{
            head = nodes[right]
        }
        // handle going in reverse
        // start in position

        // reverse the node order in the array itself
        const middle = (left + right) / 2
        for(let j = 0; j + left < middle; j++){
            const curr = nodes[left + j]
            nodes[left + j] = nodes[right - j]
            nodes[right - j] = curr
        }
    }
    return head
};