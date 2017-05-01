var Emitter = require('events');
var util = require('util');

function Greetr(){
    this.greeting = 'Hello World!';
}

//util.inherits connect two different object, Greetr and Emitter
util.inherits(Greetr, Emitter);
//pass a data as parameter
Greetr.prototype.greet = function(data){
    console.log(this.greeting + data);
    this.emit('greet', data);
}

var greetr1 = new Greetr();
greetr1.on('greet', function(data){
    console.log('some one say hello world!' + data);
})
greetr1.greet('Xin Tu');