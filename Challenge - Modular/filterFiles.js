const fs = require('fs')
const path = require('path')

const folder = process.argv[2]
// var process.argv = ['node', 'file.js', ‘x’, ‘y’];
// var process.argv [0] = node;
// var process.argv [1]= file.js;
// var process.argv[2] = x;
// var process.argv[3] = y;
// const ext = '.' + process.argv[3]

const extension(folder,ext,callback){ // function that takes as arguments a folder name, an extension, and a callback function.
  fs.readdir(folder, (err, files) => {
    if (err) {
      console.error(err);
      return;
    }

    files.filter((file) => { //Change the forEach method call to filter
      if (path.extname(file) === ext) {
        console.log(file)
      }
    })
  })
};
