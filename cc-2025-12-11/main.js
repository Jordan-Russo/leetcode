/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumDivisibleByK = function(nums, k) {
    const frequency = {}
    let sum = 0;
    for(const num of nums){
        frequency[num] = frequency[num] + 1 || 1;
    }
    for(const num in frequency){
        const isDivisible = frequency[num] % k === 0;
        if(isDivisible){
            sum += Number(num) * frequency[num];
        }
    }
    return sum;
};