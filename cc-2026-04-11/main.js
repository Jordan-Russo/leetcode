/**
 * @param {string[]} words
 * @param {string} target
 * @param {number} startIndex
 * @return {number}
 */
var closestTarget = function(words, target, startIndex) {
    const distances = [];
    // loop through the words
    for(let i = 0; i < words.length; i++){
        // record the indexes that match the target word
        if(words[i] === target){
            distances.push(i);
        }
    }
    if(distances.length === 0){return -1}
    let minimumDistance = words.length;
    // loop through the indexes that match the target word
    for(const index of distances){
        // calculate the distance from that word to the startIndex in both directions
            // record the minimum distance
        minimumDistance = Math.min(minimumDistance, Math.abs(index - startIndex), Math.abs(words.length - Math.abs(index - startIndex)));
    }
    // return the minimum distance
    return minimumDistance;
};