function Person(firstname, lastname){
    this.firstname = firstname;
    this.lastname = lastname;
}

Person.prototype.greet = function(){
    console.log('Hello ' + this.firstname + ' ' + this.lastname);
}

var John = new Person('John', 'Doe');
John.greet();
console.log(John.__proto__);