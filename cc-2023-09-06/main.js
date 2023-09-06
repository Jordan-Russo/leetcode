// url: https://leetcode.com/problems/add-two-numbers/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// The number of nodes in each linked list is in the range [1, 100].
// 0 <= Node.val <= 9
// It is guaranteed that the list represents a number that does not have leading zeros.

// Example 1:
    // Input: l1 = [2,4,3], l2 = [5,6,4]
    // Output: [7,0,8]
    // Explanation: 342 + 465 = 807.

// Example 2:
    // Input: l1 = [0], l2 = [0]
    // Output: [0]

// Example 3:
    // Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
    // Output: [8,9,9,9,0,0,0,1]

// recursively add values of both nodes to a single node (while iterating through them) that is recursively created.
// handling carry over values when the sum at any node point goes >= 10.
// will also need a variable to hold the node
// will need a variable to hold state of the carry.

function addTwoNumbers(l1, l2, sum = null, hasCarry = false) {
    if(!l1 && !l2){
        if(hasCarry){sum.next = makeNode(1)}
        return sum;
    }
    // base case handles carry on the last node
    let val1 = l1?.val || 0;
    let val2 = l2?.val || 0;
    // sets value of the nodes to default to 0
    let sumVal = val1 + val2 + Number(hasCarry);
    // sum the nodes /w carry
    hasCarry = false;
    // carry the number from the sum
    if(sumVal >= 10){
        hasCarry = true;
        sumVal -= 10;
    }
    const node = makeNode(sumVal);
    if(!sum){
        sum = node;
    }else{
        sum.next = node;
    }
    addTwoNumbers(l1?.next, l2?.next, node, hasCarry)
    return sum;
};
function makeNode(val){
    return {val, next: null}
}