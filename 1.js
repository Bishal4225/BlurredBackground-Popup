const { Console } = require('console');
var http = require('http');
const url=require('url');
// const { a } = require('./2');
const server= http.createServer((req, res) => {

  res.setHeader('X-foo','bar');
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(req.url);
  
  const querydata= url.parse(req.url,true).query;
  const msg=querydata.name + "is" + querydata.age + "Years old";
  res.write(msg);
  res.end();
});

server.listen(8081);
console.log("Server is Running");

