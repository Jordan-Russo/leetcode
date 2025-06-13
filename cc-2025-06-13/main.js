/**
 * @param {string} s
 * @return {string}
 */
// given a string
    // made of only lowercase english letters
// return the string after modifying it so that it's "fancy"
    // fancy meaning that there are no 3 consecutive characters that are the same
function makeFancyString(s){
    // initialize a new string with the first two characters (if they exist)
    let fancyString = s.slice(0, 2);
    // loop from the third character and so on
    for(let i = 2; i < s.length; i++){
        const curr = s[i];
        // if the current character is equal to the two previous characters don't add it to the new string
        if(curr !== s[i - 1] || curr !== s[i - 2]){
            fancyString += curr;
        }
    }
    // return the new string
    return fancyString;
};
// console.log(makeFancyString('leeetcode'), 'leetcode');
// console.log(makeFancyString('aaabaaaa'), 'aabaa');
// console.log(makeFancyString('aab'), 'aab');