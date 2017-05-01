var util = require('util');

function Person(){
    this.firstname = 'Xin';
    this.lastname = 'Tu';
}

Person.prototype.greet = function(){
    console.log('Hello ' + this.firstname + this.lastname);
}

function Policeman(){
    Person.call(this);
    this.badgenumber = '1234';
}

//util.inherits(Policeman, Person)只能让policeman使用person.prototype.greet, 但是person.firstname and person.lastname不能用;
//如果想使用person.property和person.method需要使用person.call(this);
util.inherits(Policeman, Person);
var officer = new Policeman;
officer.greet();