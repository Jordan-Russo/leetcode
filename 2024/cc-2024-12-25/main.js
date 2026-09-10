// url: https://leetcode.com/problems/sum-of-distances/description/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// given an integer array, nums
// return an array of the same length, arr
  // where arr[i] === |i - j|, where arr[i] === arr[j]  and i !== j
  // different index, same element value
// if there is no j then arr[i] === 0

function distance(nums){
    const result = new Array(nums.length)
    const distancePositions = {}
    for(let i = 0; i < nums.length; i++){
        const curr = nums[i]
        if(!distancePositions[curr]){distancePositions[curr] = []}
        distancePositions[curr].push(i)
    }
    for(const value in distancePositions){
        const positions = distancePositions[value]
        const len = positions.length
        let left = 0
        let right = -len * positions[0]
        for(const position of positions){
            right += position
        }
        for(let i = 0; i < len; i++){
            result[positions[i]] = left + right
            if(i + 1 < len){
                left += (positions[i + 1] - positions[i]) * (i + 1);
                right -= (positions[i + 1] - positions[i]) * (len - i - 1);
            }
        }
    }
    return result
}

// console.log(distance([1,3,1,1,2]), [5,0,3,4,0])
// console.log(distance([0,5,3]), [0,0,0])