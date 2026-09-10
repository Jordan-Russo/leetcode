// url: https://leetcode.com/problems/maximum-units-on-a-truck/

// Given an 2D array with elements of [boxCount, unitsPerBox]
// and box load capacity
// Return the maximum number of units that can be placed on the truck

// Sort each subarray by units per box
// Loop through the subarrays summing the units found in boxes in descending order of unitsPerBox
// If the truckSize capacity for boxes is reached stop, otherwise keep going until all boxes have been added
// Return the total unit count


/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
    let totalUnits = 0
    boxTypes.sort(([,a],[,b]) => b - a);
    // ascending
    for(let i = 0; i < boxTypes.length; i++){
        if(truckSize === 0){
            return totalUnits
        }
        const [boxes, units] = boxTypes[i]
        const usedBoxes = Math.min(truckSize, boxes)
        const usedUnits = units * usedBoxes
        truckSize -= usedBoxes
        totalUnits += usedUnits
    }
    return totalUnits
};