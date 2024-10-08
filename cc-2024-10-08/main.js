// url: https://leetcode.com/problems/maximum-score-from-removing-stones/description/
// You are playing a solitaire game with three piles of stones of sizes a​​​​​​, b,​​​​​​ and c​​​​​​ respectively. Each turn you choose two different non-empty piles, take one stone from each, and add 1 point to your score. The game stops when there are fewer than two non-empty piles (meaning there are no more available moves).

// Given three integers a​​​​​, b,​​​​​ and c​​​​​, return the maximum score you can get.

 

// Example 1:

// Input: a = 2, b = 4, c = 6
// Output: 6
// Explanation: The starting state is (2, 4, 6). One optimal set of moves is:
// - Take from 1st and 3rd piles, state is now (1, 4, 5)
// - Take from 1st and 3rd piles, state is now (0, 4, 4)
// - Take from 2nd and 3rd piles, state is now (0, 3, 3)
// - Take from 2nd and 3rd piles, state is now (0, 2, 2)
// - Take from 2nd and 3rd piles, state is now (0, 1, 1)
// - Take from 2nd and 3rd piles, state is now (0, 0, 0)
// There are fewer than two non-empty piles, so the game ends. Total: 6 points.

// Example 2:

// Input: a = 4, b = 4, c = 6
// Output: 7
// Explanation: The starting state is (4, 4, 6). One optimal set of moves is:
// - Take from 1st and 2nd piles, state is now (3, 3, 6)
// - Take from 1st and 3rd piles, state is now (2, 3, 5)
// - Take from 1st and 3rd piles, state is now (1, 3, 4)
// - Take from 1st and 3rd piles, state is now (0, 3, 3)
// - Take from 2nd and 3rd piles, state is now (0, 2, 2)
// - Take from 2nd and 3rd piles, state is now (0, 1, 1)
// - Take from 2nd and 3rd piles, state is now (0, 0, 0)
// There are fewer than two non-empty piles, so the game ends. Total: 7 points.

// Example 3:

// Input: a = 1, b = 8, c = 8
// Output: 8
// Explanation: One optimal set of moves is to take from the 2nd and 3rd piles for 8 turns until they are empty.
// After that, there are fewer than two non-empty piles, so the game ends.

/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var maximumScore = function(a, b, c) {
    let count = 0;
    const priorityQueue = new MaxHeap();
    priorityQueue.insert(a);
    priorityQueue.insert(b);
    priorityQueue.insert(c);
    while(true){
        const pile1 = priorityQueue.delete();
        const pile2 = priorityQueue.delete();
        if(!pile1 || !pile2){return count;}
        count++;
        priorityQueue.insert(pile1 - 1);
        priorityQueue.insert(pile2 - 1);
    }
    return count; 
};
// build a max heap
// store a,b,c in it
// grab two values from the max heap
// if any of them are 0 stop and return count
// otherwise increment count
// subtract one from both removed values
// insert modified values back into the max heap

class MaxHeap{
    constructor(){
        this.data = [];
    }
    insert(val){
        this.data.push(val);
        this.#heapifyUp(this.data.length - 1);
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
        if(i > leftChildI){return false;}
        const rightChildI = this.#rightChild(i);
        const largestChildI = this.data[rightChildI] > this.data[leftChildI] ? rightChildI : leftChildI;
        const largestChildVal = this.data[largestChildI];
        const isParentSmaller = val < largestChildVal;
        if(isParentSmaller){
            this.data[i] = largestChildVal;
            this.data[largestChildI] = val;
            this.#heapifyDown(largestChildI);
        }
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
    }
    #leftChild(i){return i * 2 + 1;}
    #rightChild(i){return i * 2 + 2;}
    #parent(i){return Math.floor((i - 1) / 2);}
}