const http = require('http')
const fs = require('fs')

http.createServer(function(req, res) {
  res.writeHead(200)
  fs.readFile('./index.html', function(err, data) {
    if (err) {
      console.log(err.stack)
    }
    res.write(data)
    res.end()
  })
}).listen(8881)

console.log(`listen at http://localhost:8881`)