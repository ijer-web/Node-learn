
// part 1
// var EventEmitter = require('events').EventEmitter;
//
// var server = new EventEmitter;
//
// server.on('request', function (request) {
//     request.approved = true
// });
//
// server.on('request', function (request) {
// console.log(request);
// });
//
// server.emit('request',{from:'Клиент'});
// server.emit('request',{from:'Ищщо Клиент'});

// part 2
var EventEmitter = require('events').EventEmitter;
var server = new EventEmitter;

server.on('error', function (request) {
console.log('error');
});

server.emit('error');