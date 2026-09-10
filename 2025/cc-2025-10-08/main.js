/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
    const limit = Math.floor(arr.length / 4) + 1;
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        // compare the current value with the previous one
        const isStreak = arr[i] === arr[i - 1];
            // if not equal, reset count to 0
        if(!isStreak){count = 0}
            // increment count
        count++;
        // if the count is equal to the limit return the current value
        if(count === limit){return arr[i]}
    }
};