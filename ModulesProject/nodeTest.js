const main = require('./main.js');

let middle = main.middleIndx("Isa");
console.log(middle);

let obj1 = main.objCreator("person", "woman", 'isa');
console.log(obj1);

let obj2 = main.makeIntoObject([["person", "isa"]]);
console.log(obj2);
