// url: https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/description/
// Given the array of integers nums, you will choose two different indices i and j of that array. Return the maximum value of (nums[i]-1)*(nums[j]-1).

 

// Example 1:

// Input: nums = [3,4,5,2]
// Output: 12 
// Explanation: If you choose the indices i=1 and j=2 (indexed from 0), you will get the maximum value, that is, (nums[1]-1)*(nums[2]-1) = (4-1)*(5-1) = 3*4 = 12. 

// Example 2:

// Input: nums = [1,5,4,5]
// Output: 16
// Explanation: Choosing the indices i=1 and j=3 (indexed from 0), you will get the maximum value of (5-1)*(5-1) = 16.

// Example 3:

// Input: nums = [3,7]
// Output: 12

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    const priorityQueue = new MinHeap();
    for(const num of nums){
        priorityQueue.insert(num);
        if(priorityQueue.data.length > 2){
            priorityQueue.delete();
        }
    }
    const firstNumber = priorityQueue.data[0];
    const secondNumber = priorityQueue.data[1];
    return (firstNumber - 1) * (secondNumber - 1);
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
        const val = this.data[i];
        if(i >= this.data.length){return;}
        const leftChildI = this.#leftChild(i);
        if(leftChildI > this.data.length){return;}
        const rightChildI = this.#rightChild(i);
        const smallestChildI = this.data[rightChildI] < this.data[leftChildI] ? rightChildI : leftChildI;
        const smallestChildVal = this.data[smallestChildI];
        const isParentLarger = val > smallestChildVal;
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
        const isParentLarger = val < parentVal;
        if(isParentLarger){
            this.data[i] = parentVal;
            this.data[parentI] = val;
            this.#heapifyUp(parentI);
        }
        return;
    }
    #leftChild(i){
        return i * 2 + 1;
    }
    #rightChild(i){
        return i * 2 + 2;
    }
    #parent(i){
        return Math.floor((i - 1) / 2)
    }
}