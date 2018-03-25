var util = require('util');

function Animal(name) {
    this.name = name;
}

Animal.prototype.walk = function () {
    console.log('ходит ' + this.name);
};


function Rabbit(name) {
    this.name = name;
}

util.inherits(Rabbit, Animal);


Rabbit.prototype.jump = function () {
    console.log('and  прыгает  ' + this.name);
};

// using

var rabbit = new Rabbit('наш волшебный кролик');

rabbit.walk();
rabbit.jump();