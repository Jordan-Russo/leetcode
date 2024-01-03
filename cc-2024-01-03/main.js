// url: https://leetcode.com/problems/reverse-linked-list/
// Given a singly linked list reverse it
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
var reverseList = function(head) {
    if(!head || !head.next){
        return head
    }
    return reverseNodes(head)
};
// Reverses Nodes recursively and returns the new head
function reverseNodes(node, prev = null){
    const curr = node
    const next = node.next
    curr.next = prev
    if(!next){
        return curr
    }
    return reverseNodes(next, curr)
}