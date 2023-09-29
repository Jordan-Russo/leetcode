// url: https://leetcode.com/problems/merge-two-sorted-lists/

// Given two linked lists in sorted order (asc)

// Return the head new linkedlist with both of the linkedLists's nodes in it also in sorted order (asc).
    // merge them to a single linkedList and return the root.


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
function mergeTwoLists(list1, list2){
    let head = null;
    let pointer1 = list1;
    let pointer2 = list2;
    let position;
    let tail;
    while(pointer1 || pointer2){
        if(pointer1?.val < pointer2?.val || !pointer2){
            tail = createNode(pointer1.val);
            pointer1 = pointer1.next;
        }else{
            tail = createNode(pointer2.val);
            pointer2 = pointer2.next;
        }
        if(position){
            position.next = tail;
            position = position.next;
        }else{
            position = tail
        }
        head ??= position;
    }
    return head;
};

function createNode(val){
    return {val, next: null}
}
// initialize head to null
// initialize position
// initialize tail
// intialize pointers for list1 and list2, as pointer1 and pointer2
// if either list1 or list2 aren't falsy
    // do a loop while condition above is true
        // if pointer1.val < pointer2.val || !pointer2
            // tail = createNode(pointer1.val)
            // pointer1 = pointer1.next;
        // else
            // tail = createNode(pointer2.val)
            // pointer2 = pointer2.next
        // set position to tail
        // head ??= position.
// return head;

        
// helper function: create node
    // given a value
    // returns object in this format
    // {this.val = value, next: null}