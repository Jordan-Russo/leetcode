// url: https://leetcode.com/problems/delete-greatest-value-in-each-row/description/
// You are given an m x n matrix grid consisting of positive integers.

// Perform the following operation until grid becomes empty:

//     Delete the element with the greatest value from each row. If multiple such elements exist, delete any of them.
//     Add the maximum of deleted elements to the answer.

// Note that the number of columns decreases by one after each operation.

// Return the answer after performing the operations described above.

 

// Example 1:

// Input: grid = [[1,2,4],[3,3,1]]
// Output: 8
// Explanation: The diagram above shows the removed values in each step.
// - In the first operation, we remove 4 from the first row and 3 from the second row (notice that, there are two cells with value 3 and we can remove any of them). We add 4 to the answer.
// - In the second operation, we remove 2 from the first row and 3 from the second row. We add 3 to the answer.
// - In the third operation, we remove 1 from the first row and 1 from the second row. We add 1 to the answer.
// The final answer = 4 + 3 + 1 = 8.

// Example 2:

// Input: grid = [[10]]
// Output: 10
// Explanation: The diagram above shows the removed values in each step.
// - In the first operation, we remove 10 from the first row. We add 10 to the answer.
// The final answer = 10.

/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function(grid) {
    // keep a sum initialized at 0
    let sum = 0
    // make a max heap for each row (an array of maxHeaps)
    const heaps = []
    for(const row of grid){
        heaps.push(new MaxHeap())
        const latestHeap = heaps[heaps.length - 1];
        for(const val of row){
            latestHeap.insert(val);
        }
    }
    // loop from 0 < column.length
    let max;
    for(const column of grid[0]){
        max = -Infinity;
        // keep a variable which is the max deleted element from the max heaps
        for(let i = 0; i < grid.length; i++){
            const removed = heaps[i].delete();
            max = Math.max(max, removed);
        }
        // loop through every row for each column
        // add max value from all the removed rows to sum
        sum += max;
    }
    // return sum
    return sum;
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