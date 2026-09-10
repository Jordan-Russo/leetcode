// url: https://leetcode.com/problems/return-length-of-arguments-passed/

// given a csv list of arguments

// Return the count of arguments received

// grab all the arguments

// return the quantity of them that is there

// Example 1:
// Input: args = [5]
// Output: 1
// Explanation:
// argumentsLength(5); // 1
// One value was passed to the function so it should return 1.

// Example 2:
// Input: args = [{}, null, "3"]
// Output: 3
// Explanation: 
// argumentsLength({}, null, "3"); // 3
// Three values were passed to the function so it should return 3.

/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */

var argumentsLength = function(...args) {
    return args.length;
};