// url: https://leetcode.com/problems/find-subsequence-of-length-k-with-the-largest-sum/
// You are given an integer array nums and an integer k. You want to find a subsequence of nums of length k that has the largest sum.

// Return any such subsequence as an integer array of length k.

// A subsequence is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.

 

// Example 1:

// Input: nums = [2,1,3,3], k = 2
// Output: [3,3]
// Explanation:
// The subsequence has the largest sum of 3 + 3 = 6.

// Example 2:

// Input: nums = [-1,-2,3,4], k = 3
// Output: [-1,3,4]
// Explanation: 
// The subsequence has the largest sum of -1 + 3 + 4 = 6.

// Example 3:

// Input: nums = [3,4,3,3], k = 2
// Output: [3,4]
// Explanation:
// The subsequence has the largest sum of 3 + 4 = 7. 
// Another possible subsequence is [4, 3].

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSubsequence = function(nums, k) {
    const priorityQueue = new MinHeap();
    for(let i = 0; i < nums.length; i++){
        priorityQueue.insert([nums[i], i]);
        if(priorityQueue.data.length > k){
            priorityQueue.delete();
        }
    }
    priorityQueue.data.sort((a, b) =>  a[1] - b[1]);
    // sort the queue based off of ascending index values
    const subsequence = priorityQueue.data.map(([val]) => val);
    return subsequence;
};
// initialize min heap, making sure its max size is k
// loop through the numbers and add the value and index 
    // if the min heap length exceeds k, remove the smallest value
// sort the elements by their index position
// return the array of elements, sorted by index

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
        if(i >= this.data.length - 1){return;}
        const val = this.data[i];
        const leftChildI = this.#leftChild(i);
        if(leftChildI > this.data.length - 1){return;}
        const rightChildI = this.#rightChild(i);
        const smallestChildI = this.data[rightChildI]?.[0] < this.data[leftChildI][0] ? rightChildI : leftChildI;
        const smallestChildVal = this.data[smallestChildI];
        const isParentLarger = val[0] > smallestChildVal[0];
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
        const isParentLarger = val[0] < parentVal[0];
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