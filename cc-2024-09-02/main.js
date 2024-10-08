// url: https://leetcode.com/problems/implement-trie-prefix-tree/
// A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.

// Implement the Trie class:

//     Trie() Initializes the trie object.
//     void insert(String word) Inserts the string word into the trie.
//     boolean search(String word) Returns true if the string word is in the trie (i.e., was inserted before), and false otherwise.
//     boolean startsWith(String prefix) Returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise.

 

// Example 1:

// Input
// ["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
// [[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
// Output
// [null, null, true, false, true, null, true]

// Explanation
// Trie trie = new Trie();
// trie.insert("apple");
// trie.search("apple");   // return True
// trie.search("app");     // return False
// trie.startsWith("app"); // return True
// trie.insert("app");
// trie.search("app");     // return True

class Trie{
    constructor(){
        this.tree = []
    }

    characterToPosition(character){
        return character.charCodeAt(0) - 97
    }

    insert(string){
        let curr = this.tree
        for(const char of string){
            const position = this.characterToPosition(char)
            curr[position] ??= []
            curr = curr[position]
        }
        curr.inserted = true
        return null
    }

    search(string){
        let curr = this.tree
        for(const char of string){
            const position = this.characterToPosition(char)
            if(!curr[position]){return false}
            curr = curr[position]
        }
        return Boolean(curr.inserted)
    }

    startsWith(string){
        let curr = this.tree
        for(const char of string){
            const position = this.characterToPosition(char)
            if(!curr[position]){return false}
            curr = curr[position]
        }
        return true
    }
}