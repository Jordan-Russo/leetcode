// given n, a positive intger value of candies
// and limit, the maximum amount candies one person can hold
// return the permutation count that the candies can be shared among the 3 children
/**
 * @param {number} n
 * @param {number} limit
 * @return {number}
 */
function distributeCandies(n, limit){
    // initialize count at 0
    let count = 0;
    // loop through 3 children and loop through how many candies they can take from 0 to limit, while total candy isn't over n
    for(let a = 0; a <= limit; a++){
        for(let b = 0; b <= limit; b++){
            if(a + b > n){break}
            for(let c = 0; c <= limit; c++){
                if(a + b + c > n){break}
                // if it's a valid permutation count it
                // and uses all candy(no more no less), no one person goes the limit
                const hasCorrectAmount = a + b + c === n;
                if(hasCorrectAmount){count++}
            }
        }
    }
    return count;
    // return count of valid permutations


};
console.log(distributeCandies(5,2), 3);
console.log(distributeCandies(3,3), 10);