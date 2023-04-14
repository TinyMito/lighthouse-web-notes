# Week 3 Notes
### Mocha & Chai
This is used for testing codes.

### Recursion
Alternative to traditional loops.
```javascript
let number = 0;
while (number <= 12) {
  console.log(number);
  number += 2;
}
```

Recursion calling back to the its' function until the condition is **falsey**.
```javascript
function countEvenToTwelve(number) {
  if (number <= 12) {
    console.log(number);
    countEvenToTwelve(number+2);
  }
}
countEvenToTwelve(0);
```

## Quiz Notes

##### How are Arrow Functions () => {} different than traditional function expressions?
> Arrow Functions do not declare their own scope.

##### Which statement about recursion is true?
> - Every recursive function must stop calling itself at some point using a base case, otherwise it will just continue to call itself forever, like an infinite loop.