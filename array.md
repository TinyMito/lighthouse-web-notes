# Table of Content
- [Structure](#structure)

# Array
#### Structure
This is an Array.
```javascript
[1, 2, 3]
```
Each of these are elements.
```javascript
1, 2, 3
```

#### Access an Array
```javascript
myArray[index]
```
#### Total element of an Array
```javascript
myArray.length
```

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
//1
//2
//3
```

## Built-In Functions
#### .filter()
Filter only the Boolean: true element.
```javascript
// Example 
const a = [1, 4, 9];
const b = a.filter(function(c) {
  return c === 1;
});
console.log(b) // [1]
```

#### .push()
To add element to the end.
```javascript
// Example 
let a = [1, 2, 3]
a.push(4)
console.log(a) // [1, 2, 3, 4]
```

#### .slice()
Copy or extract a portion of the array.
```javascript
// Example 
let a = [1, 2, 3]
let b = a.slice(1,2) // (index, index)
console.log(b) // 2
```

#### .splice()
Find and replace / add new element(s).
```javascript
// Example 
let a = [1, 2, 3]
a.splice(1,1,'Alpha','Beta','Cool')
console.log(a) // [ 1, 'Alpha', 'Beta', 'Cool', 3 ]
```

#### .indexOf()
Find the element index position.
```javascript
// Example 
let a = [1, 2, 3, 4]
let b = a.indexOf(3)
console.log(b) // 2
```

## Uncommon Functions
#### .map()
Create a new array with new value each.
```javascript
// Example 1 
const a = [1, 2, 3];
const b = a.map(function(c) {
  return c * 2
});
console.log(b) // [2 ,4 ,6]
```

#### .reduce()
Total up all the elements.
```javascript
// Example 
const a = [1, 2, 3]
const b = a.reduce(function(c, d) {
  return c + d;
});
console.log(b) // 6
```

#### .pop()
To remove the last element.
```javascript
// Example 
const a = [1, 2, 3]
const b = a.pop(); // Can use to select last element
console.log(a) // [1, 2]
console.log(b) // 3
```

#### .shift()
To remove the first element.
```javascript
// Example 
const a = [1, 2, 3]
const b = a.shift(); // Can use to select last element
console.log(a) // [2, 3]
console.log(b) // 1
```

#### .forEach()
Similar to for...of.
```javascript
// Example 
let a = [1, 2, 3]
a.forEach(function(b) {
  console.log(b);
})
// 1
// 2
// 3
```

#### .sort()
Sort ascending by numeric or alpha
```javascript
// Example 
let a = [3, 1, 2]
a.sort()
console.log(a) // [1, 2, 3]
```
Sort descending by numeric or alpha
```javascript
// Example 
let a = [3, 1, 2]
a.sort((a, b) => b - a)
console.log(a) // [3, 2, 1]
```

#### .reverse()
Reverse the order (not sort)
```javascript
// Example 
let a = [3, 1, 2]
a.reverse()
console.log(a) // [2, 1, 3]
```

#### .join()
Convert array into string with comma. Need to be in new variable.
```javascript
// Example 
let a = [1, 2, 3, 4, 'Cool']
let b = a.join()
console.log(b) // 1,2,3,4,Cool
```