var http = require('http');
var fs = require('fs');

new http.Server(function (req,res) {

    fs.readFile('big.html',function (err,content) {
        if (err) {
            res.statusCode = 500;
            res.end('Server Error');
        } else {
            res.setHeader("Content-Type",'text/html; charset=utf-8');
            res.end(content);
        }
    });

}).listen(3000);