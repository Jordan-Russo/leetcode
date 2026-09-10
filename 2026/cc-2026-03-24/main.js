/**
 * @param {number[]} capacity
 * @param {number} itemSize
 * @return {number}
 */
// given an array of integers, capacity, 
// and given an integer, itemSize
// return the first index in capacity (0-indexed) that is >= itemSize
    // if there is no match, then return -1 instead
function minimumIndex(capacity, itemSize) {
    // initialize capacityIndex at -1
    let capacityIndex = -1;
    // loop through capacity
    for(let i = 0; i < capacity.length; i++){
        // check if value is >= itemSize
        if(capacity[i] >= itemSize){
            // if capacityIndex < 0
            if(capacityIndex === -1){
                // replace capcityIndex with current index
                capacityIndex = i;
            }
            // else check if the current capacity size is smaller then the capacityIndex element's size
            else if(capacity[i] < capacity[capacityIndex]){
                // replace capacityIndex with current index
                capacityIndex = i;
            }
        }
    }
    // return capacityIndex
    return capacityIndex;
};

// console.log(minimumIndex([1,5,3,7], 3), 2);
// console.log(minimumIndex([3,5,4,3], 2), 0);
// console.log(minimumIndex([4], 5), -1);