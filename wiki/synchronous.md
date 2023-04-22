# Synchronous
### Simple
If the readFileSync ends up in error, the entire code halt.
```javascript
const fs = require('fs');
const data = fs.readFileSync('samples.txt', 'utf-8'); // CODE HALT HERE
console.log('Data: ', data);
console.log('Next Function');
```

### Workaround
With `try` `catch` to allow next function to keep operating if the readFileSync ends up in error.
```javascript
try {
  const fs = require('fs');

  const data = fs.readFileSync('sample.txt', 'utf-8');
  console.log('Data: ', data);
} catch (error) {
  console.log(error);
}
console.log('Next Function');
```