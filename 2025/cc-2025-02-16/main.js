// url: https://leetcode.com/problems/create-hello-world-function/
// create a function that return a function that always returns "Hello World" when called.
/**
 * @return {Function}
 */
const createHelloWorld = () => () => "Hello World";
/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */