// url: https://leetcode.com/problems/add-two-promises/

// given two promises, with both always resolving to a number

// return the sum of the two promises
    // make sure the value of the promise is resolved before summing it.

// Example 1:
// Input: 
// promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20)), 
// promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60))
// Output: 7
// Explanation: The two input promises resolve with the values of 2 and 5 respectively. The returned promise should resolve with a value of 2 + 5 = 7. The time the returned promise resolves is not judged for this problem.

// Example 2:
// Input: 
// promise1 = new Promise(resolve => setTimeout(() => resolve(10), 50)), 
// promise2 = new Promise(resolve => setTimeout(() => resolve(-12), 30))
// Output: -2
// Explanation: The two input promises resolve with the values of 10 and -12 respectively. The returned promise should resolve with a value of 10 + -12 = -2.

// Wait for each promise to resolve

// Sum what each promise resolves to.

/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */

const addTwoPromises = async (promise1, promise2) => await promise1 + await promise2;
