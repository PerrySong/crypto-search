const fs = require('fs'),
      TrieSearch = require('trie-search');


module.exports = {
    searchName(name) {
        const rawdata = fs.readFileSync('cryptocurrencies.json');  
        const symbolToName = JSON.parse(rawdata); 
        const ts = new TrieSearch();
        
        ts.addFromObject(symbolToName);
        let itemsArray = ts.get(name);
        const namesArray = itemsArray.map(item => {
            return item.value;
        })
        return namesArray;
    },
    searchSymbol(symbol) {
        const rawdata = fs.readFileSync('name-to-symbol.json');
        const nameToSymbol = JSON.parse(rawdata); 
        const ts = new TrieSearch();
        ts.addFromObject(nameToSymbol);

        const itemsArray = ts.get(symbol);
        const symbolsArray = itemsArray.map(item => {
            return item.value;
        })
        return symbolsArray;
    },
    nameToSymbols(name) {
        const rawdata = fs.readFileSync('name-to-symbol.json');
        const nameToSymbol = JSON.parse(rawdata); 
        const ts = new TrieSearch();
        ts.addFromObject(nameToSymbol);

        let itemsArray = ts.get(name);
        const namesArray = itemsArray.map(item => {
            return item.value;
        })
        return namesArray;
    },
    symbolToNames(symbol) {
        const rawdata = fs.readFileSync('cryptocurrencies.json');  
        const symbolToName = JSON.parse(rawdata); 
        const ts = new TrieSearch();
        ts.addFromObject(symbolToName);

        const itemsArray = ts.get(symbol);
        const symbolsArray = itemsArray.map(item => {
            return item.value;
        })
        return symbolsArray;
    },

}