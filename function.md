# Function
### Classic
```javascript
const myFunction = function (a, b) {
  return a + b;
}
```
### ES6 Shorthand
```javascript
const myFunction = (a, b) => a + b;
```

### Built-In Functions
#### Numbers
```javascript
Math.random(x)  // Random Number 0 to 1 with decimal
Math.floor(x)   // Round number to nearest integer
Math.sqrt(x)    // Returns the positive square root of x
Math.abs(x)     // Returns the absolute value of x
x.toFixed(2)    // Decimal add 2 decimals
x.toString(var)    // Convert to string
```

#### Delays
```javascript
setTimeout(function() {},1000)    // Set delay timer
setInterval(function() {},30)     // Set a timer runs on interval
clearInterval()                   // Stop the interval timer
```

#### File System
```javascript
require()
fs.readFile('path','option',callback)     //for reading the contents of a file asynchronously
fs.writeFile()    //for writing data to a file asynchronously
fs.existsSync()   //for checking if a file or directory exists
fs.mkdir()        //for creating a new directory
fs.readdir()      //for reading the contents of a directory
fs.stat()         //for getting information about a file or directory
fs.rename()       //for renaming a file or directory
fs.unlink()       //for deleting a file
```