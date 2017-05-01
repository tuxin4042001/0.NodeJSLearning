"use strict";
var person = {
    firstName: "Xin",
    lastName: "Tu",
    greet: function(){
        console.log("Hello " + this.firstName + " " + this.lastName);
    }
};
person.greet();

console.log(person["firstName"]);
