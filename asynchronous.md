# Asynchronous
### Example
The script will wait `.` until the file is readable.
```javascript
const fs = require('fs')

const wait = setInterval(() => {
  process.stdout.write(`.`);
}, 30);

const done = (error, data) => {
  if (error) {
    console.log(error); // If the file cannot read.
    return;
  }

  clearInterval(wait);
  console.log('Data: ', data.slice(0,50));
};

fs.readFile('sample.txt','utf-8', done);
```