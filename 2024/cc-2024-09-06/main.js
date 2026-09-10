// url: https://leetcode.com/problems/task-scheduler/submissions/1376798608/
// You are given an array of CPU tasks, each represented by letters A to Z, and a cooling time, n. Each cycle or interval allows the completion of one task. Tasks can be completed in any order, but there's a constraint: identical tasks must be separated by at least n intervals due to cooling time.

// ​Return the minimum number of intervals required to complete all tasks.

 

// Example 1:

// Input: tasks = ["A","A","A","B","B","B"], n = 2

// Output: 8

// Explanation: A possible sequence is: A -> B -> idle -> A -> B -> idle -> A -> B.

// After completing task A, you must wait two cycles before doing A again. The same applies to task B. In the 3rd interval, neither A nor B can be done, so you idle. By the 4th cycle, you can do A again as 2 intervals have passed.

// Example 2:

// Input: tasks = ["A","C","A","B","D","B"], n = 1

// Output: 6

// Explanation: A possible sequence is: A -> B -> C -> D -> A -> B.

// With a cooling interval of 1, you can repeat a task after just one other task.

// Example 3:

// Input: tasks = ["A","A","A", "B","B","B"], n = 3

// Output: 10

// Explanation: A possible sequence is: A -> B -> idle -> idle -> A -> B -> idle -> idle -> A -> B.

// There are only two types of tasks, A and B, which need to be separated by 3 intervals. This leads to idling twice between repetitions of these tasks.

/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    // create a frequency Cache
    const cache = {}
    for(const task of tasks){
        cache[task] ??= 0;
        cache[task]++;
    }
    const taskCounts = Object.values(cache);
    const priorityQueue = new MaxHeap();
    const waitingQueue = new LinkedList();
    // move all tasks to priority queue
    for(const taskCount of taskCounts){
        priorityQueue.insert(taskCount);
    }
    // initialize time at zero
    let time = 0;
    // keep going incrementing time and moving tasks until both queues are empty
    while(priorityQueue.data.length > 0 || waitingQueue.head){
        // increment time
        time++;
        // first remove something from priority queue
        const doneTask = priorityQueue.delete();
        // if something was removed decrement it and if there's still tasks to be done push it to the waiting queue
        if(doneTask > 1){
            waitingQueue.enqueue([doneTask - 1, time + n])
        }

        // look at the head in the waiting queue
        // if something is there and can be added back into the priority queue do that
        const rescheduler = waitingQueue.head
        if(rescheduler){
            if(time >= rescheduler.val[1]){
                priorityQueue.insert(waitingQueue.dequeue().val[0])
            }
        }
    }
    // return the total time
    return time;
};

class LinkedList{
    constructor(){
        this.head = this.tail = null;
    }
    enqueue(val){
        const newNode = this.#createNode(val);
        if(!this.head){
            this.head = this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        return;
    }
    dequeue(){
        if(!this.head){return;}
        const removed = this.head;
        if(this.head === this.tail){
            this.head = this.tail = null;
            return removed;
        }
        this.head = this.head.next;
        return removed;
    }
    #createNode(val){
        return {
            val,
            next: null
        }
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
        if(this.data.length === 0){
            return;
        }
        const removed = this.data[0];
        if(this.data.length === 1){
            this.data = [];
            return removed;
        }
        this.data[0] = this.data[this.data.length - 1];
        this.data.pop();
        this.#heapifyDown(0);
        return removed;
    }
    #leftChild(i){
        return i * 2 + 1;
    }
    #rightChild(i){
        return i * 2 + 2;
    }
    #parent(i){
        return Math.floor((i - 1) / 2);
    }
    #heapifyUp(i){
        if(i === 0){
            return;
        }
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
    #heapifyDown(i){
        if(i >= this.data.length){return;}
        const val = this.data[i];
        const leftChildI = this.#leftChild(i);
        if(leftChildI in this.data === false){return;}
        const rightChildI = this.#rightChild(i);
        const maxChildI = this.data[rightChildI] > this.data[leftChildI] ? rightChildI : leftChildI;
        const maxChildVal = this.data[maxChildI];
        const isParentSmaller = val < maxChildVal;
        if(isParentSmaller){
            this.data[i] = maxChildVal;
            this.data[maxChildI] = val;
            this.#heapifyDown(maxChildI);
        }
        return;
    }
}