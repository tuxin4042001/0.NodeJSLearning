'use strict';
var Emitter = require('events');

module.exports = class Greetr extends Emitter{
    constructor(){
        super();
        this.greeting = 'Hello World!';
    }

    greet(data){
        console.log(this.greeting + ': ' + data);
        this.emit('greet', data);
    }
}