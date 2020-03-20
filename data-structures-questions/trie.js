class Trie {
    constructor () {
      this.root = []
    }
  
  
    //insert a word into the trie
    insert (word) {
      
    }
  
    
    //returns the word if its in the trie
    search (word) {
         let root = this.root
            while (word.length > 0) {
                let letter = word[0]
                if (root[letter])
                    // chop off the first letter
                    word = word.substr(1)
                    root = root[letter]
                }
                else {
                    return false
                }
    }
  
  
    // Returns if there is any word in the trie that starts with the given prefix
    startsWith (prefix) {
      
    }
  }