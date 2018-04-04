var http = require('http');
var fs = require('fs');

new http.Server(function (req, res) {

    if (req.url == '/big.html') {
        var file = new fs.ReadStream('big.html');
        res.setHeader("Content-Type",'text/html; charset=utf-8');

        sendFile(file, res);
    }


}).listen(3000);


function sendFile(file, res) {
    file.on('readable', write);
    console.log('read');
    function write() {
        var fileContent = file.read();

        if (fileContent && !res.write(fileContent)) {
            file.removeListener('readable', write);
            res.once('drain', function () {
                file.on('readable', write);
                write();
            })
        }

    }

    file.on('end', function () {

        res.end();
    })
}