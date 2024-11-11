// url: https://leetcode.com/problems/jump-game-ii/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
// given an array of non-negative integers
  // given array will always have a solution to it

// return the minimum number of jumps you need to reach the last element
  // a jump can be as long as the element's value or less (but not negative)

  function jump(numbers){
    const jumpsToEnd = new Array(numbers.length)
    jumpsToEnd[jumpsToEnd.length - 1] = 0
    for(let i = numbers.length - 2; i >= 0; i--){
      const jumpLength = Math.min(numbers.length - 1 - i, numbers[i])
      let minimumJumps = Infinity
      for(let j = jumpLength; j > 0; j--){
        minimumJumps = Math.min(minimumJumps, jumpsToEnd[i + j])
      }
      jumpsToEnd[i] = minimumJumps + 1
    }
    return jumpsToEnd[0]
  }
  
  console.log(jump([2,3,0,5,4]), 2)
  // [2,1,inf,1,0]
  console.log(jump([2,3,0,1,4]), 2)
  // [2,1,inf,1,0]