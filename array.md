# Working with Array

## Loop
#### for
```javascript
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
```
#### while
```javascript
let i = 0;
while (i < array.length) {
  console.log(array[i]);
  i++;
}
```

#### for...of
```javascript
const array = [1, 2, 3]
for (const element of array) {
  console.log(element);
}

// Output
1
2
3
```

## Functions
#### .map()
Map will create a new array with new value added by function for every elements.

```javascript
// Example 1 (Classic)
const a = [1, 2, 3];
const b = a.map(function(c) {
  return c * 2
});
console.log(b) // Output [2 ,4 ,6]
```
```javascript
// Example 1
const a = [1, 2, 3];
const b = a.map((c) => c * 2);
console.log(b) // Output [2 ,4 ,6]
```
```javascript
// Example 2
const a = [1, 4, 9];
const b = a.map((c) => Math.sqrt(c));
console.log(b) // Output [1, 2, 3]
```


#### .filter()
Filter will output if the criteria match the elements. Boolean.
```javascript
// Example (Classic)
const a = [1, 4, 9];
const b = a.filter(function(c) {
  return c === 1;
});
console.log(b) // Output [1]

```
```javascript
// Example
const a = [1, 4, 9];
const b = a.filter(c => c === 1);
console.log(b) // Output [1]

```

#### .reduce()
```javascript
array.reduce(function(accumulator, currentValue, index, array) {
  console.log(currentValue);
  return newAccumulatorValue;
}, initialValue);

```