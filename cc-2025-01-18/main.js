// url: https://leetcode.com/problems/get-maximum-in-generated-array/
// given an integer, n
// return the maximum integer that is found in the generated array using the following rules of length (n + 1)
/**
 * @param {number} n
 * @return {number}
 */
function getMaximumGenerated(n){
    // initialize a generated array
    if(n < 2){return n}
    const arr = [0, 1]
    let max = 1
    // loop through n times
    while(n > 1){
        const index = arr.length
        const halfIndex = Math.trunc(arr.length / 2)
        let newValue = arr[halfIndex]
        if(index & 1){
            newValue += arr[halfIndex + 1]
        }
        arr.push(newValue)
        max = Math.max(newValue, max)
        n--
    }
    // find maximum in array and return it
    return max
};
// console.log(getMaximumGenerated(7), 3)
// console.log(getMaximumGenerated(2), 1)
// console.log(getMaximumGenerated(3), 2)