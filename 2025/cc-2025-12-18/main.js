/**
 * @param {string[]} words
 * @return {string[]}
 */
var removeAnagrams = function(words) {
    let left = 0;
    const filtered = [words[0]];
    // start with the first word as a list
    for(let right = 1; right < words.length; right++){
        // anagram check for left and right
            // if anagrams do not push rush
        if(!areAnagrams(words[left], words[right])){
            filtered.push(words[right]);
            left = right;
        }
            // if not anagrams
                // push right
                // reassign left as right
    }
    return filtered;
};
function areAnagrams(word1, word2){
    // check the length of both words
        // if unequal return false
    if(word1.length !== word2.length){return false}
    // check the character content
        // create a letter cache for word1
    const cache = {};
    for(const letter of word1){
        cache[letter] = cache[letter] + 1 || 1;
    }
        // verify that word cache on word2
    for(const letter of word2){
        if(!cache[letter]){return false}
        cache[letter]--;
        // if there are errors return false
    }
    // return true
    return true;
}