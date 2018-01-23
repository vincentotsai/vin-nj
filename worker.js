debugger;
const http = require('http')
const log = console.log.bind(console)
debugger;

http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type': 'text/plain'})
  res.end('Hello totsai!\n Savey!!')
}).listen(Math.round((1+ Math.random())*1000), '127.0.0.1')
log('Server on!')