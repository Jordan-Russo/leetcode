// url: https://leetcode.com/problems/partition-labels/?envType=daily-question&envId=2025-03-30
// given a string, s that is never empty and only has lowercase english characters
// return the size of partitions of this string so that:
    // each character in that partition only can be found within it and not in any other partitions.
// the sizes of each partition in order will be returned as an array of positive integers.
/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    // initialize partitionLengths as an empty array
    const partitionLengths = [];
    // create a cache of letters starting as an empty object
    const letters = {};
    // loop through the lowercase letters in the string to complete the cache
    for(let i = 0; i < s.length; i++){
        // check whether it's found in the cache or not
        const char = s[i];
        if(char in letters){
            // yes, update the last position
            letters[char][1] = i;
        }else{
            // no, initialize the key with the character and a start and end positions of the index
            letters[char] = [i,i];
        }
    }
    // initialize an empty seen set
    const seen = new Set();
    // initialize an endIndex as 0
    let end = 0;
    // initialize a startIndex at 0
    let start = 0;
    // loop through the characters
    for(let i = 0; i < s.length; i++){
        const char = s[i];
        // have we seen this letter before
        // yes
        if(!seen.has(char)){
        // no
            // add it seen set
            // update the endIndex
            seen.add(char);
            end = Math.max(end, letters[char][1]);
        }
        // have we reached the endIndex
        if(i === end){
            // yes
                // push the current partition size into the partitionsLength
                // endIndex - startIndex + 1
            partitionLengths.push(end - start + 1);
                // assign both end and start to be i + 1
            start = i + 1;
            end = start;
        }
    }
    // return the partitionLengths
    return partitionLengths;

};
// console.log(partitionLabels("ababcbacadefegdehijhklij"), [9,7,8]);
// console.log(partitionLabels("eccbbbbdec"), [10]);