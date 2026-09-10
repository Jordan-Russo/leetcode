// url: https://leetcode.com/problems/take-gifts-from-the-richest-pile/description/
// You are given an integer array gifts denoting the number of gifts in various piles. Every second, you do the following:

//     Choose the pile with the maximum number of gifts.
//     If there is more than one pile with the maximum number of gifts, choose any.
//     Leave behind the floor of the square root of the number of gifts in the pile. Take the rest of the gifts.

// Return the number of gifts remaining after k seconds.

 

// Example 1:

// Input: gifts = [25,64,9,4,100], k = 4
// Output: 29
// Explanation: 
// The gifts are taken in the following way:
// - In the first second, the last pile is chosen and 10 gifts are left behind.
// - Then the second pile is chosen and 8 gifts are left behind.
// - After that the first pile is chosen and 5 gifts are left behind.
// - Finally, the last pile is chosen again and 3 gifts are left behind.
// The final remaining gifts are [5,8,9,4,3], so the total number of gifts remaining is 29.

// Example 2:

// Input: gifts = [1,1,1,1], k = 4
// Output: 4
// Explanation: 
// In this case, regardless which pile you choose, you have to leave behind 1 gift in each pile. 
// That is, you can't take any pile with you. 
// So, the total gifts remaining are 4.

/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */
var pickGifts = function(gifts, k) {
    // initialize max heap
    const priorityQueue = new MaxHeap();

    for(const gift of gifts){
        priorityQueue.insert(gift);
    }
    // loop k times
    for(let i = 0; i < k; i++){
        // grab the largest value (gift pile) from the max heap
        const removedPile = priorityQueue.delete();
        // remove it from the queue
        // keep the floor of the sqrt of the pile value
        const remainingPile = Math.floor(Math.sqrt(removedPile));
        // reinsert it into the queue
        priorityQueue.insert(remainingPile);
    }
    // sum the remaining gifts
    // return the count of remaining gifts
    const remainingGifts = priorityQueue.data.reduce((acc, c) => acc + c, 0);
    return remainingGifts;
};

class MaxHeap{
    constructor(){
        this.data = [];
    }
    delete(){
        if(this.data.length === 0){return;}
        const removed = this.data[0];
        this.data[0] = this.data[this.data.length - 1];
        this.data.pop();
        this.#heapifyDown(0);
        return removed;
    }
    insert(val){
        this.data.push(val);
        this.#heapifyUp(this.data.length - 1);
        return;
    }
    #heapifyDown(i){
        if(i >= this.data.length - 1){return}
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
    #parent(i){return Math.floor((i - 1) / 2)}
    #leftChild(i){return i * 2 + 1;}
    #rightChild(i){return i * 2 + 2;}
}