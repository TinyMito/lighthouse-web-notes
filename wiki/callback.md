# Callback
### Callback Functions

 - Is a function passed (by reference) into another function (let's call that one the "receiver" function)
 - The receiver function is therefore accepting behavior to perform by calling the callback function that it now has access to
 - The receiver function can decide to call the callback function at any time, as many times as it wants

```javascript
const myFirst = function(a, b) {
  console.log(a)
  b(); // Callback 'mySecond'
}

const mySecond = function() {
  console.log('Hi back to you!');
}

myFirst('Hello World', mySecond);

// Hello World
// Hi back to you!
```