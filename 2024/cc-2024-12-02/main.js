// url: https://leetcode.com/problems/jump-game-iii/submissions/1458714514/
/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function(arr, start) {
  // build a set of visited indexes
  const visitedIndexes = new Set()
  // put the start in there
  let isZeroReached = false
  
  visit(start)

  function visit(index){
      visitedIndexes.add(index)
      const curr = arr[index]
      if(curr === 0){
          isZeroReached = true
          return
      }
  // recursive function 
      // takes in an index position
          // marks it as visited
  // make recursive calls until you visit all the points you can
      // mark places as visited to prevent infinite loops
      // possibly have a way of flagging a 0 or stopping further recursion if a 0 is found?
      // sees if value is 0
          // trigger flag or just return
      const left = index - curr
      const right = index + curr
      if(left >= 0 && !visitedIndexes.has(left)){
          visit(left)
      }
      if(!isZeroReached && right <= arr.length - 1 && !visitedIndexes.has(right)){
          visit(right)
      }
      // makes up to two calls from positions it can move to
          // recursively called
  }
  // return whether a 0 was visited
  return isZeroReached
};