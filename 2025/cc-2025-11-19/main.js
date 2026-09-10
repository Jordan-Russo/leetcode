/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
    // initialize position of name at 0
    let pos = 0;
    // loop through typed
    for(let i = 0; i < typed.length; i++){
        // if typed[i] and name[position] are equal
        if(typed[i] === name[pos]){
            // increment position
            pos++
        }
        // else if typed[i] and name[position - 1] are unequal
        else if(typed[i] !== name[pos - 1]){
           // return false
           return false;
        }
    }
    // return whether position === name.length
    return pos === name.length;
};