// url: https://leetcode.com/problems/find-greatest-common-divisor-of-array/

// Given a positive integer array

// Return the GCD of the minimum and maxium number in the nums array

// Linear time with respect to array size and minimum array value.

// loop through the array to find min and max values

// assign both values as variables.

// Have a value that stores the current GCD (starts at 1)

// loop from 1 to the smaller number

// if the max and min is divisible by the iterator assign GCD as the iterator.

// Return GCD

/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    const min = Math.min(...nums);
    const max = Math.max(...nums);
    let GCD = 1;
    for(let i = 2; i <= min; ++i){
        if(min % i === 0 && max % i === 0){
            GCD = i;
        }
    }
    return GCD;
};