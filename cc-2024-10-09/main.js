// url: https://leetcode.com/problems/reduce-array-size-to-the-half/
// You are given an integer array arr. You can choose a set of integers and remove all the occurrences of these integers in the array.

// Return the minimum size of the set so that at least half of the integers of the array are removed.

 

// Example 1:

// Input: arr = [3,3,3,3,5,5,5,2,2,7]
// Output: 2
// Explanation: Choosing {3,7} will make the new array [5,5,5,2,2] which has size 5 (i.e equal to half of the size of the old array).
// Possible sets of size 2 are {3,5},{3,2},{5,2}.
// Choosing set {2,7} is not possible as it will make the new array [3,3,3,3,5,5,5] which has a size greater than half of the size of the old array.

// Example 2:

// Input: arr = [7,7,7,7,7,7]
// Output: 1
// Explanation: The only possible set you can choose is {7}. This will make the new array empty.

/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function(arr) {
    // make a frequency cache
    const cache = {};
    for(const num of arr){
        cache[num] ??= 0;
        cache[num]++;
    }
    // add the frequencies into a maxHeap
    const priorityQueue = new MaxHeap();
    for(const num in cache){
        const frequency = cache[num];
        priorityQueue.insert(frequency);
    }
    // make a count for the number of elements removed from the maxheap
    let removedNodes = 0;
    // make a count for the total frequency of elements removed from the maxHeap
    let removedFrequencySum = 0;
    // keep removing elements and count each time you remove and add the value to the sum frequency until the total removed count is >= arr.length / 2
    const half = arr.length / 2;
    while(removedFrequencySum < half){
        const removed = priorityQueue.delete();
        removedFrequencySum += removed;
        removedNodes++;
    }
    // return the number of elements had to be removed from the maxHeap
    return removedNodes;
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
        if(i === 0){return ;}
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