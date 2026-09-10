// url: https://leetcode.com/problems/sort-characters-by-frequency/description/
// Given a string, s
// Sort it in decreasing order of freq for its characters
// each letter should appear alongside all its other characters if they have the same frequency
/**
 * @param {string} s
 * @return {string}
 */
// two approaches to solve in decreasing order based on frequency
    // approach 1: first do frequency, then do charCode to prevent mixing of different characters with the same frequency
    // approach 2: use a bucket sort to compose a new ordered string
    function frequencySort(s) {
        const cache = {}
        for(const char of s){
            cache[char] ??= 0
            cache[char]++
        }
        const sortedString = [...s].sort((a,b) => {
            aFrequency = cache[a]
            bFrequency = cache[b]
            if(aFrequency > bFrequency){
                return -1
            }else if(bFrequency > aFrequency){
                return 1
            }else{
                if(a < b){
                    return -1
                }else if(b < a){
                    return 1
                }else{
                    return 0
                }
            }
        }).join('')
    
        return sortedString 
    };
    
    function frequencySort(s) {
        const frequencyCache = {}
        for(const char of s){
            frequencyCache[char] ??= 0
            frequencyCache[char]++
        }
        const charCountCache = {}
        for(const char in frequencyCache){
            charCountCache[frequencyCache[char]] ??= []
            charCountCache[frequencyCache[char]].push(char)
        }
        let sortedString = ''
        for(let i = s.length; i > 0; i--){
            // loop where we create string with what we have in the charCountCache
            if(i in charCountCache){
                charCountCache[i].forEach(char => sortedString += char.repeat(i))
            }
        }
        return sortedString
    };