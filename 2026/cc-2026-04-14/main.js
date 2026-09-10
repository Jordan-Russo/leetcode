/**
 * @param {string} caption
 * @return {string}
 */
function generateTag(caption){
    caption = caption.trim();
    const words = caption.split(' ');
    words[0] = words[0].toLowerCase();
    for(let i = 1; i < words.length; i++){
        if(!words[i]){continue}
        words[i] = pascalCase(words[i]);
    }
    return ('#' + words.join('')).slice(0, 100);
};
function pascalCase(word){
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
}