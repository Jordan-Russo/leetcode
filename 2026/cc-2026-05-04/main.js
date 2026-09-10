/**
 * @param {number[][]} events
 * @return {number}
 */
var buttonWithLongestTime = function(events) {
    let longestTime = events[0][1];
    let index = events[0][0];
    for(let i = 1; i < events.length; i++){
        const time = events[i][1] - events[i - 1][1];
        if(time > longestTime || time === longestTime && index > events[i][0]){
            longestTime = time;
            index = events[i][0];
        }
    }
    return index;
};