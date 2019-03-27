var string1 = 'Tampa';
var string2 = string1;
string1 = 'Venice';

console.log(string2); // pass by value // 'Tampa'


////////////////////////////////


var person1 = {
    name: 'Alex',
    age: 30
};

var person2 = person1;

person2.name = 'Kyle';

console.log(person1); // pass by ref // 'kyle'