const search = require('./search')

search.searchIdAndSymbol("BitCoin")
.then(res => console.log(res))
.catch(err => console.log(err))