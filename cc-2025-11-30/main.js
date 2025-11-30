/**
 * @param {string} text
 * @return {number}
 */
// 
// given a string of lowercase english letters that will have a length > 0
// return the number of times you can make "balloon" using the characters in that text
    // as a non-negative integer
function maxNumberOfBalloons(text){
    const letterCache = {
        'b': 0,
        'a': 0,
        'l': 0,
        'o': 0,
        'n': 0
    }
    // loop through the text
    for(const letter of text){
        // record how many 'b's, 'a's, 'l's, 'o's, and 'n's are in the text
        if(letter in letterCache){
            letterCache[letter]++;
        }
    }
    // find the minimum integer count of b, a, l / 2, o / 2, and n
    const minimumMultiple = Math.min(
        letterCache.b,
        letterCache.a,
        Math.trunc(letterCache.l / 2),
        Math.trunc(letterCache.o / 2),
        letterCache.n
    )
        // round any floats down
    // return the of those 5 itegers (minimum multiple count)
    return minimumMultiple;
};
// console.log(maxNumberOfBalloons("nlaebolko"), 1);
// console.log(maxNumberOfBalloons("loonbalxballpoon"), 2);
// console.log(maxNumberOfBalloons("leetcode"), 0);