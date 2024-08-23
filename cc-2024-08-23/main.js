// url: https://leetcode.com/problems/design-add-and-search-words-data-structure/description/
// Design a data structure that supports adding new words and finding if a string matches any previously added string.

// Implement the WordDictionary class:

//     WordDictionary() Initializes the object.
//     void addWord(word) Adds word to the data structure, it can be matched later.
//     bool search(word) Returns true if there is any string in the data structure that matches word or false otherwise. word may contain dots '.' where dots can be matched with any letter.

 

// Example:

// Input
// ["WordDictionary","addWord","addWord","addWord","search","search","search","search"]
// [[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]
// Output
// [null,null,null,null,false,true,true,true]

// Explanation
// WordDictionary wordDictionary = new WordDictionary();
// wordDictionary.addWord("bad");
// wordDictionary.addWord("dad");
// wordDictionary.addWord("mad");
// wordDictionary.search("pad"); // return False
// wordDictionary.search("bad"); // return True
// wordDictionary.search(".ad"); // return True
// wordDictionary.search("b.."); // return True

class WordDictionary{
    constructor(){
        this.tree = []
    }

    characterToPosition(character){
        return character.charCodeAt(0) - 'a'.charCodeAt(0)
    }

    addWord(string){
        let curr = this.tree
        for(const char of string){
            const position = this.characterToPosition(char)
            curr[position] ??= []
            curr = curr[position]
        }
        curr.inserted = true
        return null
    }

    search(string, curr = this.tree, pos = 0){
        if(!curr){return false}
        for(let i = pos; i < string.length; i++){
            const char = string[i]
            if(char !== '.'){
                const branch = this.characterToPosition(char)
                if(!curr[branch]){return false}
                curr = curr[branch]
            }else{
                for(let j = 0; j < 26; j++){
                    const option = curr[j];
                    if(!option){continue;}
                    const isFound = this.search(string, curr[j], i + 1)
                    if(isFound){return true}
                }
                return false
                // return true if even one works
            }
        }
        return 'inserted' in curr;
    }
}