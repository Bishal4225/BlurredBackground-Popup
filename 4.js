var  http = require('http');

http.createServer ((req,res)=>
 {
    res.writeHead(200,{'content-Type':'text/HTML'});
    res.write(req.url);
    res.end();
 }).listen(8088);

 console.log("Server is Running....");