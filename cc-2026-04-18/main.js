/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var hasMatch = function(s, p) {
    const target = p.indexOf('*');
    const leftPattern = p.slice(0, target);
    const rightPattern = p.slice(target + 1);
    let leftEnd = s.indexOf(leftPattern);
    if(leftEnd === -1){return false}
    if(leftPattern.length > 0){
        leftEnd += leftPattern.length - 1;
    }
    if(p[0] === '*'){leftEnd = -1}
    const rightStart = s.lastIndexOf(rightPattern);
    if(rightStart === -1){return false}
    return leftEnd < rightStart;
};