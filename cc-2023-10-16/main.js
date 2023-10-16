// url: https://leetcode.com/problems/counter-ii/

// Given an integer as an initial value

// Return an object that has three functions:
// increment, increases num by 1 and returns it
// decrement, decreases num by 1 and returns it
// reset, sets curr value to init and retusn it

// Example 1:
// Input: init = 5, calls = ["increment","reset","decrement"]
// Output: [6,5,4]
// Explanation:
// const counter = createCounter(5);
// counter.increment(); // 6
// counter.reset(); // 5
// counter.decrement(); // 4

// Example 2:
// Input: init = 0, calls = ["increment","increment","decrement","reset","reset"]
// Output: [1,2,1,0,0]
// Explanation:
// const counter = createCounter(0);
// counter.increment(); // 1
// counter.increment(); // 2
// counter.decrement(); // 1
// counter.reset(); // 0
// counter.reset(); // 0

// closure to hold initial value and current value

// all three functions reassign current value and return it.

// reset assigns curr with the inital value

// due to closure, neither curr or init variables are directly accessed/modifiable from the returned object but methods can change curr.

/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let curr = init;
    return {
        increment: () => ++curr,
        decrement: () => --curr,
        reset: () => {
            curr = init;
            return curr;
        }
    }
};