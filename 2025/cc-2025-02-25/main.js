// url: https://leetcode.com/problems/find-the-k-or-of-an-array/
// given an array of non-negative integers and k, a target number that's a positive integer
// use the bits that are found within the numbers at least k times, as a 1, to form a new number and return it.
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function findKOr(nums, k){
    // create an array for the bits, as bits frequency, starting at 0 for each saying how many are found
    const bitFrequency = new Array(32).fill(0);
    // loop through each number in nums
    for(let num of nums){
        // push bits into the array
        let pos = 31;
        while(num > 0){
            if(num & 1){bitFrequency[pos]++;}
            num >>= 1;
            pos--;
        }
    }
    // loop though the bit frequencies, use it to create a number if the frequency is >= k
    let kOr = 0;
    for(let i = 0; i < bitFrequency.length; i++){
        kOr <<= 1;
        const hasBit = bitFrequency[i] >= k;
        if(hasBit){kOr++;}
    }
    // return the number made
    return kOr;
};
// console.log(findKOr([7,12,9,8,9,15], 4), 9);
// console.log(findKOr([2,12,1,11,4,5], 6), 0);
// console.log(findKOr([10,8,5,9,11,6,8], 1), 15);