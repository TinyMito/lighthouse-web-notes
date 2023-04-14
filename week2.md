# Week 2 Notes
### Primitive Data Types
Values are not Objects
```javascript
undefined
null
boolean
string
number
symbol
```

### First-Class Objects
JavaScript Functions as Objects

This means two important things:
> - Functions can be stored in variables and passed around
> - Functions can do everything that other objects can do (like having properties assigned to them)

```javascript
const myFunction = function() {
  // Code stuff here
}
function runFunction(f) {
  f();
}
runFunction(myFunction);
```

### Callback Functions
A callback function:

> - Is a function passed (by reference) into another function (let's call that one the "receiver" function)
> - The receiver function is therefore accepting behavior to perform by calling the callback function that it now has access to
> - The receiver function can decide to call the callback function at any time, as many times as it wants

```javascript
const myFirst = function(a, b) {
  console.log(a)
  b();
}

const mySecond = function() {
  console.log('Hi back to you!');
}

myFirst('Hello World', mySecond);

// Hello World
// Hi back to you!
```

### Higher-Order Functions
This means that built-in functions such as `forEach`, `filter`, and others can be called "Higher-Order Functions". 

## Quiz Notes

##### What is First-class object?
> An object with no restrictions on its creation, destruction, or usage.

##### Which of the following is the best definition of a Higher-order function?
> A function that takes a function as an argument, or returns a function as a result.

##### What is the rationale behind using Higher-order functions?
> They allow for creation of more powerful and generalized functions