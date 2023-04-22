const fs = require('fs')

const fetch = (error, data) => {
  if (error) {
    console.log(error); // If the file cannot read.
    return;
  }
  console.log('Data: ', data);
};

fs.readFile('sample.txt','utf-8', fetch);
console.log('Next Function');