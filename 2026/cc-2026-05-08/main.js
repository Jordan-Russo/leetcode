/**
 * @param {number[]} nums
 * @param {number[]} divisors
 * @return {number}
 */
var maxDivScore = function(nums, divisors) {
    let maxScore = 0;
    let targetDivisor = divisors[0];
    for(let i = 0; i < divisors.length; i++){
        let score = 0;
        nums.forEach(num => {
            if(num % divisors[i] === 0){score++}
        })
        if(maxScore <= score){
            if(targetDivisor >= divisors[i] || maxScore < score){
                maxScore = score;
                targetDivisor = divisors[i];
            }
        }
    }
    return targetDivisor;
};