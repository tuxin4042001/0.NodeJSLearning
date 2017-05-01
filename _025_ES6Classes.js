'use strict';
var Greetr = require('./_025_ES6ClassesModule');
var greetr1 = new Greetr();
greetr1.on('greet', function(data){
    console.log('Hello World 3 ' + data);
})
greetr1.greet('Yang Yue');