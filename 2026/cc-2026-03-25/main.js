/**
 * @param {number[]} bulbs
 * @return {number[]}
 */
// given an array of integers, bulbs, that represents a list of toggling light bulbs on an off
    // all bulbs start in the off-state
// return a list as an array of all of the bulbs that are in the on-state after performing all of the toggles within the bulbs array
    // the list must have the bulbs in an SORTED ascending order
function toggleLightBulbs(bulbs){
    const activeBulbs = new Set();
    // initialize a set to hold the active bulbs
    for(const bulb of bulbs){
        // loop through the bulbs array
            // if the set has the bulb, remove it from the set
            // otherwise, add it to the set
        if(activeBulbs.has(bulb)){
            activeBulbs.delete(bulb);
        }else{
            activeBulbs.add(bulb);
        }
    }
    // turn the set into an array, and order it by ascending values
    // return the sorted array
    return [...activeBulbs].sort((a,b) => a - b);
};
// console.log(toggleLightBulbs([10,30,20,10]), [20,30]);
// console.log(toggleLightBulbs([100,100]), []);