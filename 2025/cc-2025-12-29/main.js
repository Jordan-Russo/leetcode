/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
var slowestKey = function(releaseTimes, keysPressed) {
    let slowestTime = -1;
    let slowestChar = '';
    for(let i = 0; i < releaseTimes.length; i++){
        const start = releaseTimes[i - 1] ?? 0;
        const end = releaseTimes[i];
        const time = end - start;
        if(time > slowestTime || time === slowestTime && keysPressed[i] > slowestChar){
            slowestTime = time;
            slowestChar = keysPressed[i];
        }
    }
    return slowestChar;
};