/**
 * @param {string} time
 * @return {string}
 */
var maximumTime = function(time) {
    let latestTime = '';
    // loop through the time string
    for(let i = 0; i < time.length; i++){
        const isWildCard = time[i] === '?'
        if(isWildCard){
        // if character is a ? look at it's position
            switch(i){
                // if index 0, put 2 if index 1 is <= 3
                case 0:
                    latestTime += time[1] <= '3' || time[1] === '?' ? '2' : '1';
                    break;
                // if index 1, look at index 0
                case 1: 
                    // if index 0 is 2
                        // assign 3
                    // else
                        // put 9
                    latestTime += latestTime[0] === '2' ? '3' : '9';
                    break;
                // index 2, put :
                case 2:
                    latestTime += ':';
                    break;
                // index 3, 5
                case 3:
                    latestTime += '5';
                    break;
                // index 4, put 9
                case 4: 
                    latestTime += '9';
                    break;
            }
        }else{
            latestTime += time[i];
        }
        // else concatenate character to lastestTime
    }
    // return the new modified lastest time string
    return latestTime;
};