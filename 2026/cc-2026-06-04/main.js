/**
 * @param {number[]} forts
 * @return {number}
 */
var captureForts = function(forts) {
    // one looping forward
    // one looping backward

    // initialize max captures and current captures at 0

    let maxCaptures = 0;
    let currentCaptures = 0;
    let canCapture = false;

    for(let i = 0; i < forts.length; i++){
        armyMove(forts[i]);
    }

    canCapture = false;
    currentCaptures = 0;

    for(let i = forts.length - 1; i >= 0; i--){
        armyMove(forts[i]);
    }

    function armyMove(fortType){
        if(canCapture && fortType === 0){
            currentCaptures++;
        }
        if(fortType === 1){
            canCapture = true;
            currentCaptures = 0;
        }
        if(fortType === -1){
            canCapture = false;
            maxCaptures = Math.max(maxCaptures, currentCaptures);
            currentCaptures = 0;
        }
    }

    return maxCaptures;
    // each of the two loops will have a capture mode that gets set once you go over a 1
    // while capture mode is on
        // if you run into a 0, you capture it
            // and capture count increments
        // if you run into a 1
            // capture counter is reset to 0
        // if you run into a -1
            // max captures gets updated with current captures
            // capture count is reset to 0 
            // capture mode is set to off
    // between the two loops make sure to reset current captures

    // after both forward and reverse loop are done return max captures
};