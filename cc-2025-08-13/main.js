/**
 * @param {string[]} words
 * @param {number[]} groups
 * @return {string[]}
 */
var getLongestSubsequence = function(words, groups) {
    const result = [words[0]];
    let nextGroup = Number(!groups[0]);
    for(let i = 1; i < words.length; i++){
        if(groups[i] === nextGroup){
            result.push(words[i]);
            nextGroup = Number(!nextGroup);
        }
    }
    return result;
};