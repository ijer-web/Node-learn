var http = require('http');
var fs = require('fs');

new http.Server(function (req, res) {

    if (req.url == '/big.html') {
        var file = new fs.ReadStream('big.html');
        res.setHeader("Content-Type", 'text/html; charset=utf-8');

        sendFile(file, res);
    }


}).listen(3000);


function sendFile(file, res) {
    file.pipe(res);

    file.on('error', function (err) {
        res.statusCode = 500;
        res.end('Server Error');
        console.error(err);
    })}