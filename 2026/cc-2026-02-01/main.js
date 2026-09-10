/**
 * @param {string} s
 * @return {string}
 */
const isLowerCaseLetter = char => char >= 'a' && char <= 'z';
var reverseByType = function(s) {
    // create two arrays
    // one for letters one for other characters
    const letters = [];
    const specials = [];
    // loop through the s, and push characters into either array
    for(const char of s){
        if(isLowerCaseLetter(char)){
            letters.push(char);
        }else{
            specials.push(char);
        }
    }
    // initialize an empty new string
    let result = '';
    // loop through s
    for(const char of s){
        // determine if the current character is a letter or not
            // if letter add the popped character from the letter array to the new string
        if(isLowerCaseLetter(char)){
            result += letters.pop();
        }else{
            // else add the popped chracter from the other array to the new string
            result += specials.pop();
        }
    }
    // return the new string
    return result;
};
// console.log(reverseByType(")ebc#da@f("), "(fad@cb#e)");
// console.log(reverseByType("z"), "z");
// console.log(reverseByType("!@#$%^&*()"), ")(*&^%$#@!");