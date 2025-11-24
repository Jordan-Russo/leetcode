/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canThreePartsEqualSum = function(arr) {
    // loop through all the numbers in the array to find the sum
    const total = arr.reduce((acc, c) => acc + c, 0);
    // divide the number by 3 to find the size of each partition
    const target = total / 3;
    // use the quotient as a target value
        // if the number is not divisible by 3, return false
    if(Number.isInteger(target) === false){return false}
    // have a partition counter initialized at 0
    let counter = 0;
    // have a partition sum initialized at 0
    let sum = 0;
    // loop through all the numbers
    for(const num of arr){
        // add the value to the partition sum
        sum += num;
        // if the partition sum === target value then increment the partition counter and reassign the sum to 0
        if(sum === target){
            counter++;
            sum = 0;
        }
    }
    // return a boolean on whether the partition counter is 3
    return counter >= 3;
};
// console.log(canThreePartsEqualSum([0,2,1,-6,6,-7,9,1,2,0,1]), true);
// console.log(canThreePartsEqualSum([0,2,1,-6,6,7,9,-1,2,0,1]), false);
// console.log(canThreePartsEqualSum([3,3,6,5,-2,2,5,1,-9,4]), true);