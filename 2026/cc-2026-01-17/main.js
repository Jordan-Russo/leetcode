/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
var canFormArray = function(arr, pieces) {
    // make a cache from looping through arr
    const cache = {}
        // stores the arr value and its index
    for(let i = 0; i < arr.length; i++){
        cache[arr[i]] = i;
    }
    // loop through pieces
    for(let i = 0; i < pieces.length; i++){
        // loop through each subarray
        for(let j = 0; j < pieces[i].length; j++){
            // check that each index's previous value has an arr index value that is 1 less then it
            const currIndex = cache[pieces[i][j]];
            const nextIndex = cache[pieces[i][j + 1]];
            if(currIndex === undefined){return false}
            // if not, return false
            if(nextIndex && currIndex + 1 !== nextIndex){return false}
        }
    }
    // return true
    return true;
};