/**
 * @param {number[]} position
 * @return {number}
 */
// given an array of chip positions
// return the minimum cost of moving all the chips to the same position
    // movements conserving index parity are free but movements not cost 1
function minCostToMoveChips(positions){
    // create two counts one for even positions, one for odds
    let evenCount = 0;
    let oddCount = 0;
    // loop through and add counts for each position
    for(const chip of positions){
        const isOdd = chip & 1;
        isOdd ? oddCount++ : evenCount++;
    }
    // return the minimum between the even and odd count
    return Math.min(evenCount, oddCount);
};
// console.log(minCostToMoveChips([1,2,3]), 1);
// console.log(minCostToMoveChips([2,2,2,3,3]), 2);
// console.log(minCostToMoveChips([1,1000000000]), 1);