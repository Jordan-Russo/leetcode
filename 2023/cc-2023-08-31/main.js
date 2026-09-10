// url: https://leetcode.com/problems/memoize
// Memoize

/**
 * @param {Function} fn
 */

//  Given callback return a function to call that has cache closure.

function memoize(cb) {
  const cache = {};
  return (...args) => {
      const cacheKey = String(args);
      // JSON.stringify() would be better with more complex arguments.
      if(cacheKey in cache){return cache[cacheKey]}
      cache[cacheKey] = cb(...args);
      return cache[cacheKey];
  }
}

// Example:
/** 
* let callCount = 0;
* const memoizedFn = memoize(function (a, b) {
*	 callCount += 1;
*   return a + b;
* })
* memoizedFn(2, 3) // 5
* memoizedFn(2, 3) // 5
* console.log(callCount) // 1 
*/