// url: https://leetcode.com/problems/relative-ranks/
// You are given an integer array score of size n, where score[i] is the score of the ith athlete in a competition. All the scores are guaranteed to be unique.

// The athletes are placed based on their scores, where the 1st place athlete has the highest score, the 2nd place athlete has the 2nd highest score, and so on. The placement of each athlete determines their rank:

//     The 1st place athlete's rank is "Gold Medal".
//     The 2nd place athlete's rank is "Silver Medal".
//     The 3rd place athlete's rank is "Bronze Medal".
//     For the 4th place to the nth place athlete, their rank is their placement number (i.e., the xth place athlete's rank is "x").

// Return an array answer of size n where answer[i] is the rank of the ith athlete.

 

// Example 1:

// Input: score = [5,4,3,2,1]
// Output: ["Gold Medal","Silver Medal","Bronze Medal","4","5"]
// Explanation: The placements are [1st, 2nd, 3rd, 4th, 5th].

// Example 2:

// Input: score = [10,3,8,9,4]
// Output: ["Gold Medal","5","Bronze Medal","Silver Medal","4"]
// Explanation: The placements are [1st, 5th, 3rd, 2nd, 4th].


/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    const prizes = ["Gold Medal","Silver Medal","Bronze Medal"];
    const valueToIndex = {};
    for(let i = 0; i < score.length; i++){
        const value = score[i];
        valueToIndex[value] = i;
    }
    const priorityQueue = new MaxHeap();
    for(const num of score){
        priorityQueue.insert(num);
    }
    const result = new Array(score.length);
    while(priorityQueue.data.length > 0){
        const value = priorityQueue.peak();
        const index = valueToIndex[value];
        const lengthDifference = score.length - priorityQueue.data.length;
        result[index] = prizes[lengthDifference] || String(lengthDifference + 1);
        priorityQueue.delete();
    }
    return result;
};

class MaxHeap{
    constructor(){
        this.data = [];
    }
    peak(){return this.data[0]}
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
        if(i >= this.data.length - 1){return;}
        const val = this.data[i];
        const leftChildI = this.#leftChild(i);
        if(leftChildI > this.data.length - 1){return;}
        const rightChildI = this.#rightChild(i);
        const largestChildI = this.data[rightChildI] > this.data[leftChildI] ? rightChildI : leftChildI;
        const largestChildVal = this.data[largestChildI];
        const isParentSmaller = val < largestChildVal;
        if(isParentSmaller){
            this.data[i] = largestChildVal;
            this.data[largestChildI] = val;
            this.#heapifyDown(largestChildI);
        }
        return;
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
    #leftChild(i){return i * 2 + 1;}
    #rightChild(i){return i * 2 + 2;}
    #parent(i){return Math.floor((i - 1) / 2)}
}

// build a datastructure that returns the index of a number when given its value
// build max Heap
// keep popping values (largest to smallest) out with a counter and  using the index location and the place change the value
// return the array of places.