/**
 * @param {number[][]} tasks
 * @return {number}
 */
var earliestTime = function(tasks) {
    let min = Infinity;
    for(const [start, duration] of tasks){
        min = Math.min(min, start + duration);
    }
    return min;
};