//function statement
function greet(){
    console.log("hi");
}
greet();

//function are first-class, function can be seen as an special Object, and as an input
function logGreeting(fn){
    fn();
}
logGreeting(greet);

//function expression
var greetMe = function() {
    console.log("Hi Tony!");
}
greetMe();

//It's still first-class
logGreeting(greetMe);

//use funtion expression as a fly
logGreeting(function(){
    console.log("function expression as a fly");
})