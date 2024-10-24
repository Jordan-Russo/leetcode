// url: https://leetcode.com/problems/find-the-kth-smallest-sum-of-a-matrix-with-sorted-rows/
// You are given an m x n matrix mat that has its rows sorted in non-decreasing order and an integer k.

// You are allowed to choose exactly one element from each row to form an array.

// Return the kth smallest array sum among all possible arrays.

 

// Example 1:

// Input: mat = [[1,3,11],[2,4,6]], k = 5
// Output: 7
// Explanation: Choosing one element from each row, the first k smallest sum are:
// [1,2], [1,4], [3,2], [3,4], [1,6]. Where the 5th sum is 7.

// Example 2:

// Input: mat = [[1,3,11],[2,4,6]], k = 9
// Output: 17

// Example 3:

// Input: mat = [[1,10,10],[1,4,5],[2,3,6]], k = 7
// Output: 9
// Explanation: Choosing one element from each row, the first k smallest sum are:
// [1,1,2], [1,1,3], [1,4,2], [1,4,3], [1,1,6], [1,5,2], [1,5,3]. Where the 7th sum is 9.  

/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number}
 */

// Given a nested array of m x n size where each subarray is sorted in increasing order
// Given k an integer
// return the sum of the kth smallest array

// min heap to compare the sums
// set to store the index combinations

// set to hold the indicies I've already marked
// I have heap to store sums I've added in

var kthSmallest = function(mat, k) {
    const seen = new Set();
    let kthSmallestSum = mat.reduce((acc, c) => acc + c[0], 0);
    const start = [kthSmallestSum, ...new Array(mat.length).fill(0)];
    seen.add(String(start));
    const priorityQueue = new MinHeap();
    priorityQueue.insert(start);
    while(k > 0){
        let [sum, ...indexes] = priorityQueue.delete();
        kthSmallestSum = sum;
        k--;
        for(let row = 0; row < indexes.length; row++){
            if(indexes[row] === mat[0].length - 1){continue;}
            // checks that the index at the row is small enough
            const newIndexes = [...indexes];
            const newSum = sum - mat[row][indexes[row]] + mat[row][indexes[row] + 1]
            newIndexes[row]++;
            const key = `${newSum},${newIndexes}`
            if(seen.has(key)){continue;}
            else{seen.add(key)}
            // another check as to whether we already have it
            priorityQueue.insert([newSum, ...newIndexes])
        }
    }
    return kthSmallestSum;
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
        const isParentLarger = parentVal[0] > val[0];
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
        const smallestChildI = this.data[rightChildI]?.[0] < this.data[leftChildI]?.[0] ? rightChildI : leftChildI;
        const smallestChildVal = this.data[smallestChildI];
        const isParentLarger = val[0] > smallestChildVal?.[0];
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