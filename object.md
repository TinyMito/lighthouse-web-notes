# Object
### Structure
This is an object literal.
```javascript
{
  key: 'property'
}
```
The only time for key to use ' ' is when there is a space.
```javascript
{
  'key space': 'property'
}
```

### Access the Object
```javascript
let a = {
  key: 'property',
}
console.log(a.key) // property
```
```javascript
let a = {
  key1: 'property',
  key2: {
    subKey1: 'subProperty'
  }
}
console.log(a.key2.subKey1) // subProperty
```
```javascript
let a = {
  key1: 'property',
  key2: {
    subKey1: 'subProperty',
    subKey2: ['One', 'Two', 'Three']
  }
}
console.log(a.key2.subKey2[1]) // Two

// If the key has space or special character, you will to use brackets
console.log(a['key2']['subKey2'][1]) // Two
```

### Total key/property of an Object
```javascript
Object.keys(a).length
Object.values(a).length
```

## Loop / Iteration
### for...in
List the key from the object.
```javascript
let a = {
  key1: 'One',
  key2: 'Two',
  key3: 3
}

for (const key in a) {
  console.log(key);
}
// key1
// key2
// key3
```

### for...of
List of the property with `Object.values()`
```javascript
let a = {
  key1: 'One',
  key2: 'Two',
  key3: 3
}

for (const key of Object.values(a)) {
  console.log(key);
}
// Output property (of)
// One
// Two
// 3

// Output index (in) + Object.values/keys/entries
// 0
// 1
// 2
```

## Built-In Functions
### .keys()
Output the `key`.
```javascript
let a = {
  key1: 'One',
  key2: 'Two',
  key3: 3
}
console.log(Object.keys(a)) // [ 'key1', 'key2', 'key3' ]
```

### .values()
Output the `property`.
```javascript
let a = {
  key1: 'One',
  key2: 'Two',
  key3: 3
}
console.log(Object.values(a)) // [ 'One', 'Two', 3 ]
```

### .entries()
Converts each `key: property` into array.
```javascript
let a = {
  key1: 'One',
  key2: 'Two',
  key3: 3
}
let b = Object.entries(a);
console.log(b);
// [ [ 'key1', 'One' ], [ 'key2', 'Two' ], [ 'key3', 3 ] ]
```