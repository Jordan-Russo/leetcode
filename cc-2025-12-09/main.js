/**
 * @param {number[]} nums
 * @return {number}
 */
// given an integer array, nums
    // array will never be empty
// I can increase the value of any of the elements by 1, each increment is a move
// return the minimum amount of moves required to make all the elements equal
function minMoves(nums){
    // find the maximum element in numbers
    const max = Math.max(...nums);
    // initialize a move count at 0
    let moveCount = 0;
    // loop through the numbers
    for(const num of nums){
        // increment move count by max - current number
        moveCount += max - num;
    }
    // return the move count
    return moveCount;
};
// console.log(minMoves([2,1,3]), 3);
// console.log(minMoves([4,4,5]), 2);