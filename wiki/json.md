# JSON

### JSON contain object only
```javascript
let jsonString = '{"key1":"Cat","key2":"Dog"}';
let obj = JSON.parse(jsonString);
console.log(obj.key1); // "Cat"
```
Alternate example setup key as variable
```javascript
const { key1, key2 } = JSON.parse(jsonString);
```

### JSON contain array and object
```javascript
let jsonString = '[{"key1":"Cat","key2":"Dog"}]';
```
Example 1 setup key as variable in an array
```javascript
let arr = JSON.parse(jsonString);
const { key1, key2 } = arr[0];
```

Example 2 setup key as variable in an array
```javascript
const [{ key1, key2 }] = JSON.parse(jsonString);
```
