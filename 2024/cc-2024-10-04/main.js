// url: https://leetcode.com/problems/remove-stones-to-minimize-the-total/
// You are given a 0-indexed integer array piles, where piles[i] represents the number of stones in the ith pile, and an integer k. You should apply the following operation exactly k times:

//     Choose any piles[i] and remove floor(piles[i] / 2) stones from it.

// Notice that you can apply the operation on the same pile more than once.

// Return the minimum possible total number of stones remaining after applying the k operations.

// floor(x) is the greatest integer that is smaller than or equal to x (i.e., rounds x down).

 

// Example 1:

// Input: piles = [5,4,9], k = 2
// Output: 12
// Explanation: Steps of a possible scenario are:
// - Apply the operation on pile 2. The resulting piles are [5,4,5].
// - Apply the operation on pile 0. The resulting piles are [3,4,5].
// The total number of stones in [3,4,5] is 12.

// Example 2:

// Input: piles = [4,3,6,7], k = 3
// Output: 12
// Explanation: Steps of a possible scenario are:
// - Apply the operation on pile 2. The resulting piles are [4,3,3,7].
// - Apply the operation on pile 3. The resulting piles are [4,3,3,4].
// - Apply the operation on pile 0. The resulting piles are [2,3,3,4].
// The total number of stones in [2,3,3,4] is 12.

/**
 * @param {number[]} piles
 * @param {number} k
 * @return {number}
 */
var minStoneSum = function(piles, k) {
    // initalize a max heap
    const priorityQueue = new MaxHeap();
    // add all the piles to the max heap
    for(const pile of piles){
        priorityQueue.insert(pile);
    }
    // loop while k > 0 and decrement k in each loop
    while(k-- > 0){
        const biggest = priorityQueue.delete();
        // grab the largest pile
        // remove it from the heap
        priorityQueue.insert(Math.ceil(biggest / 2));
        // add pilesize / 2, rounded up to the heap
    }
    return priorityQueue.data.reduce((acc, c) => acc + c, 0)
    // loop through the heap data and return the total remaining stones
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
        const isParentSmaller = val > parentVal;
        if(isParentSmaller){
            this.data[i] = parentVal;
            this.data[parentI] = val;
            this.#heapifyUp(parentI);
        }
        return;
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
    #leftChild(i){return i * 2 + 1;}
    #rightChild(i){return i * 2 + 2;}
    #parent(i){return Math.floor((i - 1) / 2);}
}