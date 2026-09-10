/**
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function(text) {
    // find the # of spaces
    let spaceCount = 0;
    for(const char of text){
        if(char === ' '){spaceCount++}
    }
    // create a words array
    const words = [];
    // initialize a word as an empty string
    let word = '';
    // trim the text (both start and end)
    const trimmedText = text.trim();
    // loop through the trimmed text
    for(let i = 0; i < trimmedText.length; i++){
        const isLetter = trimmedText[i] !== ' '
        // if the current character is not a space
        if(isLetter){
            // concatenate the current character in the trimmed text to the word string
            word += trimmedText[i];
        }
        // when the next character is not a lowercase english letter and the current one is
        if(isLetter && (trimmedText[i + 1] === ' ' || !trimmedText[i + 1])){
            // push the word string into the words array
            words.push(word);
            // set the word string back to an empty string
            word = '';
        }
    }
    let spaceDistance = 0;
    if(words.length > 1){
        spaceDistance = Math.trunc(spaceCount / (words.length - 1))
    }
    let leftOverSpaces = spaceCount;
    if(words.length > 1){
        leftOverSpaces = spaceCount % (words.length - 1);
    }
    // find the quotient of spaces / (wordcount - 1)
        // if there's only one word don't do this
        // and truncate it for the # of spaces between words
    // concatate the modulo (remainder # of spaces after the last word)
    // return that modified string
    return words.join(' '.repeat(spaceDistance)) + ' '.repeat(leftOverSpaces);
};