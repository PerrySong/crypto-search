const TrieSearch = require('trie-search'),
      cryptocurrencies = require('./cryptocurrencies')
      

      
module.exports = {
    searchName(name) {
        
        const ts = new TrieSearch();
        ts.addFromObject(cryptocurrencies.nameToSymbol);
        let itemsArray = ts.get(name);
        
        const namesArray = itemsArray.map(item => {
            return item._key_;
        })
        
        return namesArray;
    },

    searchSymbol(symbol) {
        const ts = new TrieSearch();
        ts.addFromObject(cryptocurrencies.symbolToName);
        let itemsArray = ts.get(symbol);
        
        const symbolsArray = itemsArray.map(item => {
            return item._key_;
        })
        return symbolsArray;
    },

    nameToSymbols(name) {
        const ts = new TrieSearch();
        ts.addFromObject(cryptocurrencies.nameToSymbol);
        
        let itemsArray = ts.get(name);
        const symbolsArray = itemsArray.map(item => {
            return item.value;
        })
        
        return symbolsArray;
    },

    symbolToNames(symbol) {
        const ts = new TrieSearch();
        ts.addFromObject(cryptocurrencies.symbolToName);
        let itemsArray = ts.get(symbol);
        
        const namesArray = itemsArray.map(item => {
            return item.value;
        })
        
        return namesArray;
    },

}