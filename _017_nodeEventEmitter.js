//require emitter from node core
var Emitter = require('events');

var emtr = new Emitter();

emtr.on('greet', function(){
    console.log('somewhere, someone said hello');
});

emtr.on('greet', function(){
    console.log('a greeting occured');
});

emtr.emit('greet');