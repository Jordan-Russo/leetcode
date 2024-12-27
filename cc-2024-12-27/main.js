// url: https://leetcode.com/problems/sum-of-squares-of-special-elements/

/**
 * @param {number[]} nums
 * @return {number}
 */
// given an integer array of length n
// return the sum of squares of special elements -> number
// a special element is an element where n is divisible by its index + 1

function sumOfSquares(nums){
    // initialize a sum at 0
    let sum = 0
    // loop through the nums
    for(let i = 0; i < nums.length; i++){
      const curr = nums[i]
      // determine if it's a special index (length of nums % (i + 1) === 0)
      const isSpecial = nums.length % (i + 1) === 0
      // if so, square the nums element and add it to the sum
      if(isSpecial){sum += curr * curr}
    }
    // return the sum
    return sum
  }
  
  // console.log(sumOfSquares([1,2,3,4]), 21)
  // console.log(sumOfSquares([2,7,1,19,18,3]), 63)