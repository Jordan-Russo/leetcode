// url: https://leetcode.com/problems/generate-fibonacci-sequence/

//  Write a generator function that returns a generator object which yields the fibonacci sequence.
// Generator functions are an iterable funciton which keeps state
// This allows us to keep calling it over and over iteratively and get the next value
// These values are returned by the function with the keyword yield

/**
 * @return {Generator<number>}
 */

// assign and yield first 2 values
// loop:
// then yield sum of the previous two values 
// set the previous values to be the previous value as well as the sum

// Example 1:
// Input: callCount = 5
// Output: [0,1,1,2,3]
// Explanation:
// const gen = fibGenerator();
// gen.next().value; // 0
// gen.next().value; // 1
// gen.next().value; // 1
// gen.next().value; // 2
// gen.next().value; // 3

// Example 2:
// Input: callCount = 0
// Output: []
// Explanation: gen.next() is never called so nothing is outputted

const fibGenerator = function*() {
    let a = 0;
    yield a;
    let b = 1;
    yield b;
    let sum;
    while(true){
        sum = a + b;
        a = b;
        b = sum;
        yield sum;
    }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */