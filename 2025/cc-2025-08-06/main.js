// given two integer permutations
    // a number that has digits that go from 1-n only once
// return the prefix common array of the two integers
    // the number of digits that are shared between the two at and before the current digit index
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function(A, B) {
    // create two empty sets, for a and b
    const seenA = new Set();
    const seenB = new Set();
    // create a count
    let count = 0;
    // create an empty array
    const result = [];
    // loop through both A and B one digit at a time
    for(let i = 0; i < A.length; i++){
        // push the # of digits shared that can be found in both A and B into the array
        const currA = A[i];
        seenA.add(currA);
        const currB = B[i];
        seenB.add(currB);
        if(seenB.has(currA)){count++}
        if(seenA.has(currB)){count++}
        if(currA === currB){count--}
        result.push(count);
    }
    // return the array
    return result;
};
// console.log(findThePrefixCommonArray([1,2,3,4],[3,1,2,4]), [0,2,3,4]);
// console.log(findThePrefixCommonArray([2,3,1],[3,1,2]), [0,1,3]);