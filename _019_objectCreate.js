//use Object.create(prototype), create prototype, this pattern is much more clear than person1.prototype.firstname = ''
var person = {
    firstname: 'Xin',
    lastname: 'Tu',
    greet: function(){
        return this.firstname + ' ' + this.lastname;
    }
}

var person1 = Object.create(person);
person1.firstname = 'Yang';
person1.lastname = 'Yue';
console.log(person1.greet());