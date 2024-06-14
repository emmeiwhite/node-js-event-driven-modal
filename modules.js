/* ---
console.log(arguments)
console.log(require('module').wrapper)
-- */

// module.exports
const Calculator = require('./test-module-1')
const c = new Calculator()
c.add(34, 45)
