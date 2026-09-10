// url: https://leetcode.com/problems/count-tested-devices-after-test-operations/description/
// given an array of battery charge percentages
    // each is a non-negative integer
// return the count, an integer, of batteries that were able to be checked
    // if order for a battery to be checked it must have a % > 0
    // each successful check will decrease the following battery's % by 1
/**
 * @param {number[]} batteryPercentages
 * @return {number}
 */
const countTestedDevices = (batteryPercentages) => {
    // initialize count at 0
    let count = 0;
    // loop through batteries
    for(const curr of batteryPercentages){
        // is curr battery - count > 0
            // increase count
        if(curr - count > 0){count++;}
    }
    // return count
    return count;
};
console.log(countTestedDevices([1,1,2,1,3]), 3);
console.log(countTestedDevices([0,1,2]), 2);