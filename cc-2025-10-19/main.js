/**
 * @param {string} s
 * @return {number}
 */
// given a string consisting of letters that are lowercase
// return an number, an integer that represents the maximum difference between the frequency of two letters (absolute value)
    // one of the letters must have an odd frequency and the other must have an even frequency
// there will always be a solution (one letter /w odd freq and one letter /w even freq)
var maxDifference = function(s) {
    // build a cache that stores letter frequency
    const cache = {};
    for(const letter of s){
        cache[letter] = cache[letter] + 1 || 1;
    }
    let largestOdd = -Infinity;
    let largestEven = -Infinity;
    let smallestOdd = Infinity;
    let smallestEven = Infinity;
    // scan through the cache and assign 4 variables, largest Odd, largest Even, smallest Odd and smallest Even
    for(const letter in cache){
        const isOdd = cache[letter] & 1;
        const count = cache[letter];
        if(isOdd){
            largestOdd = Math.max(count, largestOdd);
            smallestOdd = Math.min(count, smallestOdd);
        }else{
            largestEven = Math.max(count, largestEven);
            smallestEven = Math.min(count, smallestEven);
        }
    }
    // take the absolute value of the difference of largest Odd and smallest even
    // and the abs difference of smallest odd and largest Even
    // take and return the minimum of both of those differences
    return Math.max(largestOdd - smallestEven, smallestOdd - largestEven);
};
// "aaaaabbc" -> 3; 5 'a' 2 'b'
// console.log(maxDifference("aaaaabbc"), 3);
// "abcabcab" -> 1; 3 'a' 3 'b' 2 'c'
// console.log(maxDifference("abcabcab"), 1);