// url: https://leetcode.com/problems/longest-substring-without-repeating-characters/

// Given a string

// return the length of the longest substring w/o any repeating characters

// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// store maxLength (initialized as 0)

// set that contains all of the current values
// Implement a datastructure where you can add information to the end but remove information from the front, a queue.
    // doubly linked list

// loop through each character
    // if set has character
        // calculate length and compare it to maxLength (reassign if needed)]
        // navigate along the linked list, dequeueing (and removing from the set) stopping once the same character has been reached, dequeued and removed from the set
    // enqueue the current character to the linked list and add it to the set
// calculate and compare length to maxLength(reassign if needed)

/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function(s) {
    let maxLength = 0
    const characterSet = new Set()
    const characterList = new LinkedList()
    for(const char of s){
        // does set have character
        if(characterSet.has(char)){
            maxLength = Math.max(maxLength, characterSet.size)
            while(true){
                // removes characters until we remove a match
                const {val} = characterList.dequeue()
                characterSet.delete(val)
                if(val === char){
                    break;
                }
            }
        }
        characterList.enqueue(char)
        characterSet.add(char)
    }
    maxLength = Math.max(maxLength, characterSet.size)
    return maxLength
};

class LinkedList{
    constructor(){
        this.head = this.tail = null
    }
    enqueue(val){
        // add new value to linkedList
        if(!this.head){
            this.head = this.tail = {val, next: null}
        }else{
            const newTail = {val, next: null}
            this.tail.next = newTail
            this.tail = newTail
        }
    }
    dequeue(){
        // return popped node at head, if there is one, reassign head/tail positions
        if(!this.head){
            return null
        }else if(this.head === this.tail){
            const node = this.head
            this.head = this.tail = null
            return node
        }else{
            const node = this.head
            this.head = this.head.next
            return node
        }
    }
}