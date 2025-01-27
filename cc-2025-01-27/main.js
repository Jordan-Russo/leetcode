// url: https://leetcode.com/problems/find-indices-of-stable-mountains/
// given an integer array
// return a new array containing all the indexes of elements whose previous element is greater than the threshold
/**
 * @param {number[]} height
 * @param {number} threshold
 * @return {number[]}
 */
function stableMountains(height, threshold){
    // initialize stable array
    const stableIndexes = []
    // loop starting from index 1 to end of heights
    for(let i = 1; i < height.length; i++){
        // check that the height of the previous mountain is above threshold
        if(height[i - 1] > threshold){
            // if so, push current index into stable array
            stableIndexes.push(i)
        }
    }
    // return stable array
    return stableIndexes
};
// console.log(stableMountains([1,2,3,4,5], 2), [3,4])
// console.log(stableMountains([10,1,10,1,10], 3), [1,3])
// console.log(stableMountains([10,1,10,1,10], 10), [])