// url: https://leetcode.com/problems/find-median-from-data-stream/description/
// The median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value, and the median is the mean of the two middle values.

//     For example, for arr = [2,3,4], the median is 3.
//     For example, for arr = [2,3], the median is (2 + 3) / 2 = 2.5.

// Implement the MedianFinder class:

//     MedianFinder() initializes the MedianFinder object.
//     void addNum(int num) adds the integer num from the data stream to the data structure.
//     double findMedian() returns the median of all elements so far. Answers within 10-5 of the actual answer will be accepted.

 

// Example 1:

// Input
// ["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"]
// [[], [1], [2], [], [3], []]
// Output
// [null, null, null, 1.5, null, 2.0]

// Explanation
// MedianFinder medianFinder = new MedianFinder();
// medianFinder.addNum(1);    // arr = [1]
// medianFinder.addNum(2);    // arr = [1, 2]
// medianFinder.findMedian(); // return 1.5 (i.e., (1 + 2) / 2)
// medianFinder.addNum(3);    // arr[1, 2, 3]
// medianFinder.findMedian(); // return 2.0

class MedianFinder{
    constructor(){
        this.minHeap = new MinHeap();
        this.maxHeap = new MaxHeap();
    }
    addNum(num){
        // add numbers to maxHeap
        this.maxHeap.insert(num);
        // compare the length of maxHeap and minHeap
        const isUnbalanced = this.maxHeap.data.length - this.minHeap.data.length > 1;
            // move top element of maxHeap to minHeap if the length difference > 1
        if(isUnbalanced){
            const removed = this.maxHeap.delete();
            this.minHeap.insert(removed);
        }
        const largestSmall = this.maxHeap.data[0];
        const smallestLarge = this.minHeap.data[0];
        // compare the top element of maxHeap to top element of minHeap
        if(largestSmall > smallestLarge){
            // if maxHeapVal > minHeapVal
            this.minHeap.delete();
            this.maxHeap.delete();
            this.minHeap.insert(largestSmall);
            this.maxHeap.insert(smallestLarge);
            // delete and insert both values with each other
        }
        return;
    }
    findMedian(){
        // get length of min heap
        const minHeapLength = this.minHeap.data.length;
        // get length of max heap
        const maxHeapLength = this.maxHeap.data.length;
        // if lengths are equal
        const largestSmallValue = this.maxHeap.data[0];
        const smallestLargeValue = this.minHeap.data[0];
        if(minHeapLength === maxHeapLength){
            const avg = (largestSmallValue + smallestLargeValue) / 2;
            return avg;
        }
        // return the first element of the longer one
        return minHeapLength > maxHeapLength ? smallestLargeValue : largestSmallValue;
    }
}

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

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
    #heapifyDown(i){
        if(i >= this.data.length){return;}
        const val = this.data[i];
        const leftChildI = this.#leftChild(i);
        if(leftChildI in this.data === false){return;}
        const rightChildI = this.#rightChild(i);
        const smallestChildI = this.data[rightChildI] < this.data[leftChildI] ? rightChildI : leftChildI;
        const smallestChildVal = this.data[smallestChildI];
        const isParentLarger = val > smallestChildVal;
        if(isParentLarger){
            this.data[i] = smallestChildVal;
            this.data[smallestChildI] = val;
            this.#heapifyDown(smallestChildI);
        }
        return;
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
    #heapifyDown(i){
        if(i >= this.data.length){return;}
        const val = this.data[i];
        const leftChildI = this.#leftChild(i);
        if(leftChildI in this.data === false){return;}
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