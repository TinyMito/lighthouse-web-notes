# Working with Array

## Classic
### for
```javascript
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
```
### while
```javascript
let i = 0;
while (i < array.length) {
  console.log(array[i]);
  i++;
}
```

## ES6
### for...of
```javascript
for (const element of array) {
  console.log(element);
}
```

## Functions
### .map()
```javascript
array.map(function(element, index, array) {
  console.log(element);
  return newValue;
});
```

### .filter()
```javascript
array.filter(function(element, index, array) {
  console.log(element);
  return condition;
});

```

### .reduce()
```javascript
array.reduce(function(accumulator, currentValue, index, array) {
  console.log(currentValue);
  return newAccumulatorValue;
}, initialValue);

```