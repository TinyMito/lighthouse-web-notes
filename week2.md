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

### Higher-Order Functions
This means that built-in functions such as `forEach`, `filter`, and others can be called "Higher-Order Functions". 

## Quiz Notes

##### What is First-class object?
> An object with no restrictions on its creation, destruction, or usage.

##### Which of the following is the best definition of a Higher-order function?
> A function that takes a function as an argument, or returns a function as a result.

##### What is the rationale behind using Higher-order functions?
> They allow for creation of more powerful and generalized functions