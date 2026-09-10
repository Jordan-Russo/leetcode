/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    const nums = new Set(arr);
    let counter = 0;
    for(let i = 1; i <= 2000; i++){
        if(!nums.has(i)){
            counter++;
            if(counter === k){
                return i;
            }
        }
    }
};