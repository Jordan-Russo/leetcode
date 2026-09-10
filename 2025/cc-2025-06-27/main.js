// url: https://leetcode.com/problems/divide-a-string-into-groups-of-size-k/
/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
// given three things:
    // a string of characters
    // a number that's a positive integer, k
    // a character that is used for padding
// return an array that contains partitions of s, each having length k, and if they can't be length k then use filling to extend their length
function divideString(s, k, fill){
    // initialize partitions array as empty
    const partitions = [];
    // initialize an empty substring
    let substring = '';
    // loop through the string
    for(const char of s){
        // add characters to substring
        substring += char;
        // check if substring is length k
        if(substring.length === k){
            // if so, push substring into partitions array
            partitions.push(substring);
            // reassign substring to be empty
            substring = '';
        }
    }
    // if substring is not empty
    if(substring){
        // add padding to the end of the remaining substring
        // push the substring into the partitions array
        partitions.push(substring.padEnd(k, fill));
    }
    // return the partitions array
    return partitions;
};
// console.log(divideString("abcdefghi", 3, 'x'), ["abc","def","ghi"]);
// console.log(divideString("abcdefghij", 3, 'x'), ["abc","def","ghi", "jxx"]);