/**
 * @param {number[]} nums
 * @return {number}
 */
var maxLength = function(nums) {
    let maxLength = 1;
    for(let i = 0; i < nums.length; i++){
        let product = 1;
        let lcm = nums[i];
        let gcd = nums[i];
        for(let j = i; j < nums.length; j++){
            product *= nums[j];
            lcm = findLcm(lcm, nums[j]);
            gcd = findGcd(gcd, nums[j]);
            const hasEqualProducts = product === lcm * gcd;
            if(hasEqualProducts){
                maxLength = Math.max(maxLength, j - i + 1);
            }
        }
    }
    return maxLength;
};

function findLcm(a, b){
    let start = Math.max(a, b);
    const isDivisible = (x) => x % a === 0 && x % b === 0;
    for(let i = start; i <= a * b; i += start){
        if(isDivisible(i)){
            return i;
        }
    }
    return a * b;
}

function findGcd(a, b){
    let start = Math.min(a, b);
    const isDivisible = x => a % x === 0 && b % x === 0;
    for(let i = start; i > 0; i--){
        if(isDivisible(i)){
            return i;
        }
    }
}