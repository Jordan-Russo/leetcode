// url: https://leetcode.com/problems/the-skyline-problem/description/
/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
// Given an array of buildings in increasing order of left
// each subarray contains three integers
// left, coordinate of left edge
// right, coordinate of right edge
// height of the building

// return all the keypoints array of subarrays of x and y coordinates

// Example 1:

// Input: buildings = [[2,9,10],[3,7,15],[5,12,12],[15,20,10],[19,24,8]]
// Output: [[2,10],[3,15],[7,12],[12,0],[15,10],[20,8],[24,0]]
// Explanation:
// Figure A shows the buildings of the input.
// Figure B shows the skyline formed by those buildings. The red points in figure B represent the key points in the output list.

// Example 2:

// Input: buildings = [[0,2,3],[2,5,3]]
// Output: [[0,3],[5,0]]

var getSkyline = function(buildings) {
    // [start, end, height]
      const result = [];
      const priorityQueue = new MaxHeap();
      const nextEdgeQueue = new MinHeap();
      let height = 0;
      let pos = 0
      for(const [start, end] of buildings){
        nextEdgeQueue.insert(start);
        nextEdgeQueue.insert(end);
      }
      while(nextEdgeQueue.data.length > 0){
        const x = nextEdgeQueue.peak();
        while(x === buildings[pos]?.[0]){
            priorityQueue.insert(buildings[pos]);
            // insert into priorityQueue
            pos++;
        }
        while(priorityQueue.peak()?.[1] <= x){
            priorityQueue.delete();
        }
        // remove anything that ended in the priorityQueue starting from the top until it's fine
        const currHeight = priorityQueue.peak()?.[2] || 0;
        if(height !== currHeight){
            result.push([x, currHeight])
            height = currHeight;
        }
        // evaluate the top point, if undefined it's zero
        // if the top value changed, push the new point in result
    
        nextEdgeQueue.delete();
      }
      return result;    
    };
    
    class MaxHeap{
        constructor(){
            this.data = [];
        }
        peak(){
            return this.data[0];
        }
        delete(){
            this.data[0] = this.data[this.data.length - 1];
            this.data.pop();
            this.#heapifyDown(0);
            return;
        }
        insert(val){
            this.data.push(val);
            this.#heapifyUp(this.data.length - 1);
            return;
        }
        #heapifyDown(i){
            if(i >= this.data.length - 1){return;}
            const leftChildI = this.#leftChild(i);
            if(leftChildI > this.data.length - 1){return;}
            const rightChildI = this.#rightChild(i);
            const largestChildI = this.data[rightChildI]?.[2] > this.data[leftChildI][2] ? rightChildI : leftChildI;
            const largestChildVal = this.data[largestChildI];
            const val = this.data[i];
            const isParentSmaller = val[2] < largestChildVal[2];
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
            const isParentSmaller = val[2] > parentVal[2];
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
    
    class MinHeap{
        constructor(){
            this.data = [];
        }
        peak(){
            return this.data[0];
        }
        delete(){
            this.data[0] = this.data[this.data.length - 1];
            this.data.pop();
            this.#heapifyDown(0);
            return;
        }
        insert(val){
            this.data.push(val);
            this.#heapifyUp(this.data.length - 1);
            return;
        }
        #heapifyDown(i){
            if(i >= this.data.length - 1){return;}
            const leftChildI = this.#leftChild(i);
            if(leftChildI > this.data.length - 1){return;}
            const rightChildI = this.#rightChild(i);
            const smallestChildI = this.data[rightChildI] < this.data[leftChildI] ? rightChildI : leftChildI;
            const smallestChildVal = this.data[smallestChildI];
            const val = this.data[i];
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
            const isParentLarger = val < parentVal;
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