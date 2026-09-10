/**
 * @param {string[]} events
 * @return {number[]}
 */
var scoreValidator = function(events) {
    let score = 0;
    let counter = 0;
    for(const event of events){
        if(event === 'W'){
            counter++;
        }else if(event === 'WD' || event === 'NB'){
            score++;
        }else{
            score += Number(event);
        }
        if(counter === 10){break}
    }
    return [score, counter];
};