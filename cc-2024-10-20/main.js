// url: https://leetcode.com/problems/ugly-number-ii/
// An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5.

// Given an integer n, return the nth ugly number.

 

// Example 1:

// Input: n = 10
// Output: 12
// Explanation: [1, 2, 3, 4, 5, 6, 8, 9, 10, 12] is the sequence of the first 10 ugly numbers.

// Example 2:

// Input: n = 1
// Output: 1
// Explanation: 1 has no prime factors, therefore all of its prime factors are limited to 2, 3, and 5.

/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    // initialize a set (1)
    const seen = new Set([1]);
    // initialize a minHeap, with 1
    const priorityQueue = new MinHeap();
    priorityQueue.insert(1);
    let nthNumber;
    // loop n times
    for(let i = 0; i < n; i++){
        // take the top value from the minHeap
        const removed = priorityQueue.delete();
        // insert val * 2, val * 3, and val * 5 into the minHeap
            // if their products haven't been seen before
        const multiple2 = removed * 2;
        const multiple3 = removed * 3;
        const multiple5 = removed * 5;
        if(!seen.has(multiple2)){
            priorityQueue.insert(removed * 2);
            seen.add(multiple2);
        }
        if(!seen.has(multiple3)){
            priorityQueue.insert(removed * 3);
            seen.add(multiple3);
        }
        if(!seen.has(multiple5)){
            priorityQueue.insert(removed * 5);
            seen.add(multiple5);
        }
        // change current value to the removed one
        nthNumber = removed;
    }
    // return seen numbers as an array
    return nthNumber;
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
    #heapifyUp(i){
        if(i === 0){return;}
        const val = this.data[i];
        const parentI = this.#parent(i);
        const parentVal = this.data[parentI];
        const isParentLarger = parentVal > val;
        if(isParentLarger){
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
        if(leftChildI > this.data.length){return;}
        const rightChildI = this.#rightChild(i);
        const smallestChildI = this.data[rightChildI] < this.data[leftChildI] ? rightChildI : leftChildI;
        const smallestChildVal = this.data[smallestChildI];
        const isParentLarger = val > smallestChildVal;
        if(isParentLarger){
            this.data[smallestChildI] = val;
            this.data[i] = smallestChildVal;
            this.#heapifyDown(smallestChildI);
        }
        return;
    }
    #parent(i){return Math.floor((i - 1) / 2)}
    #leftChild(i){return i * 2 + 1;}
    #rightChild(i){return i * 2 + 2;}
}