// const middleIndx = (str) => { // function to key in the middle indx
//  let middle = (str.length / 2 ) - 1;
//  let char = str.chartAt(middle);
//  return char;
// };

// const objCreator = (obj, key, value) =>{ // function to create objs (really useful) I still not know how to give the name of the object
//   obj = Object.create(null);
//   obj[key] = value;
//   return obj;
// };
// objCreator("person", "woman", 'isa'); //{ woman: 'isa' }

// const makeIntoObject = (arr) => { // function to create objs
//   return arr.reduce((acc, el)=> {
//     acc[el[0]] = el[1];
//     return acc;
//   }, {});
// };
// makeIntoObject([["person", "isa"]]) // { person: 'isa' }

// function middleIndx(str) {   // returns the middle letter
//   if(str.length % 2){
//     let char = str.charAt(Math.floor(str.length/2));
//     return char;
//   }else{
//     let char = str.charAt(str.length/2) + str.charAt((str.length/2) + 1);
//     return char;
//   };
// };
//   console.log(middleIndx("Adia"))


module.exports = {
  middleIndx(str) {   // returns the middle letter
    if(str.length % 2){
      let char = str.charAt(Math.floor(str.length/2));
      return char;
    }else{
      let char = str.charAt(str.length/2) + str.charAt((str.length/2) + 1);
      return char;
    };
  },

  makeIntoObject(arr) { // returns a object with key and value;
    return arr.reduce((acc, el)=> {
      acc[el[0]] = el[1];
      return acc;
    }, {});
  },
  objCreator(obj, key, value) {   // returns another object with his key and value;
    obj = Object.create(null);
    obj[key] = value;
    return obj;
  },
}
