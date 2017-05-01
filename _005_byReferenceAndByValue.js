//pass by value;
function change(a){
    a = 2;
}

var a  = 1;
change(a);
console.log(a);

//pass by reference;
function changeObj(c){
    c.firstname = 'Xin';
    c.lastname = 'Tu';
}

var c = {
    firstname: 'Yang',
    lastname: 'Yue'
}

changeObj(c);
console.log(c.firstname + ' ' + c.lastname);