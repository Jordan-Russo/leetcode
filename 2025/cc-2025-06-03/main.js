/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function(nums, queries) {
    const ascendingNums = nums.toSorted((a,b) => a - b);
    // store the # of elements that can sum to a number
    let sum = 0;
    let sums = [0];
    for(const num of ascendingNums){
        sum += num;
        sums.push(sum);
    }
    return queries.map((num,i) => {
        let left = 0;
        let right = sums.length;
        while(left < right){
            const middle = Math.floor((left + right) / 2);
            // whether or not the current sums index is <= queries i and sums (i + 1) is not <= queries i
            if(sums[middle] <= queries[i] && (sums[middle + 1] <= queries[i] === false)){
                return middle;
            }
            // if so return i
            else if(sums[middle] > queries[i]){
            // if too high move right
                right = middle;
            }else{
                left = middle + 1;
            }
            // if too low move left
        }

    })
};