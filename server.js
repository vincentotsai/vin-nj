const http = require('http')
const port = 1337

http.createServer((req, res)=>{
  res.writeHead(200, {'Content-Type': 'Text/plain'})
  res.end('DeepBreath\n')
}).listen(port, '127.0.0.1')
console.log(`Server running at http://127.0.0.1:${ port }`)