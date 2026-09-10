// url: https://leetcode.com/problems/palindrome-linked-list/description/
// given a singly linked list, return a boolean on whether or not its node values form a palindrome
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    const elements = []
    let pos = head
    while(pos){
        elements.push(pos.val)
        pos = pos.next
    }
    for(let i = 0; i < elements.length / 2; i++){
        if(elements[i] !== elements[elements.length - 1 - i]){
            return false
        }
    }
    return true
};

// To do in O(n) with O(1) space you need to do:
// first loop through the list to get the length of it
// Create a recursive function that says what depth your at
    // once you reach the end
        // return whether head and the curr node have the same value
        // then move head
        // and return the boolean and get to the previous node
        // keep doing these checks making sure at all levels true is being returned
        // then after you passed up onto a value => half the depth
        // keep returning the result of the previous function call
    // make recursive calls to the next element while modifying the depth in the function call