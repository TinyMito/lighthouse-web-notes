# Conditional

### if...else
Check condition
```javascript
if (a === b) {
  // do stuff
} else {
  // do stuff
}
```

Check if truthy
```javascript
if (a) {
  // do stuff if true
} else {
  // do stuff if false
}
```

Check if falsey
```javascript
if (!a) {
  // do stuff if false
} else {
  // do stuff if true
}
```

### ES6 Shorthand
```javascript
let result = a === b ? 'do true stuff' : 'do false stuff';
```

## Built-In Function
`Array.isArray()` check if this is an array.


## Built-In Operator
`typeof variable === 'object'`

- `undefined`: when the operand is undefined
- `boolean`: when the operand is a boolean value (`true` or `false`)
- `number`: when the operand is a number
- `bigint`: when the operand is a BigInt
- `string`: when the operand is a string
- `symbol`: when the operand is a symbol
- `function`: when the operand is a function
- `object`: when the operand is an object (excluding null)
- `null`: when the operand is null
