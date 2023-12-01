// url: https://leetcode.com/problems/remove-nth-node-from-end-of-list/

// Given a linked list /w at least one node

// also given a number, n

// Return the linkedList after removing the nth node from the end

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let length = 0
    let node = head
    while(node){
        length++
        node = node.next
    }
    let pos = 0
    let target = Math.max(length - n, 0)
    node = head
    while(node){
        // one edge case to handle the first value being the target
        // other case to handle the 2nd value being the target
        // an additional check to handle any value after the second value being the target
        if(target === pos){
            head = head.next
            node.next = null
            return head;
        }else if(target === pos + 1){
            if(node.next.next){
                const right = node.next.next
                node.next.next = null
                node.next = right
            }else{
                node.next = null
            }
            return head
        }
        pos++
        node = node.next
    }
    

    // with length go to one before the deletion and store it, 
    // go to next node
    // and node after that if there is one
};