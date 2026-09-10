// given an array, of positive integers, the mountain
// return an array that contains all of the "peaks" indicies in the given array (in any order)
    // "peaks" are any element that are larger than the element before and after them
    // first and last elements cannot be peaks
/**
 * @param {number[]} mountain
 * @return {number[]}
 */
function findPeaks(mountain){
    // create a peakLocations array to hold indicies
    const peakLocations = [];
    // loop through all mountains that aren't the first or last one
    for(let i = 1; i < mountain.length - 1; i++){
        // if current height greater than the element before and after it
        const isPeak = mountain[i] > mountain[i + 1] && mountain[i] > mountain[i - 1]
        if(isPeak){
            // push INDEX of the mountain into peakLocations
            peakLocations.push(i);
        }
    }
    // return peakLocations
    return peakLocations;
};
// console.log(findPeaks([2,4,4]), []);
// console.log(findPeaks([1,4,3,8,5]), [1,3]);