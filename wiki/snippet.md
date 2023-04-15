# Code Snippet
### Finding the Mean in an array!
```javascript
const mean = [1, 2, 3];
let sum = 0;

for (const digit of mean) {
  sum += digit; // Sum all the element together
}

const average = (sum / mean.length);
```

### Finding the Mean in an object!
```javascript
const mean = { 1: 3, 2: 5, 3:5 };
let sum = 0;
let count = 0;

for (const key in mean) {
  sum += mean[key];
  count++; // Count the iterate as it adds up the sum
}

const average = (sum / count);
```