// url: https://leetcode.com/problems/permutations/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

 

// Example 1:

// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

// Example 2:

// Input: nums = [0,1]
// Output: [[0,1],[1,0]]

// Example 3:

// Input: nums = [1]
// Output: [[1]]

// memory intensive route
function permute(nums) {
    let result = []
    permutations(nums)
    return result
    
    function permutations(arr, collection = []){
        if(!arr.length){result.push(collection)}
        for(let i = 0; i < arr.length; i++){
            const num = arr[i]
            permutations(arr.filter(x => x !== num), [...collection, num])
        }
    }
};

function permutate(nums){
    let result = []
    return permutations(nums)
    
    function permutations(arr){
        if(!arr.length){
            return [[]]
        }

        const perms = permutations(arr.slice(0, -1))
        const result = []
        for(const perm of perms){
            for(let i = 0; i <= arr.length; i++){
                const permutationCopy = [...perms]
                permutationCopy.splice(i, arr.at(-1));
                result.push(permutationCopy)
            }
        }
        return result
    }
}