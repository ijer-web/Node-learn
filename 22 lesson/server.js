var http = require('http');
var server = new http.Server(function (req,res) {


});//

server.listen(3000);


setTimeout(function() {server.close(function () {
    // process.exit();
    // clearInterval(timer);

});
},2500);

var timer = setInterval(function () {
    console.log(process.memoryUsage());
},1000);

timer.unref();