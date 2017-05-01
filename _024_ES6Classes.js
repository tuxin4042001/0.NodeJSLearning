'use strict';
class Person{
    constructor(firstname, lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }

    greet(){
        console.log('Hello, ' + this.firstname + ' ' + this.lastname);
    }
}

var person1 = new Person('Xin', 'Tu');
person1.greet();