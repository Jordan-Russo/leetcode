// url: https://leetcode.com/problems/kth-largest-element-in-an-array/
// Given an integer array nums and an integer k, return the kth largest element in the array.

// Note that it is the kth largest element in the sorted order, not the kth distinct element.

// Can you solve it without sorting?

 

// Example 1:

// Input: nums = [3,2,1,5,6,4], k = 2
// Output: 5

// Example 2:

// Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
// Output: 4

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    const maxHeap = new MaxHeap;
    for(const num of nums){
        maxHeap.insert(num);
    }
    while(k > 1){
        maxHeap.delete();
        k--;
    }
    return maxHeap.delete();

// make a max heap
// keep deleting and decrementing k until k === 1
// return the value at the top of the heap.
};

class MaxHeap{
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
        if(this.data.length === 1){
            this.data = [];
            return removed;
        }
        this.data[0] = this.data[this.data.length - 1];
        this.data.pop();
        this.#heapifyDown(0);
        return removed;
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
    #heapifyUp(i){
        if(i === 0){return;}
        const val = this.data[i];
        const parentI = this.#parent(i);
        const parentVal = this.data[parentI];
        const isParentSmaller = parentVal < val;
        if(isParentSmaller){
            this.data[i] = parentVal;
            this.data[parentI] = val;
            this.#heapifyUp(parentI);
        }
        return;
    }
    #heapifyDown(i){
        if(i >= this.data.length){return;}
        const val = this.data[i];
        const leftChildI = this.#leftChild(i);
        if(leftChildI in this.data === false){return;}
        const rightChildI = this.#rightChild(i);
        const largestChildI = this.data[rightChildI] > this.data[leftChildI] ? rightChildI : leftChildI;
        const largestChildVal = this.data[largestChildI];
        const isParentSmaller = largestChildVal > val;
        if(isParentSmaller){
            this.data[i] = largestChildVal;
            this.data[largestChildI] = val;
            this.#heapifyDown(largestChildI);
        }
        return;
    }
}