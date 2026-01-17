/**
 * @param {number[]} arr
 * @param {number} m
 * @param {number} k
 * @return {boolean}
 */
var containsPattern = function(arr, m, k) {
    // loop i, from 0 to <= arr.length - (m * k);
    for(let i = 0; i <= arr.length - (m * k); i++){
        // in each position, use the pattern arr.slice(arr[i], arr[i + m])
        const pattern = arr.slice(i, i + m);
        // count how many times the pattern is repeated, initialized at 0
        let count = 0;
            // loop j starting from i, and increment each loop by m
            for(let j = i; j < arr.length; j += m){
                const substring = arr.slice(j, j + m);
                // increment count if pattern matches the current substring
                const isPatternMatch = pattern.every((value, index) => value === substring[index])
                if(isPatternMatch){count++}
                else{break}
                // if count === k
                    // return true
                if(count === k){return true}
            }
    }
    // return false
    return false;
};