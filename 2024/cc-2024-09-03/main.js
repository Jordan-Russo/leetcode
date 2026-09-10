// url: https://leetcode.com/problems/last-stone-weight/
// You are given an array of integers stones where stones[i] is the weight of the ith stone.

// We are playing a game with the stones. On each turn, we choose the heaviest two stones and smash them together. Suppose the heaviest two stones have weights x and y with x <= y. The result of this smash is:

//     If x == y, both stones are destroyed, and
//     If x != y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.

// At the end of the game, there is at most one stone left.

// Return the weight of the last remaining stone. If there are no stones left, return 0.

 

// Example 1:

// Input: stones = [2,7,4,1,8,1]
// Output: 1
// Explanation: 
// We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
// we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
// we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
// we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of the last stone.

// Example 2:

// Input: stones = [1]
// Output: 1

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    const maxHeap = new MaxHeap();
    for(const stone of stones){
        maxHeap.insert(stone);
    }
    while(maxHeap.data.length > 1){
        const heavyStoneY = maxHeap.delete();
        const heavyStoneX = maxHeap.delete();
        if(heavyStoneY !== heavyStoneX){
            maxHeap.insert(heavyStoneY - heavyStoneX);
        }
    }
    return maxHeap.data[0] || 0;
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
        const removed = this.data[0]
        if(this.data.length === 1){
            this.data = [];
            return removed;
        }
        this.data[0] = this.data[this.data.length - 1];
        this.data.pop();
        this.#heapifyDown(0);
        return removed;
    }
    #leftChild(idx){
        return idx * 2 + 1;
    }
    #rightChild(idx){
        return idx * 2 + 2;
    }
    #parent(idx){
        return Math.floor((idx - 1) / 2);
    }
    #heapifyDown(idx){
        if(idx >= this.data.length){return;}
        const val = this.data[idx]
        const leftChildIdx = this.#leftChild(idx);
        const rightChildIdx = this.#rightChild(idx);
        if(leftChildIdx >= this.data.length){return;}
        const largestChildIdx = this.data[rightChildIdx] > this.data[leftChildIdx] ? rightChildIdx : leftChildIdx;
        const largestChildVal = this.data[largestChildIdx];
        const isParentSmaller = val < largestChildVal;
        if(isParentSmaller){
            this.data[idx] = largestChildVal;
            this.data[largestChildIdx] = val;
            this.#heapifyDown(largestChildIdx);
        }
    }
    #heapifyUp(idx){
        if(idx === 0){return;}
        const val = this.data[idx];
        const parentIdx = this.#parent(idx);
        const parentVal = this.data[parentIdx];
        const isSmallerParent = parentVal < val;
        if(isSmallerParent){
            this.data[idx] = parentVal;
            this.data[parentIdx] = val;
            this.#heapifyUp(parentIdx);
        }
    }
}