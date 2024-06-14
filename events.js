const EventEmitter = require('events')

class Sales extends EventEmitter {
  constructor() {
    super()
  }
}

const myEmitter = new Sales()

myEmitter.on('newSale', () => {
  console.log('There was a new sale')
})

myEmitter.on('newSale', () => {
  console.log('Customer is Imran')
})

myEmitter.on('newSale', stock => {
  console.log(`There are no ${stock} items in the stock`)
})

myEmitter.emit('newSale', 23) // Registering or setting up an event
