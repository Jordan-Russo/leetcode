// url: https://leetcode.com/problems/left-and-right-sum-differences/

// take in an integer array

// return an new array that is the absolute difference of left sum and right sum at each position

function leftRightDifference(nums){
  const leftSumArray = []
  let total = 0
  for(let i = 0; i < nums.length; i++){
    leftSumArray[i] = total
    total += nums[i]
  }
  const rightSumArray = []
  total = 0
  for(let i = nums.length - 1; i >= 0; i--){
    rightSumArray[i] = total
    total += nums[i]
  }
  const differenceSumArray = []
  for(let i = 0; i < nums.length; i++){
    differenceSumArray.push(Math.abs(leftSumArray[i] - rightSumArray[i]))
  }
  return differenceSumArray
}

// console.log(leftRightDifference([10,4,8,3]), [15, 1, 11, 22])
// console.log(leftRightDifference([1]), [0])