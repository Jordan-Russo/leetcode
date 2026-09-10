// url: https://leetcode.com/problems/reorder-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */

// Make an array that contains all of the nodes in order

// loop through the array, connecting the left element with the right element, and then connect the right element with the left one
// with the length of the array determine the length between the two nodes
// handle 3 cases
// nodes are the same
    // set the next node to null
// nodes are adjacent
    // set the next node for the left node to be the right but set the right node's next to be null
// nodes are further apart
    // set the left node next to be the right node, set the right node next to be the node ordered after the left node in the array
// return the head

var reorderList = function(head) {
    const nodes = []
    let visitedNode = head
    while(visitedNode){
        nodes.push(visitedNode)
        visitedNode = visitedNode.next
    }
    // nodes now has all of the nodes
    const half = nodes.length / 2
    let left
    let right
    for(let i = 0; i < half; i++){
        left = i
        right = nodes.length - 1 - i
        const distanceBetweenNodes = right - left
        if(distanceBetweenNodes > 0){
            nodes[left].next = nodes[right]
            nodes[right].next = distanceBetweenNodes === 1 ? 
            null 
            : nodes[left + 1]
        }else{
            nodes[left].next = null
        }
    }
    return head    
};