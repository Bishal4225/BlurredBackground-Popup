var http = require('http');

//create a server object:


const server = http.createServer((req, res) => {
  res.write('Hello World!'); //write a response to the client
  res.write('This is bishal from Dumka\n' );
  res.write('Jharkhand' );
  res.end(); //end the response
});
server.listen(2000);
console.log("Server is Runing");