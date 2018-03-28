var http = require("http");
var os = require("os");
var greeting = require("./greeting");

var user = require("./5 lesson/user/index");

// var SingleTone = require("./SingleTone");

var userName = os.userInfo().username;

// console.log(userName);
//
// console.log('Дата запроса' + greeting.date);
// console.log(greeting.getMessage(userName));




var vasia = new user.User('Вася');
var petia = new user.User('Петя');

vasia.hello(petya);

//
// var SingleTone = new SingleTone();

// eugene.sayHi();

// var a = new SingleTone();
// var b = new SingleTone();
//
// console.log(a == b); // true