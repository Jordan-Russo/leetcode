// url: https://leetcode.com/problems/find-score-of-an-array-after-marking-all-elements/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findScore = function(nums) {
  let score = 0
  let priorityQueue = new MinHeap()
  let seenIndexes = new Set()
  for(let i = 0; i < nums.length; i++){
      priorityQueue.insert([nums[i], i])
  }
  while(priorityQueue.data.length > 0){
      const [value, index] = priorityQueue.delete()
      // grab the val, index pair
          // remove from queue
      if(!seenIndexes.has(index)){
      // if it's not been seen 
          // add it to seen as well as i - 1 and i + 1
          // add the val to score
          score += value
          seenIndexes.add(index)
          seenIndexes.add(index + 1)
          seenIndexes.add(index - 1)
      }
  }
  return score
};

class MinHeap{
  constructor(){
      this.data = []
  }
  insert(val){
      this.data.push(val)
      this.#heapifyUp(this.data.length - 1)
  }
  delete(){
      if(this.data.length === 0){return}
      const value = this.data[0]
      this.data[0] = this.data[this.data.length - 1]
      this.data.pop()
      this.#heapifyDown(0)
      return value
  }
  #heapifyDown(i){
      if(i >= this.data.length - 1){return}
      const parent = this.data[i]
      if(this.#leftChild(i) > this.data.length - 1){return}
      const leftChild = this.data[this.#leftChild(i)]
      const rightChild = this.data[this.#rightChild(i)]
      const smallestChildIndex = (rightChild?.[0] < leftChild[0] || rightChild?.[0] === leftChild[0] && rightChild?.[1] < leftChild[1]) ? this.#rightChild(i) : this.#leftChild(i)
      const smallestChildVal = this.data[smallestChildIndex]
      const isChildSmaller = smallestChildVal[0] < parent[0] || smallestChildVal[0] === parent[0] && smallestChildVal[1] < parent[1]
      if(isChildSmaller){
          this.data[i] = smallestChildVal
          this.data[smallestChildIndex] = parent
          this.#heapifyDown(smallestChildIndex)
      }
  }
  #heapifyUp(i){
      if(i === 0){return}
      const child = this.data[i]
      const parent = this.data[this.#parent(i)]
      const isChildSmaller = child[0] < parent[0] || child[0] === parent[0] && child[1] < parent[1]
      if(isChildSmaller){
          this.data[i] = parent
          this.data[this.#parent(i)] = child
          this.#heapifyUp(this.#parent(i))
      }
      // compare curr node with parent node
      // do swap if neccesary
      // call function on parent index
  }
  #parent(i){
      return Math.trunc((i - 1) / 2)
  }
  #leftChild(i){
      return i * 2 + 1
  }
  #rightChild(i){
      return i * 2 + 2
  }
}