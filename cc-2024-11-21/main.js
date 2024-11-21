// url: https://leetcode.com/problems/number-of-distinct-averages/
// given integer array
  // even length
  // minimum 2 values

// keep grabbing minimum/maximum pairs from array, and calculate their averages
  // remove them from the array
  // non-mutating

// Return the number of unique averages that you can make with it

function distinctAverages(numbers){
  const sortedNumbers = [...numbers].sort((a,b) => a - b)
  const uniqueAverages = new Set()
  for(let i = 0; i < sortedNumbers.length / 2; i++){
    const left = sortedNumbers[i]
    const right = sortedNumbers[sortedNumbers.length - 1 - i]
    const average = (left + right) / 2
    uniqueAverages.add(average)
  }
  return uniqueAverages.size
}

console.log(distinctAverages([4,1,4,0,3,5]), 2)
console.log(distinctAverages([1, 100]), 1)