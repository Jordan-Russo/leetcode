// url: https://leetcode.com/problems/prime-in-diagonal/
// given a 2D, N x N grid of positive integers
// return the largest prime number that can be found from the grid's diagonal
// if there are no prime numbers, return 0 instead
/**
 * @param {number[][]} nums
 * @return {number}
 */
function isPrime(n){
    const sqrt = Math.sqrt(n);
    if(n === 1){return false}
    for(let i = 2; i <= sqrt; i++){
        if(n % i === 0){return false}
    }
    return true;
};
function diagonalPrime(nums){
    let largestPrime = 0;
    for(let i = 0; i < nums.length; i++){
        const leftDiagonal = nums[i][i];
        if(isPrime(leftDiagonal)){largestPrime = Math.max(leftDiagonal, largestPrime)}
        const rightDiagonal = nums[i][nums.length - 1 - i];
        if(isPrime(rightDiagonal)){largestPrime = Math.max(rightDiagonal, largestPrime)}
    }
    return largestPrime;
};
// console.log(diagonalPrime([[1,2,3],[5,6,7],[9,10,11]]), 11);
// console.log(diagonalPrime([[1,2,3],[5,17,7],[9,11,10]]), 17);