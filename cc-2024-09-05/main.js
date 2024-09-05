// url: https://leetcode.com/problems/k-closest-points-to-origin/
// Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an integer k, return the k closest points to the origin (0, 0).

// The distance between two points on the X-Y plane is the Euclidean distance (i.e., √(x1 - x2)2 + (y1 - y2)2).

// You may return the answer in any order. The answer is guaranteed to be unique (except for the order that it is in).

 

// Example 1:

// Input: points = [[1,3],[-2,2]], k = 1
// Output: [[-2,2]]
// Explanation:
// The distance between (1, 3) and the origin is sqrt(10).
// The distance between (-2, 2) and the origin is sqrt(8).
// Since sqrt(8) < sqrt(10), (-2, 2) is closer to the origin.
// We only want the closest k = 1 points from the origin, so the answer is just [[-2,2]].

// Example 2:

// Input: points = [[3,3],[5,-1],[-2,4]], k = 2
// Output: [[3,3],[-2,4]]
// Explanation: The answer [[-2,4],[3,3]] would also be accepted.

/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    const maxHeap = new MaxHeap();
    // insertions and deletions
    for(const coordinates of points){
        maxHeap.insert(coordinates);
        if(maxHeap.data.length > k){
            maxHeap.delete()
        }
    }
    return maxHeap.data;
};

function distanceFromOrigin(points){
    if(!points){return;}
    const [x, y] = points;
    return Math.sqrt(x * x + y * y)
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
        const removed = this.data[0]
        if(this.data.length === 1){
            this.data = [];
            return removed;
        }
        this.data[0] = this.data[this.data.length - 1];
        this.data.pop();
        this.#heapifyDown(0)
        return removed;
    }
    #heapifyDown(i){
        if(i >= this.data.length){return;}
        const val = distanceFromOrigin(this.data[i]);
        const leftChildI = this.#leftChild(i);
        if(leftChildI in this.data === false){return;}
        const rightChildI = this.#rightChild(i);
        const largestChildI = distanceFromOrigin(this.data[rightChildI]) > distanceFromOrigin(this.data[leftChildI]) ? rightChildI : leftChildI;
        const largestChildVal = distanceFromOrigin(this.data[largestChildI]);
        const isChildLarger = largestChildVal > val;
        if(isChildLarger){
            const temp = this.data[i];
            this.data[i] = this.data[largestChildI];
            this.data[largestChildI] = temp;
            this.#heapifyDown(largestChildI);
        }
    }
    #heapifyUp(i){
        if(i === 0){return;}
        const val = distanceFromOrigin(this.data[i]);
        const parentI = this.#parent(i);
        const parentVal = distanceFromOrigin(this.data[parentI]);
        const isParentSmaller = parentVal < val;
        if(isParentSmaller){
            const temp = this.data[i];
            this.data[i] = this.data[parentI];
            this.data[parentI] = temp;
            this.#heapifyUp(parentI)
        }
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
// make a min heap

// as you make it keep it k sized
// return all the elements in there