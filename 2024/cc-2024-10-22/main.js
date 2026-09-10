// url: https://leetcode.com/problems/seat-reservation-manager/
// Design a system that manages the reservation state of n seats that are numbered from 1 to n.

// Implement the SeatManager class:

//     SeatManager(int n) Initializes a SeatManager object that will manage n seats numbered from 1 to n. All seats are initially available.
//     int reserve() Fetches the smallest-numbered unreserved seat, reserves it, and returns its number.
//     void unreserve(int seatNumber) Unreserves the seat with the given seatNumber.

 

// Example 1:

// Input
// ["SeatManager", "reserve", "reserve", "unreserve", "reserve", "reserve", "reserve", "reserve", "unreserve"]
// [[5], [], [], [2], [], [], [], [], [5]]
// Output
// [null, 1, 2, null, 2, 3, 4, 5, null]

// Explanation
// SeatManager seatManager = new SeatManager(5); // Initializes a SeatManager with 5 seats.
// seatManager.reserve();    // All seats are available, so return the lowest numbered seat, which is 1.
// seatManager.reserve();    // The available seats are [2,3,4,5], so return the lowest of them, which is 2.
// seatManager.unreserve(2); // Unreserve seat 2, so now the available seats are [2,3,4,5].
// seatManager.reserve();    // The available seats are [2,3,4,5], so return the lowest of them, which is 2.
// seatManager.reserve();    // The available seats are [3,4,5], so return the lowest of them, which is 3.
// seatManager.reserve();    // The available seats are [4,5], so return the lowest of them, which is 4.
// seatManager.reserve();    // The only available seat is seat 5, so return 5.
// seatManager.unreserve(5); // Unreserve seat 5, so now the available seats are [5].

// make a system that reserves the state of n seats (from 1 to n)
// we can initialize it with a number of seats
// we can reserve a seat, which will return the smallest-numbered reserved seat 
// we can unreserve a seat with a given seat number

// start with a minHeap with the value 1
// each time we reserve a seat and minheap is empty add (max + 1) to minheap
    // increment max
    class SeatManager{
        constructor(){
            // set for reserved seats
            this.reservedSeats = new Set();
            // minHeap for unreserved seats
            this.priorityQueue = new MinHeap();
            // counter for highestGivenSeat
            this.highestGivenSeat = 1;
            this.priorityQueue.insert(1);
        }
        reserve(){
            const reserved = this.priorityQueue.delete();
            if(this.priorityQueue.data.length === 0){
                this.highestGivenSeat++;
                this.priorityQueue.insert(this.highestGivenSeat);
            }
            this.reservedSeats.add(reserved);
            return reserved;
        }
        unreserve(seatNumber){
            this.reservedSeats.delete(seatNumber);
            this.priorityQueue.insert(seatNumber);
        }
    }
    
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
            const isParentLarger = parentVal > val;
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
            const smallestChildI = this.data[rightChildI] < this.data[leftChildI] ? rightChildI : leftChildI;
            const smallestChildVal = this.data[smallestChildI];
            const isParentLarger = val > smallestChildVal;
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