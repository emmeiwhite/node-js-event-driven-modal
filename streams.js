const fs = require('fs')

const server = require('http').createServer()

server.on('request', (req, res) => {
  /* ---  Solution-1
  fs.readFile('test.txt', (err, data) => {
    if (err) return console.log(err)

    res.end(data)
  })
  --- */
  // Solution-2 | Stream (Consumes chunks of Data - piece by piece) | No need to save data in the data variable in this case

  const readable = fs.createReadStream('test.txt')

  // we are no reading file piece by piece in chunks and as soon as one chunk is ready we are writing it via writable stream
  readable.on('data', chunk => {
    res.write(chunk) // writable stream
  })

  // other event to check when all the file is read chunk by chunk

  readable.on('end', () => {
    res.end()
  })
})

server.listen(8000, () => {
  console.log('listening ...')
})
