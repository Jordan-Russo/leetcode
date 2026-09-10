// url: https://leetcode.com/problems/path-crossing/
// Given a string that represents a sequence of movements from a center point
// Return whether at any time in the path, you return to a point you've already visited

// Example 1:
// Input: path = "NES"
// Output: false 
// Explanation: Notice that the path doesn't cross any point more than once.

// Example 2:
// Input: path = "NESWW"
// Output: true
// Explanation: Notice that the path visits the origin twice.

// Create a hash map that stores all the previously visited locations
// Store each location then change the locations based on the given direction
// Change the direction with each input from the path string
// If the location was visited before return true
// if no locations were ever matched, return false
/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function(path) {
    const locations = new Set(['0:0'])
    const directions = {
        'N': [0, 1],
        'S': [0, -1],
        'E': [1, 0],
        'W': [-1, 0]
    }
    let horizontal = 0
    let vertical = 0
    for(const movement of path){
        const [horizontalChange, verticalChange] = directions[movement]
        horizontal += horizontalChange
        vertical += verticalChange
        const location = `${horizontal}:${vertical}`
        if(locations.has(location)){
            return true
        }else{
            locations.add(location)
        }
    }
    return false
};