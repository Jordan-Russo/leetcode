// url: https://leetcode.com/problems/kth-largest-element-in-a-stream/description/

// You are part of a university admissions office and need to keep track of the kth highest test score from applicants in real-time. This helps to determine cut-off marks for interviews and admissions dynamically as new applicants submit their scores.

// You are tasked to implement a class which, for a given integer k, maintains a stream of test scores and continuously returns the kth highest test score after a new score has been submitted. More specifically, we are looking for the kth highest score in the sorted list of all scores.

// Implement the KthLargest class:

//     KthLargest(int k, int[] nums) Initializes the object with the integer k and the stream of test scores nums.
//     int add(int val) Adds a new test score val to the stream and returns the element representing the kth largest element in the pool of test scores so far.

 

// Example 1:

// Input:
// ["KthLargest", "add", "add", "add", "add", "add"]
// [[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]]

// Output: [null, 4, 5, 5, 8, 8]

// Explanation:

// KthLargest kthLargest = new KthLargest(3, [4, 5, 8, 2]);
// kthLargest.add(3); // return 4
// kthLargest.add(5); // return 5
// kthLargest.add(10); // return 5
// kthLargest.add(9); // return 8
// kthLargest.add(4); // return 8

// Example 2:

// Input:
// ["KthLargest", "add", "add", "add", "add"]
// [[4, [7, 7, 7, 7, 8, 3]], [2], [10], [9], [9]]

// Output: [null, 7, 7, 7, 8]

// Explanation:
// KthLargest kthLargest = new KthLargest(4, [7, 7, 7, 7, 8, 3]);
// kthLargest.add(2); // return 7
// kthLargest.add(10); // return 7
// kthLargest.add(9); // return 7
// kthLargest.add(9); // return 8

/**
 * @param {number} k
 * @param {number[]} nums
 */

// create a max heap
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
        // swap first and last value
        if(this.data.length === 0){return;}
        const removed = this.data[0];
        if(this.data.length === 1){
            this.data = [];
            return removed;
        }
        this.data[0] = this.data[this.data.length - 1];
        this.data.pop();
        this.#heapifyDown(0);
        return removed
    }
    #heapifyUp(idx){
        if(idx === 0){
            return;
        }

        const parentIdx = this.#parent(idx)
        const parentVal = this.data[parentIdx];
        const childVal = this.data[idx];
        const isParentLarger = parentVal > childVal;
        if(isParentLarger){
            this.data[parentIdx] = childVal;
            this.data[idx] = parentVal;
            this.#heapifyUp(parentIdx);
        }
    }
    #heapifyDown(idx){
        if(idx >= this.data.length){return;}
        const parentVal = this.data[idx]
        const leftChildIdx = this.#leftChild(idx);
        const rightChildIdx = this.#rightChild(idx);
        if(leftChildIdx in this.data === false){return;}
        const smallestChildIdx = this.data[rightChildIdx] < this.data[leftChildIdx] ? rightChildIdx : leftChildIdx;
        const smallestChildVal = this.data[smallestChildIdx];
        const isChildSmaller = smallestChildVal < parentVal;
        if(isChildSmaller){
            this.data[idx] = smallestChildVal;
            this.data[smallestChildIdx] = parentVal;
            this.#heapifyDown(smallestChildIdx);
        }
    }
    #parent(idx){
        return Math.floor((idx - 1) / 2);
    }
    #leftChild(idx){
        return idx * 2 + 1;
    }
    #rightChild(idx){
        return idx * 2 + 2;
    }
}

class KthLargest{
    constructor(k, nums){
        this.minHeap = new MinHeap();
        this.length = 0;
        this.k = k;
        // add the values to the heap
        for(const num of nums){
            this.minHeap.insert(num);
            this.length++;
        }
    
        while(this.length > this.k){
            this.minHeap.delete();
            this.length--;
        }
    }
    // delete values from the heap until k === 1
    add(val){
        this.minHeap.insert(val);
        this.length++;
        if(this.length > this.k){
            this.minHeap.delete();
        }
        return this.minHeap.data[0];
    }
}