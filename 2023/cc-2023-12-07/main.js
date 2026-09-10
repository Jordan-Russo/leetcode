// url: https://leetcode.com/problems/copy-list-with-random-pointer/

/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

// Loop through the list, cache a node for each object which holds a value
// The cache will use the value as a key to the object
// Loop through the list again, making the next links and the random links at each node, referencing the value to obtain the key of the node.

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    const copy = new Map()
    copy.set(null, null)
    let currNode = head
    while(currNode){
        copy.set(currNode, newNode(currNode.val))
        currNode = currNode.next
    }
    currNode = head
    while(currNode){
      copy.set(
        currNode, 
        Object.assign(
          copy.get(currNode), 
          {next: copy.get(currNode.next), random: copy.get(currNode.random)}
        )
      )
      currNode = currNode.next
    }
    return copy.get(head)
    function newNode(val){
        return {val}
    }
};