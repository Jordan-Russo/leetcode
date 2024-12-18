// url: https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/
/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
// given a square grid matrix (where row and columns are of length n)
  // each row and column is sorted by ascending order
// and k, 1-index number
// return the kth smallest element

function kthSmallest(matrix, k){
  // create a minHeap
  const priorityQueue = new MinHeap()
  // insert the value, row, and col of all elements from the first column
  for(let row = 0; row < matrix.length; row++){
    priorityQueue.insert([matrix[row][0], row, 0])
  }
  // remove an element from the minHeap k times
  while(k > 1){
    const [_, row, col] = priorityQueue.remove()
    if(col < matrix.length - 1){
      priorityQueue.insert([matrix[row][col + 1], row, col + 1])
    }
    k--
  }
  const [kth] = priorityQueue.peak()
  return kth
  // if k === 1 return the top element
  // else
    // delete then each time, if there is a next element within the same row insert it
}

class MinHeap{
  constructor(){
    this.data = []
  }
  // insert
  insert(val){
    this.data.push(val)
    this.#heapifyUp(this.data.length - 1)
  }
  // delete
  remove(){
    const removed = this.data[0]
    this.data[0] = this.data[this.data.length - 1]
    this.data.pop()
    this.#heapifyDown(0)
    return removed
  }
  // peak
  peak(){return this.data[0]}
  // heapifyUp
  #heapifyUp(i){
    // if index === 0, there is no parent
    if(i === 0){return}
    // grab current val
    const curr = this.data[i]
    // find parent index
    const parentI = this.#parent(i)
    const parent = this.data[parentI]
    // compare parent value first element with curr value first element
    if(curr[0] < parent[0]){
      this.data[i] = this.data[parentI]
      this.data[parentI] = curr
      this.#heapifyUp(parentI)
    // swap and recursively call if curr value smaller than parent value
    }
  }
  // heapifyDown
  #heapifyDown(i){
    // if element is the last return
    if(i >= this.data.length - 1){return}
    const curr = this.data[i]
    const leftI = this.#leftChild(i)
    // find left element if it exists
    if(leftI > this.data.length - 1){return}
    // if not return 
    const rightI = this.#rightChild(i)
    const smallestChildI = this.data[rightI]?.[0] < this.data[leftI][0] ? rightI : leftI
    // find smallest child if it exists, if there is no right use left
    const smallestChild = this.data[smallestChildI]
    if(curr[0] > smallestChild[0]){
      this.data[i] = this.data[smallestChildI]
      this.data[smallestChildI] = curr
      this.#heapifyDown(smallestChildI)
    }
    // if smallest child is smaller than curr swap and recursive call
  }
  // leftchild / rightchild
  #leftChild(i){return i * 2 + 1}
  #rightChild(i){return i * 2 + 2}
  // parent
  #parent(i){return Math.floor((i - 1) / 2)}
}

// console.log(kthSmallest([[1,5,9],[10,11,13],[12,13,15]], 8), 13)
// console.log(kthSmallest([[-5]], 1), -5)