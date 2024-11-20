// url: https://leetcode.com/problems/minimum-average-of-smallest-and-largest-elements/

// given an array of integers
  // it always has an even number of integers, always have at least 2 numbers

// take pairs of the smallest and largest number in the array, pair and make an average of the two, then remove them from the array

// return the smallest average made from making pairs
  // can be float number


  function minimumAverage(numbers){
    let minimumPairAverage = Infinity
    const sortedNumbers =  numbers.toSorted((a,b) => a - b)
    for(let i = 0; i < numbers.length / 2; i++){
      const left = sortedNumbers[i]
      const right = sortedNumbers[numbers.length - 1 - i]
      const pairAverage = (left + right) / 2
      minimumPairAverage = Math.min(minimumPairAverage, pairAverage)
    }
    return minimumPairAverage
  }
  
  console.log(minimumAverage([7,8,3,4,15,13,4,1]), 5.5)
  console.log(minimumAverage([1,2,3,7,8,9]), 5)