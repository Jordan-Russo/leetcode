/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
    // initialize a poisonTimer at 0
    let poisonTimer = 0;
    // start looping from the 2nd value and onwards and reference the previous value in the time Series
    for(let i = 1; i < timeSeries.length; i++){
        // account for the time that the poison lasted in the previous entry and the time between the prev and the current
        // do not count any poison in the current tick
        const prev = timeSeries[i - 1];
        const curr = timeSeries[i];
        const activeTicks = Math.min(curr - prev, duration);
        poisonTimer += activeTicks;
    }
    // handle the poison timer for the last time
        // add the duration to the poison count
    poisonTimer += duration;
    // return the poisonTimer 
    return poisonTimer;
};