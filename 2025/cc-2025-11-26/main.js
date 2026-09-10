/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
// given two strings, str1 and str2
    // always strings, only UPPERCASE ENGLISH LETTERS, can be an empty string
// Return the longest substring that "divides" both
    // where substring.repeat(some number >= 1) can make str1 and str2
var gcdOfStrings = function(str1, str2) {
    // record the smallest length of the strings
    const smallestLength = Math.min(str1.length, str2.length);
    // initialize the largest divisor string as an empty string
    let largestDivisorString = '';
    // loop through all indexes from 0 and stopping before that smallest length
    for(let i = 1; i <= smallestLength; i++){
        // check whether the current length is divisible by both
        const isDivisible = str1.length % i === 0 && str2.length % i === 0;
            // if so, attempt making a string that matches the length of both
        if(isDivisible){
            const divisor = str1.slice(0, i);
            const str1HasMatch = divisor.repeat(str1.length / i) === str1;
            const str2HasMatch = divisor.repeat(str2.length / i) === str2;
            if(str1HasMatch && str2HasMatch){
                largestDivisorString = divisor;
            }
            // if it equals both, reassign largest divisor string
        }
    }
    // return the largest divisor string
    return largestDivisorString;
};
// console.log(gcdOfStrings('ABCABC', 'ABC'), 'ABC');
// console.log(gcdOfStrings('ABABAB', 'ABAB'), 'AB');
// console.log(gcdOfStrings('LEET', 'CODE'), '');