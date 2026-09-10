/**
 * @param {string} s
 * @return {string}
 */
var findLatestTime = function(s) {
    let latestTime = '';

    if(Number(s[0]) === 0 || Number(s[1]) >= 2){
        latestTime += '0';
    }else{
        latestTime += '1';
    }

    if(s[1] === '?'){
        latestTime += latestTime[0] === '1' ? '1' : '9';
    }else{
        latestTime += s[1];
    }
    latestTime += ':';
    latestTime += s[3] === '?' ? '5' : s[3];
    latestTime += s[4] === '?' ? '9' : s[4];
    return latestTime;
    // 12 hours format latest time is 11:59
    // use this ruleset

    // conditional ones:
    // first digit is always 1 if possible unless the 2nd value is > 1
    // second digit is always 1 unless first digit is 0
    

    // universal rules unless they're already set:
    // always include the colon between
    // third digit is always 5
    // fourth digit is always 9
};