# Working with Object

## Loop
#### for...in
```javascript
for (const key in object) {
  if (object.hasOwnProperty(key)) {
    console.log(`Key: ${key}, Value: ${object[key]}`);
  }
}
```

#### for...of
```javascript
for (const value of Object.values(object)) {
  console.log(`Value: ${value}`);
}
```

## Functions
#### .keys()
```javascript
Object.keys(object).forEach(function(key) {
  console.log(`Key: ${key}, Value: ${object[key]}`);
});
```

#### .values()
```javascript
Object.values(object).forEach(function(value) {
  console.log(`Value: ${value}`);
});
```

#### .entries()
```javascript
Object.entries(object).forEach(function([key, value]) {
  console.log(`Key: ${key}, Value: ${value}`);
});
```