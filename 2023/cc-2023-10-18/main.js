// url: https://leetcode.com/problems/function-composition/

// What does it mean to be a function composition

// it means that we return f(g(h(x))), nesting can go as deep as need be, when given x

// so that when we call the returned function with x, we get what f(g(h(x))) equals (or however nested that function composition is).

// One integer as an input

// One integer as output

// No functions will return the input

// Example 1:
// Input: functions = [x => x + 1, x => x * x, x => 2 * x], x = 4
// Output: 65
// Explanation:
// Evaluating from right to left ...
// Starting with x = 4.
// 2 * (4) = 8
// (8) * (8) = 64
// (64) + 1 = 65

// Example 2:
// Input: functions = [x => 10 * x, x => 10 * x, x => 10 * x], x = 1
// Output: 1000
// Explanation:
// Evaluating from right to left ...
// 10 * (1) = 10
// 10 * (10) = 100
// 10 * (100) = 1000

// Example 3:
// Input: functions = [], x = 42
// Output: 42
// Explanation:
// The composition of zero functions is the identity function
 

/**
 * @param {Function[]} functions
 * @return {Function}
 */
function compose(functions) {
    return (x) => functions.reduceRight((val, func) => func(val), x)
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */