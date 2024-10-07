// url: https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/description/
// You are given an m x n binary matrix mat of 1's (representing soldiers) and 0's (representing civilians). The soldiers are positioned in front of the civilians. That is, all the 1's will appear to the left of all the 0's in each row.

// A row i is weaker than a row j if one of the following is true:

//     The number of soldiers in row i is less than the number of soldiers in row j.
//     Both rows have the same number of soldiers and i < j.

// Return the indices of the k weakest rows in the matrix ordered from weakest to strongest.

 

// Example 1:

// Input: mat = 
// [[1,1,0,0,0],
//  [1,1,1,1,0],
//  [1,0,0,0,0],
//  [1,1,0,0,0],
//  [1,1,1,1,1]], 
// k = 3
// Output: [2,0,3]
// Explanation: 
// The number of soldiers in each row is: 
// - Row 0: 2 
// - Row 1: 4 
// - Row 2: 1 
// - Row 3: 2 
// - Row 4: 5 
// The rows ordered from weakest to strongest are [2,0,3,1,4].

// Example 2:

// Input: mat = 
// [[1,0,0,0],
//  [1,1,1,1],
//  [1,0,0,0],
//  [1,0,0,0]], 
// k = 2
// Output: [0,2]
// Explanation: 
// The number of soldiers in each row is: 
// - Row 0: 1 
// - Row 1: 4 
// - Row 2: 1 
// - Row 3: 1 
// The rows ordered from weakest to strongest are [0,2,3,1].

/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    const priorityQueue = new MinHeap();
    for(let i = 0; i < mat.length; i++){
        const row = mat[i];
        const soldierCount = indexOfSoldier(row) + 1;
        priorityQueue.insert([soldierCount, i])
    }
    // helper function that uses binary search on an array to find the first index of 1
    // if the helper function returns -1, then we know there are 0 soldiers
    // push the soldier count as well as row index into a minHeap
    // min heap should be implemented to first compare soldier value then compare ascending index
    const weakest = [];
    for(let i = 0; i < k; i++){
        const removed = priorityQueue.delete();
        const [_, index] = removed;
        weakest.push(index)
    }
    // push k top indices in the minHeap and return the indices in the correct order.
    return weakest;
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
        const smallestChildI = (this.data[rightChildI]?.[0] < this.data[leftChildI][0] || this.data[rightChildI]?.[0] === this.data[leftChildI][0] && this.data[rightChildI]?.[1] < this.data[leftChildI][1]) ? rightChildI : leftChildI;
        const smallestChildVal = this.data[smallestChildI];
        const isParentLarger = val[0] > smallestChildVal[0] || val[0] === smallestChildVal[0] && val[1] > smallestChildVal[1];
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
        const isParentLarger = val[0] < parentVal[0] || val[0] === parentVal[0] && parentVal[1] > val[1];
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

function indexOfSoldier(arr){
    let low = 0;
    let high = arr.length;
    while(low < high){
        const middle = Math.floor((low + high) / 2)
        const hasSoldier = arr[middle] === 1;
        const nextHasCivilian = arr[middle + 1] === 0;
        // we want the value to be 1, but the value of the next index to be 0.
        if(hasSoldier && nextHasCivilian){return middle}
        else if(hasSoldier){
            low = middle + 1;
        }else{
            high = middle;
        }
    }
    if(low === arr.length){
        return arr.length - 1;
    }
    if(high === 0){
        return -1
    }
}