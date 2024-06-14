/* ---
console.log(arguments)
console.log(require('module').wrapper)
-- */

// module.exports
const Calculator = require('./test-module-1')
const c = new Calculator()
c.add(34, 45)

// exports
/* --
const exportsObj = require('./test-module-2')
console.log(exportsObj)
console.log(exportsObj.add(12, 24))
-- */

// Named import pattern in node
const { add, sub, mul } = require('./test-module-2')
console.log(mul(10, 20))

// caching

require('./test-module-3')()
require('./test-module-3')()
require('./test-module-3')()
