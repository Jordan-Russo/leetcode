// url: https://leetcode.com/problems/find-the-kth-largest-integer-in-the-array/
// You are given an array of strings nums and an integer k. Each string in nums represents an integer without leading zeros.

// Return the string that represents the kth largest integer in nums.

// Note: Duplicate numbers should be counted distinctly. For example, if nums is ["1","2","2"], "2" is the first largest integer, "2" is the second-largest integer, and "1" is the third-largest integer.

 

// Example 1:

// Input: nums = ["3","6","7","10"], k = 4
// Output: "3"
// Explanation:
// The numbers in nums sorted in non-decreasing order are ["3","6","7","10"].
// The 4th largest integer in nums is "3".

// Example 2:

// Input: nums = ["2","21","12","1"], k = 3
// Output: "2"
// Explanation:
// The numbers in nums sorted in non-decreasing order are ["1","2","12","21"].
// The 3rd largest integer in nums is "2".

// Example 3:

// Input: nums = ["0","0"], k = 2
// Output: "0"
// Explanation:
// The numbers in nums sorted in non-decreasing order are ["0","0"].
// The 2nd largest integer in nums is "0".

/**
 * @param {string[]} nums
 * @param {number} k
 * @return {string}
 */
var kthLargestNumber = function(nums, k) {
    const priorityQueue = new MinHeap();
    for(const num of nums){
        priorityQueue.insert(num);
        if(priorityQueue.data.length > k){
            priorityQueue.delete();
        }
    }
    return priorityQueue.data[0];
};

// make a stream that handles this with a minHeap
// add value to minHeap
// if size ever exceeds k, delete from the heap
// return the top value from the minHeap

class MinHeap{
    constructor(){
        this.data = [];
    }
    insert(val){
        this.data.push(val);
        this.#heapifyUp(this.data.length - 1);
        return;
    }
    delete(){
        if(this.data.length === 0){return;}
        const removed = this.data[0];
        this.data[0] = this.data[this.data.length - 1]
        this.data.pop();
        this.#heapifyDown(0);
        return removed;
        // return what was deleted
    }
    #heapifyDown(i){
        if(i >= this.data.length){return;}
        const val = this.data[i];
        const leftChildI = this.#leftChild(i);
        if(leftChildI >= this.data.length){return;}
        const rightChildI = this.#rightChild(i);
        const smallestChildI = this.data[rightChildI] && !isStringGreaterThan(this.data[rightChildI], this.data[leftChildI]) ? rightChildI : leftChildI;
        const smallestChildVal = this.data[smallestChildI];
        const isParentLarger = isStringGreaterThan(val, smallestChildVal);
        if(isParentLarger){
            this.data[i] = smallestChildVal;
            this.data[smallestChildI] = val;
            this.#heapifyDown(smallestChildI);
        }
    }
    #heapifyUp(i){
        if(i === 0){return;}
        const val = this.data[i];
        const parentI = this.#parent(i);
        const parentVal = this.data[parentI];
        const isParentLarger = isStringGreaterThan(parentVal, val);
        if(isParentLarger){
            this.data[i] = parentVal;
            this.data[parentI] = val;
            this.#heapifyUp(parentI);
        }
        return;
    }
    #leftChild(i){return i * 2 + 1;}
    #rightChild(i){return i * 2 + 2;}
    #parent(i){return Math.floor((i - 1) / 2);}
}

function isStringGreaterThan(a,b){
    if(!a){return false;}
    if(!b){return true;}
    if(a.length > b.length){return true}
    if(b.length > a.length){return false}
    // strings equal in length that are positive integers can be compared
    return a > b;
}
// function that compares two strings, a and b
    // string numbers will only be positive integers
// if a < b, return -1
// if a === b return 0
// if a > b return 1

// first check length
// if length is unequal, the longer string is the greater one
// if length is equal, iterate from the start to the end, until one of the digits don't match and make that the larger one
// once done iterating, if they're still equal return that