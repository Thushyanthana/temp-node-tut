const names = require('./4-names')
const sayHi = require('./5-utils')
console.log(names)

sayHi('Susan')
sayHi(names.john)
sayHi(names.peter)

const data=require('./6-alternative-flavour')
console.log(data.person)
console.log(data.items)

require('./7-mind-grenede')