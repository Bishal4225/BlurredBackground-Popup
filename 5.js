var  http = require('http');
var fs = require('fs');

http.createServer ((req,res)=>
 {
    fs.readFile('6.html',function(err,data){
    res.writeHead(200,{'content-Type':'text/HTML'});
    res.write(data);
    res.end();
    
 })
}).listen(8088);

 console.log("Server is Running....");