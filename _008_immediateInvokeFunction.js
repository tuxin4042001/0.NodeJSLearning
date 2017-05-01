var firstname = 'Yue';
var lastname = 'Yang';

(function(midname){
    var firstname = 'Xin';
    var lastname = 'Tu';
    console.log(firstname + ' ' + lastname);
    console.log(midname);
}('Doe'));

console.log(firstname + ' ' + lastname);