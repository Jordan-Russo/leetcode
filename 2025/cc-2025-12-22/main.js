/**
 * @param {string[]} code
 * @param {string[]} businessLine
 * @param {boolean[]} isActive
 * @return {string[]}
 */
var validateCoupons = function(code, businessLine, isActive) {
    // give two arrays of the codes, of the businesses they are for, and whether or not they work
    // make an aggregate array that has all 3
    const data = code.map((value, i) => [code[i], businessLine[i], isActive[i]])
    // do a filter for validation
        .filter(([a,b,c]) => a.length > 0 && isAlphaNumerical(a) && isValidBusinessLine(b) && c)
        // that checks for a non-empty code
        // that checks for alphanumerical code
        // that checks for a businessLine string that's either "electronics", "grocery", "pharmacy", "restaurant"
        // that checks that isActive[i] is true
        .sort(([codeA, businessLineA], [codeB, businessLineB]) => {
            if(businessLineA === businessLineB){
                if(codeA < codeB){
                    return -1;
                }else if(codeB < codeA){
                    return 1;
                }
                return 0;
            }else{
                if(businessLineA < businessLineB){
                    return -1;
                }else if(businessLineB < businessLineA){
                    return 1;
                }
            }
        })
    // followed by a sort that
        // prioritizes a -> z businessLine sorting, then a -> z code sorting
        .map((entry) => entry[0]);
    // isolate the codes, map them and return them in that sorted order
    // return a final result array sorted where only the codes that are active, have the correct format, aren't empty, and are sorted by the order of businessLines alphabetically are used as well as ascending sorting within each businessLine as well.
    return data;
};
function isAlphaNumerical(string){
    for(const char of string){
        const isValid = char >= 'a' && char <= 'z' 
        || char >= 'A' && char <= 'Z' 
        || char === '_' 
        || char >= '0' && char <= '9';
        if(!isValid){return false}
    }
    return true;
}
function isValidBusinessLine(string){
    return ["electronics", "grocery", "pharmacy", "restaurant"].includes(string);
}