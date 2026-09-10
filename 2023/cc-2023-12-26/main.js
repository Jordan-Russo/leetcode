// url: https://leetcode.com/problems/merge-k-sorted-lists/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
// first create function that is able to merge 2 sorted lists
// use it as a helper function with merge sort
function mergeKLists (lists) {
    if(lists.length === 0){
        return null
    }
    if(lists.length === 1){
        return lists[0]
    }
    // if list length is less than 2, return it as sorted.
    const half = lists.length / 2
    const left = lists.slice(0, half)
    const right = lists.slice(half)
    return mergeTwoLists(
        mergeKLists(left),
        mergeKLists(right)
    )
}
// function that takes 2 
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