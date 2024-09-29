// url: https://leetcode.com/problems/final-array-state-after-k-multiplication-operations-i/
// You are given an integer array nums, an integer k, and an integer multiplier.

// You need to perform k operations on nums. In each operation:

//     Find the minimum value x in nums. If there are multiple occurrences of the minimum value, select the one that appears first.
//     Replace the selected minimum value x with x * multiplier.

// Return an integer array denoting the final state of nums after performing all k operations.

 

// Example 1:

// Input: nums = [2,1,3,5,6], k = 5, multiplier = 2

// Output: [8,4,6,5,6]

// Explanation:
// Operation	Result
// After operation 1	[2, 2, 3, 5, 6]
// After operation 2	[4, 2, 3, 5, 6]
// After operation 3	[4, 4, 3, 5, 6]
// After operation 4	[4, 4, 6, 5, 6]
// After operation 5	[8, 4, 6, 5, 6]

// Example 2:

// Input: nums = [1,2], k = 3, multiplier = 4

// Output: [16,8]

// Explanation:
// Operation	Result
// After operation 1	[4, 2]
// After operation 2	[4, 8]
// After operation 3	[16, 8]
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */
var getFinalState = function(nums, k, multiplier) {
    const priorityQueue = new MinHeap();
    for(let i = 0; i < nums.length; i++){
        priorityQueue.insert([nums[i], i]);
    }
    while(k > 0){
        const [smallest, index] = priorityQueue.delete();
        priorityQueue.insert([smallest * multiplier, index]);
        k--;
    }
    const result = new Array(nums.length);
    for(const [val, index] of priorityQueue.data){
        result[index] = val;
    }
    return result;
};

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
        this.data[0] = this.data[this.data.length - 1];
        this.data.pop();
        this.#heapifyDown(0);
        return removed;
    }
    #heapifyDown(i){
        if(i >= this.data.length - 1){return}
        const val = this.data[i];
        const leftChildI = this.#leftChild(i);
        if(leftChildI > this.data.length - 1){return}
        const rightChildI = this.#rightChild(i);
        let smallestChildI;
        if(rightChildI > this.data.length - 1){smallestChildI = leftChildI;}
        else{smallestChildI = (this.data[rightChildI][0] < this.data[leftChildI][0] 
        || this.data[rightChildI][0] === this.data[leftChildI][0] && this.data[rightChildI][1] < this.data[leftChildI][1]) ? rightChildI : leftChildI;}
        const smallestChildVal = this.data[smallestChildI];
        const isParentLarger = val[0] > smallestChildVal[0] || smallestChildVal[0] === val[0] && smallestChildVal[1] < val[1];
        if(isParentLarger){
            this.data[i] = smallestChildVal;
            this.data[smallestChildI] = val;
            this.#heapifyDown(smallestChildI);
        }
        return;
    }
    #heapifyUp(i){
        if(i === 0){return;}
        const val = this.data[i];
        const parentI = this.#parent(i);
        const parentVal = this.data[parentI];
        const isParentLarger = parentVal[0] > val[0] || parentVal[0] === val[0] && parentVal[1] > val[1];
        if(isParentLarger){
            this.data[i] = parentVal;
            this.data[parentI] = val;
            this.#heapifyUp(parentI);
        }
        return;
    }
    #parent(i){
        return Math.floor((i - 1) / 2);
    }
    #leftChild(i){
        return i * 2 + 1;
    }
    #rightChild(i){
        return i * 2 + 2;
    }
}
// data will be stored as [value, index]
// minHeap
    // to store value and index
    // but only use value to sort
// add all values and index to min heap
// loop and decrement k until there are no remaining operations
    // each time delete the min heap top value
    // multiply it
    // insert it back in
// create a result array, with the respective length
// loop through the heap values
// change the values at the result array to match the values of the heap
// return the result array
