var http = require('http');

var server = http.createServer(function(req,res){
    if(req.url=="/"){
    console.log("homepage");
    res.end();
    }

}).listen(8080);
console.log("listening");
