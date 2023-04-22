# Asynchronous
## Example
This is similar as synchronous with `try` and `catch` but in a form of function that allows more operation.

Solution of this problem is to use `Promise()` for asynchronous.
```javascript
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
```
##### Downside❗️ To catch error and handle `error` will be in multiple nested within the function, this will be really hard to debug if anything goes wrong.

See more on [Promise](promise.md)...