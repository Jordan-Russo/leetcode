// url: https://leetcode.com/problems/minimum-absolute-difference/description/
// Given an array of distinct integers arr, find all pairs of elements with the minimum absolute difference of any two elements.

// Return a list of pairs in ascending order(with respect to pairs), each pair [a, b] follows

//     a, b are from arr
//     a < b
//     b - a equals to the minimum absolute difference of any two elements in arr

 

// Example 1:

// Input: arr = [4,2,1,3]
// Output: [[1,2],[2,3],[3,4]]
// Explanation: The minimum absolute difference is 1. List all pairs with difference equal to 1 in ascending order.

// Example 2:

// Input: arr = [1,3,6,10,15]
// Output: [[1,3]]

// Example 3:

// Input: arr = [3,8,-10,23,19,-4,-14,27]
// Output: [[-14,-10],[19,23],[23,27]]

/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function([...arr]) {
    // given an array of distinct integers
    // return all pairs of elements with the minimum absolute difference between two elements

    // step one: make sure the array is sorted in ascending order
    arr = arr.sort((a,b) => a - b)
    const result = []
    // initialize a results array

    for(let i = 0; i < arr.length - 1; i++){
    // loop from first to second to last element
        const pair = [arr[i], arr[i + 1]]
        if(result.length === 0){
            result.push(pair)
            continue;
        }
        const difference = arr[i + 1] - arr[i]
        const resultDifference = result[0][1] - result[0][0]
        // grab each pair 
        // check if results array is empty
            // if so push
            // if not compare
        if(difference < resultDifference){
            result.length = 0
            // emptied
        }
        if(difference <= resultDifference){
            result.push(pair)
        }
                // if difference is greater keep looping
                // if difference is smaller clear the results
                    // then push
                // if difference is equal push
    }
    return result
    // return a results array
};