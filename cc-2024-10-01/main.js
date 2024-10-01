// url: https://leetcode.com/problems/smallest-number-in-infinite-set/submissions/1383817290/
// You have a set which contains all positive integers [1, 2, 3, 4, 5, ...].

// Implement the SmallestInfiniteSet class:

//     SmallestInfiniteSet() Initializes the SmallestInfiniteSet object to contain all positive integers.
//     int popSmallest() Removes and returns the smallest integer contained in the infinite set.
//     void addBack(int num) Adds a positive integer num back into the infinite set, if it is not already in the infinite set.

 

// Example 1:

// Input
// ["SmallestInfiniteSet", "addBack", "popSmallest", "popSmallest", "popSmallest", "addBack", "popSmallest", "popSmallest", "popSmallest"]
// [[], [2], [], [], [], [1], [], [], []]
// Output
// [null, null, 1, 2, 3, null, 1, 4, 5]

// Explanation
// SmallestInfiniteSet smallestInfiniteSet = new SmallestInfiniteSet();
// smallestInfiniteSet.addBack(2);    // 2 is already in the set, so no change is made.
// smallestInfiniteSet.popSmallest(); // return 1, since 1 is the smallest number, and remove it from the set.
// smallestInfiniteSet.popSmallest(); // return 2, and remove it from the set.
// smallestInfiniteSet.popSmallest(); // return 3, and remove it from the set.
// smallestInfiniteSet.addBack(1);    // 1 is added back to the set.
// smallestInfiniteSet.popSmallest(); // return 1, since 1 was added back to the set and
//                                    // is the smallest number, and remove it from the set.
// smallestInfiniteSet.popSmallest(); // return 4, and remove it from the set.
// smallestInfiniteSet.popSmallest(); // return 5, and remove it from the set.

// combining set and minHeap

class SmallestInfiniteSet{
    constructor(){
        this.smallest = 0;
        this.removed = new Set();
        this.priorityQueue = new MinHeap();
        this.priorityQueue.insert(1);
    }
    popSmallest(){
        let smallest;
        do{
            smallest = this.priorityQueue.delete();
        }while(this.removed.has(smallest))
        // grab top value of priorityQueue as removed
        this.removed.add(smallest)
        // add it to the set
        const nextNumber = smallest + 1;
        if(!this.removed.has(nextNumber)){
            this.priorityQueue.insert(nextNumber)
        }
        // if the next number wasn't removed you can add it to the priorityQueue
        return smallest;
    }
    addBack(num){
        if(this.removed.has(num)){
            this.removed.delete(num);
            this.priorityQueue.insert(num);
        }
        return;
    }
}

class MinHeap {
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
        const isParentGreater = parentVal > val;
        if(isParentGreater){
            this.data[i] = parentVal;
            this.data[parentI] = val;
            this.#heapifyUp(parentI);
        }
        return;
    }
    #parent(i){
        return Math.floor((i - 1) / 2)
    }
    #leftChild(i){
        return i * 2 + 1;
    }
    #rightChild(i){
        return i * 2 + 2;
    }
}
/** 
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */