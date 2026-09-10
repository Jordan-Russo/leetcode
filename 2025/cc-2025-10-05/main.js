/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var findLUSlength = function(a, b) {
    let maxLength = -1;
    // loop through all permutations for subsequences in a
    for(let start = 0; start < a.length; start++){
        for(let end = 0; end < a.length; end++){
            const subsequence = a.slice(start, end + 1)
            // determine whether they're not in b
            // update max length if longer
            if(!b.includes(subsequence)){
                maxLength = Math.max(maxLength, subsequence.length);
            }
        }
    }
    for(let start = 0; start < b.length; start++){
        for(let end = 0; end < b.length; end++){
            const subsequence = b.slice(start, end + 1)
            // loop through all permutations for subsequences in b
                // determine whether they're not in a
                    // update max length if longer
            if(!a.includes(subsequence)){
                maxLength = Math.max(maxLength, subsequence.length);
            }
        }
    }
    // return max length
    return maxLength;
};