// url: https://leetcode.com/problems/remove-duplicates-from-sorted-list/

// Given the head of a linked list
    // Linked list has nodes that have values that are sorted in asc order
// Return the linked list but remove all duplicate value nodes

// Example 1:


// Input: head = [1,1,2]
// Output: [1,2]
// Example 2:


// Input: head = [1,1,2,3,3]
// Output: [1,2,3]

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

// Have a pointer to the head to return and start from
// Have a pointer to the current node
// Have a pointer to the nextNode
    // keep looping until the nextNode has a value that is greater than the node value
        // assign the node.next to be the nextNode that has a value greater than it
        // if there is no nextNode, then it's null
            // assign the node.next to be null
// Recursively call this through the nextNode
    // if the node exit from the loop.
// Return the head

var deleteDuplicates = function(head) {
  function uniqueNodes(node){
      if(!node){
          return node
      }
      let nextNode = node.next
      while(nextNode){
          if(nextNode.val <= node.val){
              nextNode = nextNode.next
              if(!nextNode){
                  node.next = null
              }
          }else{
              node.next = nextNode
              break
          }
          // if the node isn't less than but there is no next node, next must be null
      }
      uniqueNodes(nextNode)
  }
  uniqueNodes(head)
  return head
};