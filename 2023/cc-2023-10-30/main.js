// url: https://leetcode.com/problems/3sum/

// Given an integer array, with at least 3 integers in it.
// Return all the triplets as an array of its values, each of the three indexes for those values must be unique.
// solution cannot contain duplicate triplets.

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: 
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.

// Example 2:

// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.

// Example 3:

// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.


/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// O(n^3) // naive cubic time solution:
// initialize array to return
// loop through the array while increment i
    // loop thorugh the array while incrementing j
        // loop through the array while incrementing k
            // if the elements at index i, j, k sum to 0
            // and i, j, k are not equal to each other
            // order i, j, k
            // check the set whether i, j, k is a combination
            // if it is not push [arr[i], arr[j], arr[k]] into the array to return
            // push a serialized(sorted) i,j,k into the set 
// return the array

// build bucket cache
var threeSum = function(nums) {
    const triplets = [];
    const seenTriplets = new Set();
    for(let i = 0; i < nums.length; ++i){
        for(let j = 1; j < nums.length; ++j){
            for(let k = 2; k < nums.length; ++k){
                if(nums[i] + nums[j] + nums[k] === 0){
                    if(i != j && i != k && j != k){
                        const serialCode = [nums[i], nums[j], nums[k]].sort((a,b) => a - b).join('');
                        if(seenTriplets.has(serialCode) === false){
                            seenTriplets.add(serialCode);
                            triplets.push([nums[i], nums[j], nums[k]]);
                        }
                    }
                }
            }
        }
    }
    return triplets;
};

var threeSum = function(nums){
    const triplets = [];
    const seenTriplets = new Set();
    // build bucket cache
    const bucketCache = new Map();
    for(let i = 0; i < nums.length; ++i){
        if(bucketCache.has(nums[i]) === false){
            bucketCache.set(nums[i], new Set());
        }
        bucketCache.set(nums[i], bucketCache.get(nums[i]).add(i));
    }
    for(let j = 0; j < nums.length; ++j){
        for(let k = 0; k < nums.length; ++k){
            const diff = -1 * (nums[j] + nums[k]);
            if(j !== k && bucketCache.has(diff)){
                const bucket = bucketCache.get(diff);
                let requiredSetSize = 1;
                if(bucket.has(j)){
                    requiredSetSize++;
                }
                if(bucket.has(k)){
                    requiredSetSize++;
                }
                if(bucket.size >= requiredSetSize){
                    // serialize it
                    // check seriailization
                    let serialStr = [diff, nums[j], nums[k]].sort().join('');
                    if(seenTriplets.has(serialStr) === false){
                        seenTriplets.add(serialStr);
                        triplets.push([diff, nums[j], nums[k]]);
                    }
                }
            }
        }
    }
    return triplets;
}
// O(n^2)
// Initialize a Bucket Cache
// Loop through the array
    // push the value of each element as a key,
    // have its index be the value for the key within an array (bucket);
// loop through the keys of the bucket cache
    // solve 2sum for each key, making sure that you only push unique value combinations into the final array.


// O(n^2)
// Sort the array
// Loop through the array
// If the previous value in the array is not equal to the current one
    // do a sorted 2sum where the target is -arr[i]
        // whenever you move onto the next value make sure it's a not the previous value.
        // push unique combinations into the array
// return array
var threeSum = function(nums){
    nums.sort((a,b) => a - b);
    let triplets = [];
    for(let i = 0; i < nums.length - 2; ++i){
        // make sure the previous value doesn't equal this value
        if(nums[i] !== nums[i - 1]){
            let left = i + 1;
            let right = nums.length - 1;
            // when increasing or decreasing do so until the value is no longer the same.
            while(left < right){
                const sum = nums[left] + nums[right] + nums[i];
                if(sum < 0){
                    shiftLeft();
                }
                if(sum > 0){
                    shiftRight();
                }
                if(sum === 0){
                    triplets.push([nums[left], nums[right], nums[i]])
                    // move the left and right to unique values
                    shiftLeft();
                    shiftRight();
                }
            }
            function shiftLeft(){
                do{
                    left++;
                }while(nums[left-1] === nums[left] && left !== right)
            }
            function shiftRight(){
                do{
                    right--;
                }while(nums[right+1] === nums[right] && left !== right)
            }
        }
    }
    return triplets;
}