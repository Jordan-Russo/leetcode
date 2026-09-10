// url: https://leetcode.com/problems/nested-array-generator/
// Given a multi-dimensional array
// Return a function generator which yields the next number in order through the array
/**
 * @param {Array} arr
 * @return {Generator}
 */
// Example 1:

// Input: arr = [[[6]],[1,3],[]]
// Output: [6,1,3]
// Explanation:
// const generator = inorderTraversal(arr);
// generator.next().value; // 6
// generator.next().value; // 1
// generator.next().value; // 3
// generator.next().done; // true
// Example 2:

// Input: arr = []
// Output: []
// Explanation: There are no integers so the generator doesn't yield anything.

function* inorderTraversal(arr) {
    for(const element of arr){
        const isArray = Array.isArray(element)
        if(isArray){
            yield* inorderTraversal(element)
            // yield* allows for recursion, or delegation of yielding within another function
        }else{
            yield element
        }
    }
};

/**
 * const gen = inorderTraversal([1, [2, 3]]);
 * gen.next().value; // 1
 * gen.next().value; // 2
 * gen.next().value; // 3
 */