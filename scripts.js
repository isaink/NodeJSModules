const math = require('./math-module.js');

let maths = math.mult(2,4);
let sums = math.sum(2,3);
let divs = math.div(2,1);
let squares = math.square(2)
console.log(maths)
console.log(sums)
console.log(divs)
console.log(squares)

const strings = require('./strings-module.js');

let revs = strings.rev("isa");
let capss = strings.caps("isa")
console.log(revs)
console.log(capss)
