var http = require('http');
var fs = require('fs');


function handler(req,res) {
    if (req.url == '/') {
        fs.readFile('index.html',function (err,content) {
            if (err) {
                console.log(err);
                res.statusCode = 500;
                res.end('На сервере произошла ошибка');
                return;
            }

            
            res.end(content);
        });
    }
    else
    {
        res.statusCode = 404;
        res.end('Not Found');
    }
}

var server = new http.createServer(handler);
server.listen(3000);