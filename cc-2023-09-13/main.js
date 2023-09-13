// url: https://leetcode.com/problems/fibonacci-number/
/**
 * @param {number} n
 * @return {number}
 */

// Given the a positive integer n
// return the nth value of the fibonacci sequence

// Example 1:
// Input: n = 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.

// Example 2:
// Input: n = 3
// Output: 2
// Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.

// Example 3:
// Input: n = 4
// Output: 3
// Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.

function memoize(cb){
    cache = {};
    return (n) => {
        if(n in cache){return cache[n]}
        cache[n] = cb(n);
        return cache[n];
    }
}
// memoize uses closure to maintain privacy of the cache.
// only returned function has access to it.
// also allows us to make many unique caches
// currying where we first call with a callback func, which then returns a function we can call again with a value.
// Higher-order functions with FP principals in action

function fibonacci(n){
    if(n === 0){return 0}
    if(n === 1){return 1}
    return fibonacci(n - 1) + fibonacci(n - 2);
    // *optional change*: call fib instead of fibonacci, to also cache EVERY fibonacci between 0 and n.
}

const fib = memoize(fibonacci);
// this will cache previous answers