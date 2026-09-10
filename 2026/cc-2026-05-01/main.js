/**
 * @param {string[]} event1
 * @param {string[]} event2
 * @return {boolean}
 */
var haveConflict = function(event1, event2) {
    // helper function that turns time into # of minutes
    function timeToMinutes(time){
        const [hours, minutes] = time.split(':').map(Number);
        return 60 * hours + minutes;
    }
    const start1 = timeToMinutes(event1[0]);
    const end1 = timeToMinutes(event1[1]);
    const start2 = timeToMinutes(event2[0]);
    const end2 = timeToMinutes(event2[1]);
    if(end2 < start1 || end1 < start2){
        return false;
    }
    return true;
    // end2 < start1 || end1 < start2
        // then the two events don't conflict
};