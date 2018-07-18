# Crypto Search


## Usage
	
   Include the crypto-search folder in to your project. 
   
Go to your project directory and run following command in command line.   
``` shell
	$ npm install trie-search --save
```

Require the object in your code
``` js
	const cryptoSearch = require('<the folder path>/crypto-search/search')
    
``` 
## Functions and examples:

	
* searchNames(string)
```js
	const cryptoSearch = require('./crypto-search/search')
    
    //searchNames(prefix): Return all the cryptocurrencies' name whose name starts with the given prefix
    
    cryptoSearch.searchNames("btc")
    .then(names => console.log(names)) // [ 'BTC Lite', 'BTCMoon' ]
    .catch(err => console.log(err))
```

* searchSymbols(string)
```js

	const cryptoSearch = require('./crypto-search/search')

    //searchSymbols(prefix): Return all the cryptocurrencies' symbol whose symbol starts with the given prefix
    
    cryptoSearch.searchSymbols("btc")
    .then(symbols => console.log(symbols))
    .catch(err => console.log(err))
                        /* [ 'BTC',
                            'BTCL',
                            'BTCL*',
                            'BTCM',
                            'BTCR',
                            'BTCRY',
                            'BTCRED',
                            'BTCA',
                            'BTCN',
                            'BTCC',
                            'BTCH',
                            'BTCP',
                            'BTCS',
                            'BTCS*',
                            'BTCD',
                            'BTCE',
                            'BTCE*',
                            'BTCGO',
                            'BTCZ' ] */
```

* namesToSymbols(string)

```js

	const cryptoSearch = require('./crypto-search/search')
    
    //namesToSymbols(prefix) return all the cryptocurrencies' symbol whose name starts with the given prefix
    
    cryptoSearch.namesToSymbols("btc")
    .then(symbols => console.log(symbols)) /* [ 'BTCL', 'BTCM' ] */
    .catch(err => console.log(err))
```

* symbolsToNames(string)

```js

	const cryptoSearch = require('./crypto-search/search')
    
    //symbolsToNames(prefix) return all the cryptocurrencies' name whose symbol starts with the given prefix
    
    cryptoSearch.symbolsToNames("btc")
    .then(names => console.log(names)) 
    .catch(err => console.log(err))
                            /* [ 'Bitcoin',
                              'BTC Lite',
                              'BitluckCoin',
                              'BTCMoon',
                              'BitCurrency',
                              'BitCrystal',
                              'Bitcoin Red',
                              'Bitair',
                              'BitcoiNote',
                              'Bitcoin Core',
                              'Bitcoin Hush',
                              'Bitcoin Private',
                              'Bitcoin Scrypt',
                              'Bitcoin Supreme',
                              'BitcoinDark',
                              'EthereumBitcoin',
                              'BitcoinEX',
                              'BitcoinGo',
                              'BitcoinZ' ] */
```

* searchIdAndSymbol(string)

```js

    const search = require('./search')
    //This function is case insensitive, and need a parameter of currency's name.

    search.searchIdAndSymbol("BitCoin")
    .then(res => console.log(res)) // { id: 1, symbol: 'BTC' }
    .catch(err => console.log(err))
```