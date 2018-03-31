var http = require('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer(function (req,res) {
    var info;

    if (req.url == '/') {
       fs.readFile('index.html',function(err, info) {

           if (err) {
               console.error(err);
               res.statusCode = 500;
               res.end('Error on server');
               return
           }

           res.end(info);
           res.statusCode = 200;

       });
    }
    else {
        res.statusCode = 404;
        res.end('Page not found');
    }
}).listen(3000,'127.0.0.1');

console.log('server is running');






