/**
 * @param {string} time
 * @return {number}
 */
var countTime = function(time) {
    let options = 1;
    const minutes = time[4];
    const minutesTens = time[3];
    const hours = time[1];
    const hoursTens = time[0];

    // hours tens:
        // if hours forced
            // if hours >= 4
                // 0, 1 are options
            // if hours 0-3
                // 0, 1, 2 are options
    if(hoursTens === '?'){
        if(hours === '?'){
            options *= 24;
        }else{
            options *= hours >= '4' ? 2 : 3;
        }
    }
    // hours:
        // if hours ten forced
            // if hours ten is 0 or 1
                // 9 options
            // if hours ten is 2
                // 4 options
    if(hours === '?' && hoursTens !== '?'){
        options *= hoursTens === '2' ? 4 : 10;
    }
    if(minutesTens === '?'){
        options *= 6;
    }
    if(minutes === '?'){
        options *= 10;
    }
    return options;
};