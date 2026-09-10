// url: https://leetcode.com/problems/find-the-distinct-difference-array/
// given an numbers array

// return the distinct difference array made using the given array
  // distinct difference array:
    // an array where diff[i] === (unique elements before and on numbers[i] - unique elements after numbers[i])
    // unique as in it only counts once if its on the same side

function distinctDifferenceArray(nums){
  const leftUniques = new Map()
  const rightUniques = new Map()
  for(const num of nums){
    rightUniques.set(num, rightUniques.get(num) + 1 || 1)
  }
  const result = []
  for(const num of nums){
    rightUniques.set(num, rightUniques.get(num) - 1)
    if(rightUniques.get(num) === 0){
      rightUniques.delete(num)
    }
    leftUniques.set(num, leftUniques.get(num) + 1 || 1)
    result.push(leftUniques.size - rightUniques.size)
  }
  return result
}

// console.log(distinctDifferenceArray([1,2,3,4,5]), [-3,-1,1,3,5])
// console.log(distinctDifferenceArray([3,2,3,4,2]), [-2,-1,0,2,3])