# Recursion
### Alternative to traditional loops.

Traditional Loop.
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

## Recursion with Arrays
Best method is that if the loop cannot find anything falsey, should return `true` as everything match between two arrays in comparison.

*Note: .length check is removed to simplify the example below.*
```javascript
const match = function(array1, array2) {
  for (let i in array1) {

    if (Array.isArray(array1[i])) {
      // Condidion is `true` if the element is an Array itself

      if (!match(array1[i], array2[i])) {
      // Recursive check (1) if the sub arrays match, if `false` return `false`
        return false;
      }

    } else if (array1[i] !== array2[i]) {
      // Condition not an sub array but doesn't match return `false`
      return false; // (1)
    }
  }

  // If loop did not find any false then return true!
  return true;
};
```
Also see [more](conditional.md#built-in-function) for built-in functions.

## Recursion with Objects
Best method is that if the loop cannot find anything falsey, should return `true` as everything match between two objects in comparison.

*Note: .length check is removed to simplify the example below.*
```javascript
const eqObjects = function(object1, object2) {
  for (const key of Object.keys(object1)) {

    if (typeof object1[key] === 'object' && !Array.isArray(object2[key]) && object1[key] !== null) {
      // Check condition if it is an object and not an array

      if (!eqObjects(object1[key], object2[key])) {
      // Recursive check (1) if the sub objects match, if `false` return `false`
        return false;
      }
      
    } else if (object1[key] !== object2[key]) {
      // Condition not an sub object but doesn't match return `false`
      return false; // (1)
    }
  }

  // If loop did not find any false then return true!
  return true;
};
```
Also see [more](conditional.md#built-in-operator) for built-in operator.